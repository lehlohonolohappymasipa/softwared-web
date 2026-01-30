import type { Metadata } from "next";

import Homepage from "./components/Homepage";
import { BOOKING_URL } from "./lib/links";

export const metadata: Metadata = {
  title: "Custom software development & business automation",
  description:
    "Custom software development for service businesses, startups, and ops teams. We build internal systems, business automation, and web and mobile apps in 2 to 6 weeks for the first version.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Homepage bookingUrl={BOOKING_URL} />;
}
