"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export function ThreadedStoryPath({ children }: { children: React.ReactNode }) {
  const storyRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const fullLength = useMotionValue(1);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start 85%", "end 15%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 65, damping: 24, restDelta: 0.001 });

  return (
    <div ref={storyRef} className="threaded-story">
      <svg className="story-thread" viewBox="0 0 100 1200" preserveAspectRatio="none" aria-hidden="true">
        <path className="story-thread-ghost" d="M8 0 C12 95 5 150 9 235 C13 330 6 410 10 505 C14 600 5 690 9 790 C13 880 6 980 10 1200" />
        <motion.path
          className="story-thread-live"
          d="M8 0 C12 95 5 150 9 235 C13 330 6 410 10 505 C14 600 5 690 9 790 C13 880 6 980 10 1200"
          style={{ pathLength: reduced ? fullLength : smooth }}
        />
        {[110, 285, 460, 640, 825, 1020, 1160].map((y) => <circle key={y} cx="9" cy={y} r="3" className="story-checkpoint" />)}
      </svg>
      {children}
    </div>
  );
}
