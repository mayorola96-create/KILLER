"use client";

import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  );

  // IntersectionObserver to automatically play when scrolled into view
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start video on first scroll into view
            setHasStarted((prev) => {
              if (!prev) return true;
              // If already started, resume playback via postMessage
              try {
                iframeRef.current?.contentWindow?.postMessage(
                  JSON.stringify({ event: "command", func: "playVideo", args: "" }),
                  "*"
                );
              } catch {
                // Ignore cross-origin postMessage errors
              }
              return true;
            });
          } else {
            // When scrolled out of view, pause to save resources
            try {
              iframeRef.current?.contentWindow?.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
                "*"
              );
            } catch {
              // Ignore cross-origin postMessage errors
            }
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handlePlayManually = () => {
    setIsMuted(false);
    setHasStarted(true);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: nextMuted ? "mute" : "unMute",
          args: ""
        }),
        "*"
      );
    } catch {
      // Ignore cross-origin postMessage errors
    }
  };

  return (
    <div ref={containerRef} className="video-player-container">
      {hasStarted ? (
        <div className="video-iframe-wrapper">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=${
              isMuted ? "1" : "0"
            }&playsinline=1&rel=0&enablejsapi=1&controls=1`}
            title={label}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-iframe"
          />
          <button
            type="button"
            onClick={handleToggleMute}
            className="video-audio-toggle"
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            title={isMuted ? "Click to unmute" : "Click to mute"}
          >
            {isMuted ? (
              <>
                <VolumeX size={15} aria-hidden="true" />
                <span>Tap to Unmute</span>
              </>
            ) : (
              <>
                <Volume2 size={15} aria-hidden="true" />
                <span>Sound On</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="video-play-area video-placeholder"
          onClick={handlePlayManually}
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
