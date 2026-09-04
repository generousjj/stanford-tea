/**
 * SSR-safe media-query hook via useSyncExternalStore.
 * Avoids hydration mismatches and setState-in-effect lint issues.
 */
import { useSyncExternalStore } from "react";

function subscribe(query: string, onStoreChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => subscribe(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => false
  );
}
