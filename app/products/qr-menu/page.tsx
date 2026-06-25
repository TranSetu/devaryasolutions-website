import { QrMenu } from "@/components/products/QrMenu";

export const metadata = {
  title: "QR Menu App Development | Digital Restaurant Menu Solution",
  description:
    "Replace physical menus with a smart QR-based digital menu from Devarya Solutions. Customers scan and order instantly — supports categories, images, pricing, and real-time updates.",
  alternates: { canonical: "https://devaryasolutions.com/products/qr-menu" },
};

export default function Page() {
  return <QrMenu />;
}
