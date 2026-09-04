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
 * student leadership team.
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
      className="max-w-xl rounded-t-3xl border-4 border-[#1C1917] bg-[#FFF4DF] shadow-[8px_8px_0_0_#1C1917] sm:rounded-3xl"
    >
      <div className="relative px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1C1917] text-[#1C1917] transition hover:bg-[#F4C95D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515] sm:right-4 sm:top-4"
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" aria-hidden />
        </button>

        <p className="pr-12 font-work-sans text-xs font-bold uppercase tracking-widest text-[#8C1515]">
          Giving &amp; involvement
        </p>
        <h2
          id={titleId}
          className="font-archivo-black mt-2 max-w-[18ch] text-3xl uppercase leading-none text-[#1C1917] sm:text-4xl"
        >
          Support TEA at Stanford
        </h2>

        <div
          id={descId}
          className="mt-5 space-y-4 font-work-sans text-[15px] leading-relaxed text-[#1C1917]/85"
        >
          <p className="text-base font-semibold text-[#1C1917]">
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

        <div className="mt-6 rounded-2xl border-2 border-[#1C1917] bg-[#F4C95D]/35 p-4 sm:p-5">
          <h3 className="font-archivo-black text-lg uppercase leading-none text-[#1C1917]">
            Make a Gift
          </h3>
          <p className="mt-3 font-work-sans text-[15px] leading-relaxed text-[#1C1917]/85">
            Gifts to TEA at Stanford can be made through Stanford University.
            When directing your gift, select{" "}
            <span className="font-bold text-[#1C1917]">
              Other Stanford Designation
            </span>{" "}
            and specify:
          </p>
          <p className="mt-3 rounded-xl border-2 border-[#1C1917] bg-[#FFF4DF] px-3 py-3 font-work-sans text-sm font-bold leading-snug text-[#1C1917]">
            Themed Entertainment Association at Stanford University — ASSU #5288
          </p>
          <p className="mt-3 font-work-sans text-xs leading-relaxed text-[#1C1917]/65">
            Your support helps fund student programming, industry engagement,
            educational experiences, competitions, travel, and other
            opportunities for students interested in themed entertainment.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={STANFORD_GIVING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#8C1515] px-5 py-3.5 text-center font-work-sans text-sm font-bold text-[#FFF4DF] shadow-[4px_4px_0_0_#1C1917] transition hover:bg-[#F05A47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
          >
            Donate through Stanford
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
          <a
            href={TEA_TEAM_MAILTO}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#1C1917] bg-[#FFF4DF] px-5 py-3.5 text-center font-work-sans text-sm font-bold text-[#1C1917] transition hover:bg-[#69C5D8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C1515]"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            Contact the TEA Team
          </a>
        </div>
      </div>
    </Modal>
  );
}
