import "./globals.css";

import type { Metadata } from "next";

import localFont from "next/font/local";

const vazirmatn = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehrdad Seif — Full Stack Developer & Digital Product Creator",
  description: "Personal portfolio of Mehrdad Seif.",
  other: {
    enamad: "54250757",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={vazirmatn.variable}>{children}</body>
    </html>
  );
}