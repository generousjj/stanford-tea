import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TEA @ Stanford",
    template: "%s · TEA @ Stanford",
  },
  description:
    "Stanford Themed Entertainment Association — exploring how immersive, memorable experiences are imagined, engineered, produced, and operated.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-work-sans antialiased">{children}</body>
    </html>
  );
}
