import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Softwared — Custom Software That Runs Your Business",
  description:
    "We design and develop tailored mobile and web applications that automate core business processes, help you serve more customers, and reduce operational costs.",
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
