import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Mobile & Web App Development Company in India",
  description:
    "Devarya Solutions builds scalable Android apps, iOS apps, web applications, and e-commerce stores for startups and growing businesses across India.",
  alternates: { canonical: "https://devaryasolutions.com" },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white justify-between">
      <div className="flex flex-col flex-1">
        <Header />
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
