"use client";

import { useEffect, useState } from "react";

// The page is statically prerendered, so a build-time year would go stale.
// Render the build year first (matching SSR), then correct to the visitor's
// local year on mount. Never shows earlier than the year this was published.
const BASE_YEAR = 2026;

export function CurrentYear() {
  const [year, setYear] = useState(BASE_YEAR);

  useEffect(() => {
    setYear(Math.max(new Date().getFullYear(), BASE_YEAR));
  }, []);

  return <>{year}</>;
}
