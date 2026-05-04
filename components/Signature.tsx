"use client";

import { useEffect, useState } from "react";

export default function Signature({ name }: { name: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="signature-container" aria-label={name}>
      <span className="signature-text">{name}</span>
      {/* The mask simulates the drawing effect */}
      {mounted && <div className="signature-mask" />}
    </div>
  );
}
