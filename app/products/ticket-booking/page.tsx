import { TicketBooking } from "@/components/products/TicketBooking";

export const metadata = {
  title: "Ticket Booking App Development | Event & Travel Booking Platform",
  description:
    "Launch your ticket booking platform with Devarya Solutions. Covers event listings, seat selection, QR code tickets, payment integration, and booking management.",
  alternates: { canonical: "https://devaryasolutions.com/products/ticket-booking" },
};

export default function Page() {
  return <TicketBooking />;
}
