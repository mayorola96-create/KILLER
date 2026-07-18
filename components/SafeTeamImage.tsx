"use client";

import Image from "next/image";
import { useState } from "react";

export function SafeTeamImage({ src, name, role }: { src: string; name: string; role: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

  return (
    <>
      <div className="monogram fallback-monogram" aria-hidden="true">{initials}</div>
      {!failed ? (
        <Image
          src={src}
          fill
          unoptimized
          priority
          fetchPriority="high"
          referrerPolicy="no-referrer"
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 42vw, 25vw"
          alt={`${name}, ${role} at Sage Partners`}
          className="team-photo object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : null}
    </>
  );
}
