
// FavoritesContext.jsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const FavoritesContext = createContext(null);
const LS_KEY = "favoriteEvents"; // store full objects

// Read favorites from localStorage (array of objects)
function readLS() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

// Write favorites to localStorage
function writeLS(array) {
  localStorage.setItem(LS_KEY, JSON.stringify(array));
}

export function FavoritesProvider({ children }) {
  // Each item is a full record: { date, title, ... }
  const [favorites, setFavorites] = useState(() => readLS());

  // Persist on change
  useEffect(() => {
    writeLS(favorites);
  }, [favorites]);


  // Helpers
  debugger
  const isFavorite = useCallback(
    (date) => favorites.some((f) => f.date === date),
    [favorites]
  );

  // // Upsert: replace existing favorite with the latest item fields, or add new
  // const upsertFavorite = useCallback((item) => {
  //   setFavorites((prev) => {
  //     const idx = prev.findIndex((f) => f.date === item.date);
  //     if (idx === -1) {
  //       return [...prev, item];
  //     }
  //     const next = prev.slice();
  //     next[idx] = { ...prev[idx], ...item }; // merge to keep fields; or replace entirely
  //     return next;
  //   });
  // }, []);

  const removeFavorite = useCallback((date) => {
    setFavorites((prev) => prev.filter((f) => f.date !== date));
  }, []);

  // Toggle by full item record
  const toggleFavorite = useCallback(
    (item) => {
      setFavorites((prev) => {
        const idx = prev.findIndex((f) => f.date === item.date);
        if (idx === -1) {
          return [...prev, item]; // add full record
        }
        // remove
        const next = prev.slice();
        next.splice(idx, 1);
        return next;
      });
    },
    []
  );

  const value = useMemo(
    () => ({
      favorites,
      count: favorites.length,
      isFavorite,
      // upsertFavorite,
      removeFavorite,
      toggleFavorite,
    }),
    [favorites, isFavorite, /*upsertFavorite,*/ removeFavorite, toggleFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
