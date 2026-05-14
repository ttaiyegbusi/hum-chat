import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const plex = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hum — chats & livestreams",
  description: "A clean, minimal place for daily conversations and livestreams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plex.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
