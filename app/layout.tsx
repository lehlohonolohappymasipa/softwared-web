import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { getAbsoluteUrl } from "./lib/site";
import { BOOKING_URL } from "./lib/links";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

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
  verification: {
    google: "ZzVtjdeOh5_xQNqPYYLfo95uj9F4hHfXaOcpZ_quaFI",
  },
  title: {
    default: "softwared — Technology shaped for impact.",
    template: "%s | softwared",
  },
  description:
    "Custom software development for service businesses, startups, and ops teams. We build internal systems, web and mobile apps, and business automation that reduces admin and errors.",
  keywords: [
    "softwared",
    "software",
    "software development",
    "custom software",
    "custom software development",
    "internal systems",
    "business automation",
    "web applications",
    "web application development",
    "mobile applications",
    "mobile app development",
    "business automation software",
  ],
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
    title: "softwared — Technology shaped for impact.",
    description:
      "Custom software development, business automation, internal systems, and web and mobile apps. Built to reduce admin and errors.",
    siteName: "softwared",
    locale: "en_US",
    images: [
      {
        url: "/softwared_logo.png",
        width: 440,
        height: 120,
        alt: "softwared logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "softwared — Technology shaped for impact.",
    description:
      "Custom software development, business automation, internal systems, and web and mobile apps. Built to reduce admin and errors.",
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80]"
        >
          Skip to content
        </a>
        <SiteHeader bookingUrl={BOOKING_URL} />
        <WhatsAppFloatingButton />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
