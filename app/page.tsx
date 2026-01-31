import type { Metadata } from "next";

import LandingPage from "./components/LandingPage";
import { BOOKING_URL } from "./lib/links";

export const metadata: Metadata = {
  title: "Custom Software Development & Business Automation | softwared",
  description:
    "Custom software development for service businesses and ops teams. We build internal systems, business automation, and web + mobile apps that reduce admin, eliminate errors, and scale operations. First version in 2–6 weeks.",
  alternates: { canonical: "/" },
  keywords: [
    "custom software development",
    "business automation",
    "internal systems",
    "operational software",
    "web applications",
    "mobile apps",
    "workflow automation",
    "business process automation",
  ],
};

export default function Home() {
  return <LandingPage bookingUrl={BOOKING_URL} />;
}
