"use client";

import { ArrowUpRight } from "lucide-react";
import { JOIN_FORM_URL } from "@/lib/links";

/**
 * Join CTA card — opens the live Google Interest Form in a new tab
 * (Stanford Google sign-in). No iframe embed.
 */
export function PosterJoinForm() {
  return (
    <div className="rounded-3xl border-4 border-[#1C1917] bg-[#FFF4DF] p-6 shadow-[6px_6px_0_0_#1C1917] sm:p-8">
      <p className="font-work-sans text-xs font-bold uppercase tracking-widest text-[#8C1515]">
        STEA Interest Form 2026–27
      </p>
      <h3 className="font-archivo-black mt-2 text-3xl uppercase leading-none text-[#1C1917] sm:text-4xl">
        Count me in
      </h3>
      <p className="mt-3 max-w-md font-work-sans text-base font-semibold leading-relaxed text-[#1C1917]/80">
        Takes about a minute. Sign in with your Stanford Google account — we&rsquo;ll
        follow up with events, projects, and ways to get involved.
      </p>
      <ul className="mt-5 space-y-2 font-work-sans text-sm font-bold text-[#1C1917]">
        {[
          "Name, year, major",
          "What you want to explore",
          "Optional: experience & how you found us",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F05A47]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={JOIN_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8C1515] px-6 py-3.5 font-work-sans text-base font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#1C1917] transition hover:bg-[#F05A47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917] sm:w-auto"
      >
        Open interest form
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </a>
    </div>
  );
}
