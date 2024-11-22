<<<<<<< HEAD
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CC Weekly Report",
  description: "Weekly report for CC team",
=======
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";
import "animate.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candidate College - Education Platform for Students in Indonesia",
  description:
    "Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.",
  authors: [
    {
      name: "Web Developer Candidate College",
      url: "https://candidatecollegeind.com",
    },
  ],
  icons: "https://i.postimg.cc/vZMVCm7g/LOGO-CC.png",
  keywords: [
    "College",
    "Kampus",
    "Fasilitas",
    "Students",
    "Student",
    "Mahasiswa",
    "Indonesia",
    "Candidate College",
    "Education System",
    "Education in Indonesia",
    "Candidate College",
    "Event",
    "UTBK",
    "Tes TOEFL",
    "Internship",
    "Magang",
    "Platform Edukasi",
    "Artikel",
    "Programs",
    "Test Hosting",
  ],
  publisher: "Rumah Web",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  referrer: "origin",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c2330" },
    { media: "(prefers-color-scheme: light)", color: "#1B4E6B" },
  ],
>>>>>>> 24e0ed8 (mentoring)
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
=======
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
>>>>>>> 24e0ed8 (mentoring)
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  );
}
