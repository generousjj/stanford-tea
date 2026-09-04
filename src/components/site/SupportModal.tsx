"use client";

import { useId } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import { STANFORD_GIVING_URL, TEA_TEAM_MAILTO } from "@/lib/links";

type SupportModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Welcoming giving / support dialog — donate via Stanford or email the TEA
 * student leadership team. Layout keeps the CTAs pinned so they stay visible
 * without scrolling on typical desktop and mobile viewports.
 */
export function SupportModal({ open, onClose }: SupportModalProps) {
  const titleId = useId();
  const descId = useId();

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledById={titleId}
      describedById={descId}
      className="flex max-h-[min(94dvh,40rem)] max-w-lg flex-col overflow-hidden rounded-t-3xl border-4 border-[#1C1917] bg-[#FFF4DF] shadow-[8px_8px_0_0_#1C1917] sm:max-h-[min(94dvh,48rem)] sm:rounded-3xl"
    >
      <div className="relative shrink-0 px-5 pb-3 pt-4 sm:px-6 sm:pt-5">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1C1917] text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515] sm:right-4 sm:top-4"
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" aria-hidden />
        </button>

        <p className="pr-11 font-work-sans text-[10px] font-bold uppercase tracking-widest text-[#8C1515]">
          Giving &amp; involvement
        </p>
        <h2
          id={titleId}
          className="font-archivo-black mt-1.5 max-w-[18ch] text-[1.65rem] uppercase leading-none text-[#1C1917] sm:text-3xl"
        >
          Support TEA at Stanford
        </h2>
      </div>

      <div
        id={descId}
        className="min-h-0 flex-1 overflow-y-auto px-5 sm:px-6"
      >
        <div className="space-y-2.5 font-work-sans text-sm leading-snug text-[#1C1917]/85 sm:text-[15px] sm:leading-relaxed">
          <p className="font-semibold text-[#1C1917]">
            Interested in supporting the next generation of themed entertainment
            creators?
          </p>
          <p>
            The Themed Entertainment Association at Stanford University connects
            students with the themed entertainment industry through educational
            events, industry speakers, professional networking, project
            opportunities, competitions, and experiences beyond campus.
          </p>
          <p>
            Whether you are an industry professional, alumnus, parent,
            organization, or friend of TEA, we would love to hear from you.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border-2 border-[#1C1917] bg-[#F4C95D]/35 p-3.5 sm:p-4">
          <h3 className="font-archivo-black text-base uppercase leading-none text-[#1C1917]">
            Make a Gift
          </h3>
          <p className="mt-2 font-work-sans text-sm leading-snug text-[#1C1917]/85">
            Gifts to TEA at Stanford can be made through Stanford University.
            When directing your gift, select{" "}
            <span className="font-bold text-[#1C1917]">
              Other Stanford Designation
            </span>{" "}
            and specify:
          </p>
          <p className="mt-2.5 rounded-xl border-2 border-[#1C1917] bg-[#FFF4DF] px-3 py-2 font-work-sans text-xs font-bold leading-snug text-[#1C1917] sm:text-sm">
            Themed Entertainment Association at Stanford University — ASSU #5288
          </p>
          <p className="mt-2 font-work-sans text-[11px] leading-snug text-[#1C1917]/65">
            Your support helps fund student programming, industry engagement,
            educational experiences, competitions, travel, and other
            opportunities for students interested in themed entertainment.
          </p>
        </div>
      </div>

      <div className="shrink-0 border-t-2 border-[#1C1917] bg-[#FFF4DF] px-5 py-3.5 sm:px-6 sm:py-4">
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <a
            href={STANFORD_GIVING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#8C1515] px-4 py-3 text-center font-work-sans text-sm font-bold text-[#FFF4DF] shadow-[3px_3px_0_0_#1C1917] transition hover:bg-[#F05A47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
          >
            Donate through Stanford
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <a
            href={TEA_TEAM_MAILTO}
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-4 py-3 text-center font-work-sans text-sm font-bold text-[#1C1917] transition hover:bg-[#69C5D8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Contact the TEA Team
          </a>
        </div>
      </div>
    </Modal>
  );
}
