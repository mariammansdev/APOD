
// src/components/SolarSystem.jsx
import React from "react";

/**
 * A lightweight, pure-SVG solar system animation.
 * - No user controls: planets orbit automatically, each rotates on its axis.
 * - Includes Sun glow, orbits, all 8 planets, Saturn's rings, Earth's Moon.
 * - Works with Tailwind/DaisyUI but does not depend on them.
 *
 * Props:
 * - size: overall SVG size in pixels (default 720)
 * - dark: set true to use a darker background (pairs nicely with DaisyUI dark themes)
 */
export default function RotatingHero({ size = 720, dark = true }) {
  const cx = size / 2;
  const cy = size / 2;

  // Visual + timing settings (not to scale, just pleasing)
  const planets = [
    { name: "Mercury", radius: 60,  r: 4,  orbitS: 6,  spinS: 6,  color: "#9ca3af" },
    { name: "Venus",   radius: 90,  r: 7,  orbitS: 10, spinS: 12, color: "#f59e0b" },
    { name: "Earth",   radius: 120, r: 8,  orbitS: 12, spinS: 8,  color: "#3b82f6", hasMoon: true },
    { name: "Mars",    radius: 150, r: 6,  orbitS: 15, spinS: 8,  color: "#ef4444" },
    { name: "Jupiter", radius: 200, r: 14, orbitS: 20, spinS: 5,  color: "#fbbf24" },
    { name: "Saturn",  radius: 250, r: 12, orbitS: 24, spinS: 6,  color: "#f59e0b", hasRings: true },
    { name: "Uranus",  radius: 300, r: 10, orbitS: 28, spinS: 7,  color: "#93c5fd" },
    { name: "Neptune", radius: 340, r: 10, orbitS: 32, spinS: 7,  color: "#60a5fa" },
  ];

  return (
    <div
      className={'grid place-items-center bg-transparent'}
      style={{ width: "100%" }}
      aria-label="Animated solar system"
      role="img"
    >
      <style>{`
        /* One keyframe reused for orbit and spin */
        @keyframes spin360 { to { transform: rotate(360deg); } }

        /* Respect reduced-motion settings */
        @media (prefers-reduced-motion: reduce) {
          .anim { animation-play-state: paused !important; }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
        className="max-w-[min(90vw,900px)] drop-shadow"
      >
        <defs>
          {/* Sun glow */}
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%"   stopColor="#fff59d" stopOpacity="1" />
            <stop offset="40%"  stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.10" />
          </radialGradient>

          {/* Neutral highlight overlay for spherical look on planets */}
          <radialGradient id="planetLight" cx="35%" cy="35%" r="70%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.22" />
            <stop offset="45%"  stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.28" />
          </radialGradient>

          {/* Subtle band to suggest texture while spinning */}
          <linearGradient id="band" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="50%"  stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Background stars (subtle) */}
        <g opacity="0.15">
          {Array.from({ length: 120 }).map((_, i) => {
            // deterministic pseudo-random
            const a = (i * 137.508) % 360;
            const d = (i * 7.1) % (size / 2);
            const x = cx + Math.cos((a * Math.PI) / 180) * d;
            const y = cy + Math.sin((a * Math.PI) / 180) * d;
            const s = 0.6 + ((i * 31) % 10) / 20;
            return <circle key={i} cx={x} cy={y} r={s} fill="white" />;
          })}
        </g>

        {/* Sun */}
        <g>
          <circle cx={cx} cy={cy} r={36} fill="url(#sunGlow)" />
          <circle cx={cx} cy={cy} r={28} fill="#fde047" />
        </g>

        {/* Orbits */}
        <g>
          {planets.map((p) => (
            <circle
              key={`${p.name}-orbit`}
              cx={cx}
              cy={cy}
              r={p.radius}
              fill="none"
              stroke={dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
              strokeDasharray="3 6"
            />
          ))}
        </g>

        {/* Planets (orbiting groups) */}
        {planets.map((p) => (
          <g
            key={p.name}
            className="anim"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              animation: `spin360 ${p.orbitS}s linear infinite`,
            }}
          >
            {/* Anchor orbit: translate to the right of the Sun, then planet sits there */}
            <g transform={`translate(${cx} ${cy}) translate(${p.radius} 0)`}>
              {/* Planet self-rotation group */}
              <g
                className="anim"
                style={{
                  transformOrigin: `0px 0px`,
                  animation: `spin360 ${p.spinS}s linear infinite`,
                }}
              >
                {/* Planet body */}
                <circle cx="0" cy="0" r={p.r} fill={p.color} />
                {/* Spherical lighting overlay */}
                <circle cx="0" cy="0" r={p.r} fill="url(#planetLight)" />
                {/* Subtle rotating bands to suggest texture */}
                <ellipse cx="0" cy="0" rx={p.r * 1.2} ry={p.r * 0.25} fill="url(#band)" opacity="0.5" />
                <ellipse cx="0" cy="0" rx={p.r * 0.9} ry={p.r * 0.18} fill="url(#band)" opacity="0.3" />

                {/* Saturn rings */}
                {p.hasRings && (
                  <g opacity="0.9">
                    <ellipse
                      cx="0"
                      cy="0"
                      rx={p.r * 2}
                      ry={p.r * 0.8}
                      fill="none"
                      stroke="#fde68a"
                      strokeWidth={Math.max(1, p.r * 0.25)}
                      transform="rotate(-23)"
                      opacity="0.9"
                    />
                    <ellipse
                      cx="0"
                      cy="0"
                      rx={p.r * 1.4}
                      ry={p.r * 0.5}
                      fill="none"
                      stroke="#fcd34d"
                      strokeWidth={Math.max(1, p.r * 0.2)}
                      transform="rotate(-23)"
                      opacity="0.8"
                    />
                  </g>
                )}

                {/* Earth's Moon (SMIL-based rotation for reliable local origin) */}
                {p.hasMoon && (
                  <g>
                    {/* moon orbit path (local) */}
                    <circle
                      cx="0"
                      cy="0"
                      r={p.r + 14}
                      fill="none"
                      stroke={dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)"}
                      strokeDasharray="2 5"
                    />
                    {/* Moon group rotates around planet center (0,0) */}
                    <g>
                      <circle cx={p.r + 14} cy="0" r="2.3" fill="#e5e7eb" />
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </g>
                  </g>
                )}
              </g>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
