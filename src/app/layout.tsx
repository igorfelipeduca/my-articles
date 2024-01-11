import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Articles",
  description: "Articles by Igor F. Duca",
  openGraph: {
    title: "Articles",
    description: "Articles by Igor F. Duca",
    url: "https://articles.duca.dev",
    siteName: "Articles",
    images: [
      {
        url: "https://i.ibb.co/k4zbppp/Screenshot-2024-01-11-at-20-29-11.png",
        width: 1800,
        height: 1600,
        alt: "Articles - An open-source articles by Igor F. Duca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
