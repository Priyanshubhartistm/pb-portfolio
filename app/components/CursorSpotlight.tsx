"use client";

import { useEffect } from "react";

export const CursorSpotlight = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updatePosition = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return <div className="cursor-spotlight" aria-hidden="true" />;
};
