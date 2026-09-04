"use client";

import { useState } from "react";
import { SupportModal } from "@/components/site/SupportModal";

type DonateButtonProps = {
  children?: React.ReactNode;
  className?: string;
  /** Optional side effect when opening (e.g. close the mobile menu). */
  onBeforeOpen?: () => void;
  /**
   * When set, the parent owns SupportModal. Use this when the button may
   * unmount on click (e.g. inside a mobile menu that closes).
   */
  onOpen?: () => void;
};

/**
 * Opens the Support TEA modal. Owns its own modal by default; pass `onOpen`
 * to lift modal state to a parent that stays mounted.
 */
export function DonateButton({
  children = "Donate",
  className = "",
  onBeforeOpen,
  onOpen,
}: DonateButtonProps) {
  const [open, setOpen] = useState(false);
  const controlled = typeof onOpen === "function";

  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="dialog"
        onClick={() => {
          onBeforeOpen?.();
          if (controlled) onOpen();
          else setOpen(true);
        }}
      >
        {children}
      </button>
      {!controlled && (
        <SupportModal open={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
