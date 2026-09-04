"use client";

import { useState } from "react";
import { SupportModal } from "@/components/site/SupportModal";

type DonateButtonProps = {
  children?: React.ReactNode;
  className?: string;
  /** Optional side effect when opening (e.g. close the mobile menu). */
  onBeforeOpen?: () => void;
};

/**
 * Opens the Support TEA modal instead of navigating away. Drop-in replacement
 * for the previous Donate PlaceholderLink.
 */
export function DonateButton({
  children = "Donate",
  className = "",
  onBeforeOpen,
}: DonateButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="dialog"
        onClick={() => {
          onBeforeOpen?.();
          setOpen(true);
        }}
      >
        {children}
      </button>
      <SupportModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
