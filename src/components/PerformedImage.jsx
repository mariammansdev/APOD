
// src/components/SmartImage.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

/**
 * In-memory cache for aspect ratios by src URL.
 * If you want persistence across sessions, you can mirror this to localStorage.
 */
const ratioCache = new Map();

export default function SmartImage({
  src,
  alt,
  lqip,              // optional tiny blurred placeholder (data URL or tiny image URL)
  eager = false,      // true for above-the-fold images
  className,
  cover = true,       // object-fit cover by default (set to false to use contain)
  rounded = "rounded-lg",
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
//   const [ratio, setRatio] = useState(() => ratioCache.get(src) ?? null);
  const containerRef = useRef(null);

//   const styleAspect = useMemo(() => {
//     // If we know the ratio, use it; else a reasonable default (4/3)
//     const r = ratio ?? 4 / 3;
//     return { aspectRatio: `${r}` };
//   }, [ratio]);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    setErrored(false);

    // Preload & decode off-DOM for smooth reveal
    const img = new Image();
    // Note: Some browsers ignore .loading on Image(), but we still set it.
    img.loading = eager ? "eager" : "lazy";
    img.decoding = "async";
    img.src = src;

    const onLoadLike = async () => {
      debugger
      try {
        // Capture intrinsic size to learn aspect ratio
        if (img.naturalWidth && img.naturalHeight) {
          const r = img.naturalWidth / img.naturalHeight;
          ratioCache.set(src, r);
          if (!cancelled) setRatio(r);
        }
        // Wait for decode to avoid progressive paint
        if (img.decode) {
          await img.decode();
        }
      } catch {
        // Some formats/browsers may throw; proceed anyway
      } finally {
        if (!cancelled) setLoaded(true);
      }
    };

    const onError = () => {
      if (!cancelled) setErrored(true);
    };

    img.onload = onLoadLike;
    img.onerror = onError;

    return () => {
      cancelled = true;
    };
  }, [src, eager]);

  return (
    <div
      ref={containerRef}
      className={clsx("relative w-full overflow-hidden bg-base-200", rounded)}
      style={{aspectRatio: 4/3}}
    >
      {/* Placeholder layer (blur LQIP or skeleton) */}
      {!loaded && !errored && (
        lqip ? (
          <img
            src={lqip}
            alt=""
            aria-hidden
            loading="lazing"
            decode="async"
            className={clsx(
              "absolute inset-0 w-full h-full",
              cover ? "object-cover" : "object-contain",
              "filter blur-md scale-105"
            )}
          />
        ) : (
          <div className="absolute inset-0 skeleton" />
        )
      )}

      {/* Real image (revealed only after decode) */}
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={eager ? "high" : "low"}
          className={clsx(
            "absolute inset-0 w-full h-full transition-opacity duration-300",
            cover ? "object-cover" : "object-contain",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}

      {/* Error fallback */}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-200 text-sm opacity-70">
          Image failed to load
        </div>
      )}
    </div>
  );
}
