import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECHNORA - Empowering Youth Through Technology",
  description: "A community-driven movement bridging the gap between ambition and opportunity for students and young professionals in tech",
  keywords: "tech community, youth empowerment, MENA tech, programming, career development",
  authors: [{ name: "TECHNORA Team" }],
  openGraph: {
    title: "TECHNORA - Empowering Youth Through Technology",
    description: "Join the movement. Launch: 06/06/2026",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
