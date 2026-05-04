"use client";

import { useEffect, useState } from "react";

export default function Signature({ name }: { name: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="signature-container overflow-hidden px-8 py-4 -mx-8 -my-4" aria-label={name}>
      <span className="signature-text">{name}</span>
      {/* The mask simulates the drawing effect */}
      {mounted && <div className="signature-mask" />}
    </div>
  );
}
