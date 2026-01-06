import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimatedBlobs from "@/components/layout/AnimatedBlobs";
import CustomCursor from "@/components/layout/CustomCursor";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Web Distt | Web & Software Development in Oman",
  description: "Transforming Ideas Into Digital Reality. We help businesses across Oman and the GCC build stunning websites, powerful software solutions, and digital experiences that drive growth and success.",
  keywords: ["web development", "software development", "Oman", "website design", "mobile apps", "digital agency"],
  authors: [{ name: "Web Distt" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Web Distt | Web & Software Development in Oman",
    description: "Transforming Ideas Into Digital Reality",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <CustomCursor />
            <AnimatedBlobs />
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

