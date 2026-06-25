import { GroceryDelivery } from "@/components/products/GroceryDelivery";

export const metadata = {
  title: "Grocery Delivery App Development | Online Grocery Platform",
  description:
    "Build your online grocery delivery platform with Devarya Solutions. Features include multi-store management, slot-based delivery, inventory tracking, and seamless checkout.",
  alternates: { canonical: "https://devaryasolutions.com/products/grocery-delivery" },
};

export default function Page() {
  return <GroceryDelivery />;
}
