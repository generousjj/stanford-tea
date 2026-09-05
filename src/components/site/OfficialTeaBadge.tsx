import { asset } from "@/lib/asset";

type OfficialTeaBadgeProps = {
  /** light = full-color mark on cream/light; dark = white knockout on dark bg */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Show supporting recognition line under/beside the mark */
  showCaption?: boolean;
  captionClassName?: string;
  /** Prefer eager load for above-the-fold placements */
  priority?: boolean;
};

const HEIGHT: Record<NonNullable<OfficialTeaBadgeProps["size"]>, string> = {
  sm: "h-8 sm:h-9",
  md: "h-11 sm:h-12",
  lg: "h-14 sm:h-16",
};

/**
 * Official TEA “Officially Recognized Student Organization” lockup.
 * Uses the provided brand asset as-is (no redraw) — color on light grounds,
 * white knockout on dark/cardinal/plum grounds.
 */
export function OfficialTeaBadge({
  variant = "light",
  size = "md",
  className = "",
  showCaption = false,
  captionClassName = "",
  priority = false,
}: OfficialTeaBadgeProps) {
  const src =
    variant === "dark"
      ? asset("/brand/tea-recognized-org-white.png")
      : asset("/brand/tea-recognized-org.png");

  return (
    <figure
      className={`inline-flex max-w-full items-start gap-3 ${
        showCaption ? "flex-col sm:flex-row sm:items-center" : ""
      } ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="TEA Officially Recognized Student Organization"
        className={`${HEIGHT[size]} w-auto max-w-full object-contain object-left`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {showCaption && (
        <figcaption
          className={
            captionClassName ||
            "max-w-[16rem] font-work-sans text-[11px] font-bold uppercase leading-snug tracking-widest text-current opacity-80"
          }
        >
          Officially recognized student organization of TEA NextGen
        </figcaption>
      )}
    </figure>
  );
}
