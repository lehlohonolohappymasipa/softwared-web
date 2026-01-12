import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { getSiteUrl } from "./lib/site";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const monoFallback = Inter({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Softwared — Custom Software That Runs Your Business",
    template: "%s | Softwared",
  },
  description:
    "We design and develop tailored software: web applications, mobile applications, e-commerce solutions, and Flutter apps that automate core business processes, help you serve more customers, and reduce operational costs.",
  keywords: [
    "software",
    "software development",
    "custom software",
    "web applications",
    "mobile applications",
    "e-commerce",
    "ecommerce",
    "Flutter",
    "Flutter app development",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Softwared — Custom Software That Runs Your Business",
    description:
      "Custom software development for web applications, mobile applications, e-commerce, and Flutter.",
    siteName: "Softwared",
    locale: "en_US",
    images: [
      {
        url: "/softwared-logo.svg",
        width: 440,
        height: 120,
        alt: "Softwared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softwared — Custom Software That Runs Your Business",
    description:
      "Custom software development for web applications, mobile applications, e-commerce, and Flutter.",
    images: ["/softwared-logo.svg"],
  },
  icons: {
    icon: [{ url: "/file.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} ${monoFallback.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
