import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles by Igor F. Duca",
  twitter: {
    card: "summary_large_image",
    site: "https://articles.duca.dev",
    creator: "@ducaswtf",
    title: "Articles",
    description: "Articles by Igor F. Duca",
    images: ["/preview.png"],
  },
  openGraph: {
    locale: "en_US",
    url: "https://articles.duca.dev",
    title: "Articles",
    description: "Articles by Igor F. Duca",
    type: "website",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
