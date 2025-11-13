import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./sections/components/theme-provider"
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./sections/lib/queryClient";
import StructuredData from "./sections/components/StructuredData";
import { Toaster } from "sonner";
import { ErrorBoundary } from "./sections/components/ErrorBoundary";
import Analytics from "./sections/components/Analytics";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://p-feiteira.github.io";

export const metadata: Metadata = {
  title: "Pedro Feiteira - Software Developer",
  description: "Software Developer with a passion for building efficient and scalable applications. Based in Portugal, remote ready. Specialized in Python, TypeScript, React, and Next.js.",
  keywords: ["Pedro Feiteira", "Software Developer", "Full Stack Developer", "Portugal", "Python", "TypeScript", "React", "Next.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Pedro Feiteira" }],
  creator: "Pedro Feiteira",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pedro Feiteira - Software Developer",
    description: "Software Developer with a passion for building efficient and scalable applications. Based in Portugal, remote ready.",
    url: siteUrl,
    siteName: "Pedro Feiteira Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Pedro Feiteira",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Feiteira - Software Developer",
    description: "Software Developer with a passion for building efficient and scalable applications. Based in Portugal, remote ready.",
    images: ["/profile.jpeg"],
    creator: "@feiteira_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Analytics />
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster position="top-center" richColors closeButton />
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
