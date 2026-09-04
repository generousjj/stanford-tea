import { Archivo_Black, Work_Sans } from "next/font/google";

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

/** Font CSS variables applied at the document root. */
export const fontVariables = [archivoBlack.variable, workSans.variable].join(
  " "
);
