import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  // Content is intentionally visible in the server-rendered HTML. Earlier
  // versions hid whole sections until IntersectionObserver fired, which could
  // leave content permanently invisible in some mobile and in-app browsers.
  return (
    <div className={`content-visible ${className}`}>
      {children}
    </div>
  );
}
