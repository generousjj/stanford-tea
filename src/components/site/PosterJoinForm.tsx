"use client";

import { JOIN_FORM_EMBED_SRC, JOIN_FORM_URL } from "@/lib/links";

/**
 * Embedded STEA Interest Form (Google Forms, Stanford-restricted).
 * Includes a direct-link fallback under the iframe.
 */
export function PosterJoinForm() {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-[#1C1917] bg-[#FFF4DF]">
      <div className="relative w-full overflow-hidden" style={{ height: 2275 }}>
        <iframe
          src={JOIN_FORM_EMBED_SRC}
          title="STEA Interest Form 2026–27"
          className="absolute inset-0 h-full w-full border-0 bg-[#FFF4DF]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
          Loading…
        </iframe>
      </div>
      <p className="border-t-2 border-[#1C1917] px-4 py-3 text-center font-work-sans text-xs font-semibold text-[#1C1917]/70">
        Sign in with your Stanford Google account to submit.{" "}
        <a
          href={JOIN_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#8C1515] underline-offset-2 hover:underline"
        >
          Open form in a new tab
        </a>
      </p>
    </div>
  );
}
