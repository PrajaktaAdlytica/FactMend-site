import React, { createContext, useContext, useEffect, useState } from "react";
const MotionContext = createContext({ reduced: false, setOverride: () => {} });
export function MotionProvider({ children }) {
  const [system, setSystem] = useState(false);
  const [override, setOverride] = useState(null);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystem(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const reduced = override ?? system;
  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
  }, [reduced]);
  return (
    <MotionContext.Provider value={{ reduced, setOverride }}>
      {children}
    </MotionContext.Provider>
  );
}
export const useMotionPreference = () => useContext(MotionContext);
