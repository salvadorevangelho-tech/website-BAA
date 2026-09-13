"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = false,
  className = "",
}: {
  children: React.ReactNode;
  delay?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${delay ? "delay-100" : ""} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
