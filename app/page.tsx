import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProductsOverview } from "@/components/home/ProductsOverview";
import { HireOverview } from "@/components/home/HireOverview";

export const metadata = {
  title: "Mobile & Web App Development Company in India",
  description:
    "Devarya Solutions builds scalable Android apps, iOS apps, web applications, and e-commerce stores for startups and growing businesses across India.",
  alternates: { canonical: "https://devaryasolutions.com" },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <ServicesOverview />
      <ProductsOverview />
      <HireOverview />
      <Footer />
    </main>
  );
}
