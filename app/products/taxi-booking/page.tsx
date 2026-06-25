import { TaxiBooking } from "@/components/products/TaxiBooking";

export const metadata = {
  title: "Taxi Booking App Development | Ride-Hailing Platform",
  description:
    "Launch your ride-hailing business with Devarya Solutions' taxi booking app. Includes real-time GPS tracking, driver management, fare calculator, and in-app payments.",
  alternates: { canonical: "https://devaryasolutions.com/products/taxi-booking" },
};

export default function Page() {
  return <TaxiBooking />;
}
