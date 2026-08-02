import { useEffect, useState } from "react";

interface RotatingTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

/**
 * RotatingText
 * Cycles through phrases with a fade/slide transition.
 * Respects prefers-reduced-motion by showing the first phrase statically.
 */
export default function RotatingText({
  phrases,
  interval = 2500,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reducedMotion || phrases.length <= 1) return;

    const cycle = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, interval);

    return () => window.clearInterval(cycle);
  }, [phrases.length, interval, reducedMotion]);

  return (
    <span className="inline-block" aria-live="polite">
      <span
        className={`inline-block transition-all duration-400 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } ${className}`}
      >
        {phrases[index]}
      </span>
    </span>
  );
}
