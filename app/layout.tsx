import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { getAbsoluteUrl } from "./lib/site";

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
  // Include basePath so relative metadata URLs resolve correctly for both Netlify and static subpaths.
  metadataBase: new URL(getAbsoluteUrl("/")),
  title: {
    default: "softwared — Custom Software Development (Web, Mobile, Automation)",
    template: "%s | softwared",
  },
  description:
    "softwared is a custom software development studio building web applications, mobile apps, and business automation software that streamlines operations and reduces manual work.",
  keywords: [
    "softwared",
    "software",
    "software development",
    "custom software",
    "custom software development",
    "web applications",
    "web application development",
    "mobile applications",
    "mobile app development",
    "business automation software",
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
    title: "softwared — Custom Software Development (Web, Mobile, Automation)",
    description:
      "Custom software development for web applications, mobile applications, e-commerce, and Flutter.",
    siteName: "softwared",
    locale: "en_US",
    images: [
      {
        url: "/softwared_logo.png",
        width: 440,
        height: 120,
        alt: "Softwared",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "softwared — Custom Software Development (Web, Mobile, Automation)",
    description:
      "Custom software development for web applications, mobile applications, e-commerce, and Flutter.",
    images: ["/softwared_logo.png"],
  },
  icons: {
    icon: [{ url: "/softwared-logo.svg", type: "image/svg+xml" }],
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
