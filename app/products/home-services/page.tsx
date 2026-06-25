import { HomeServices } from "@/components/products/HomeServices";

export const metadata = {
  title: "Home Services App Development | On-Demand Service Platform",
  description:
    "Build an on-demand home services app like UrbanClap with Devarya Solutions. Supports plumbing, cleaning, electricians, service provider management, and in-app booking.",
  alternates: { canonical: "https://devaryasolutions.com/products/home-services" },
};

export default function Page() {
  return <HomeServices />;
}
