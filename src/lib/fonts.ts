import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../assets/fonts/inter.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../assets/fonts/inter-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../assets/fonts/instrument-serif.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/instrument-serif-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: "../assets/fonts/jetbrains-mono.woff2",
      weight: "100 800",
      style: "normal",
    },
    {
      path: "../assets/fonts/jetbrains-mono-italic.woff2",
      weight: "100 800",
      style: "italic",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
