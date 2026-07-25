"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export function LazyYouTubeVideo({
  id,
  label,
  eyebrow = "Sage Partners video",
  prompt = "Watch video"
}: {
  id: string;
  label: string;
  eyebrow?: string;
  prompt?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={label}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="video-play-area video-placeholder" onClick={() => setPlaying(true)} aria-label={`Watch ${label}`}>
      <span className="video-placeholder-copy" aria-hidden="true">
        <small>{eyebrow}</small>
        <strong>{label}</strong>
      </span>
      <span className="video-play"><Play fill="currentColor" size={22} aria-hidden="true" /></span>
      <span className="video-watch">{prompt}</span>
    </button>
  );
}
