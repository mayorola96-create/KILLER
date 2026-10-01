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
  const [hasStarted, setHasStarted] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  );

  return (
    <div className="video-player-container">
      {hasStarted ? (
        <div className="video-iframe-wrapper">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&playsinline=1&rel=0`}
            title={label}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-iframe"
          />
        </div>
      ) : (
        <button
          type="button"
          className="video-play-area video-placeholder"
          onClick={() => setHasStarted(true)}
          aria-label={`Watch ${label}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbSrc}
            alt={`Thumbnail preview for ${label}`}
            onError={() =>
              setThumbSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)
            }
            className="video-thumbnail-img"
            loading="lazy"
          />
          <div className="video-thumbnail-overlay" />
          <span className="video-placeholder-copy" aria-hidden="true">
            <small>{eyebrow}</small>
            <strong>{label}</strong>
          </span>
          <span className="video-play">
            <Play fill="currentColor" size={22} aria-hidden="true" />
          </span>
          <span className="video-watch">{prompt}</span>
        </button>
      )}
    </div>
  );
}
