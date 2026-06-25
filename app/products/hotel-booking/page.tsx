import { HotelBooking } from "@/components/products/HotelBooking";

export const metadata = {
  title: "Hotel Booking App Development | Travel & Hospitality Platform",
  description:
    "Build a feature-rich hotel booking platform with Devarya Solutions. Supports room listings, availability calendars, booking management, reviews, and secure payment gateways.",
  alternates: { canonical: "https://devaryasolutions.com/products/hotel-booking" },
};

export default function Page() {
  return <HotelBooking />;
}
