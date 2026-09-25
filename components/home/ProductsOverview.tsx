"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  UtensilsCrossed, Car, Stethoscope, GraduationCap, Bot, ShoppingBag, ArrowRight,
  ShoppingBasket, Building2, Building, Store, Wrench, Truck, Share2, Ticket, Video,
  Scissors, QrCode, BarChart3, FileSearch2, Lightbulb 
} from "lucide-react";

const products = [
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    description: "Full-featured food ordering platform with real-time tracking.",
    href: "/products/food-delivery",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Car,
    title: "Taxi Booking",
    description: "On-demand ride-hailing app with driver and rider apps.",
    href: "/products/taxi-booking",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Doctor appointments, teleconsultations, and health records.",
    href: "/products/healthcare",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: GraduationCap,
    title: "E-Learning",
    description: "Course creation, video streaming, and learner management.",
    href: "/products/e-learning",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Bot,
    title: "AI Chatbot Platform",
    description: "Intelligent conversational AI for customer support and sales.",
    href: "/products/ai-chatbot",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
    badge: "AI",
    aiGlow: true,
  },
  {
    icon: ShoppingBag,
    title: "Multi-Vendor Marketplace",
    description: "End-to-end marketplace with vendor management and payments.",
    href: "/products/multi-vendor-marketplace",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: ShoppingBasket,
    title: "Grocery Delivery",
    description: "Online grocery shopping platforms with real-time tracking.",
    href: "/products/grocery-delivery",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Building2,
    title: "Hotel Booking",
    description: "Hospitality reservation systems and property management.",
    href: "/products/hotel-booking",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Property search and listings portal with agent workspaces.",
    href: "/products/real-estate",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Store,
    title: "Single-Vendor Ecommerce",
    description: "Dedicated direct-to-consumer online stores and storefronts.",
    href: "/products/single-vendor-ecommerce",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Wrench,
    title: "On-Demand Home Services",
    description: "Booking for home utility, repair, and cleaning services.",
    href: "/products/home-services",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Truck,
    title: "Logistics & Fleet",
    description: "Supply chain management and fleet delivery tracking systems.",
    href: "/products/logistics",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Share2,
    title: "Social Media Networks",
    description: "Custom social networking sites with community feeds and chats.",
    href: "/products/social-media",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Ticket,
    title: "Ticket Booking",
    description: "Cinema and event booking apps with seat reservations.",
    href: "/products/ticket-booking",
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Video,
    title: "Short Video Sharing",
    description: "Video sharing and streaming apps with creator monetization.",
    href: "/products/short-video",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Scissors,
    title: "Beauty & Salon",
    description: "Salon scheduling and appointment booking systems.",
    href: "/products/beauty-salon",
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: QrCode,
    title: "QR Menu Scanners",
    description: "Contactless digital restaurant menus and ordering systems.",
    href: "/products/qr-menu",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: BarChart3,
    title: "AI Analytics Dashboard",
    description: "Intelligent business intelligence with natural language insights.",
    href: "/products/ai-analytics",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
    badge: "AI",
    aiGlow: true,
  },
  {
    icon: FileSearch2,
    title: "AI Document Processing",
    description: "Automated document intelligence reading invoices, forms, and contracts.",
    href: "/products/ai-document",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
    badge: "AI",
    aiGlow: true,
  },
  {
    icon: Lightbulb,
    title: "AI Recommendation Engine",
    description: "Personalized product and content recommendation platform.",
    href: "/products/ai-recommendation",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
    badge: "AI",
    aiGlow: true,
  },
];

export function ProductsOverview() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Ready-Made</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Our Products</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            White-label platforms you can launch fast — fully customised to your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.title}
                href={product.href}
                className={`group flex items-start gap-4 p-6 rounded-2xl border ${product.border} ${product.hover} bg-white hover:shadow-md transition-all duration-200 ${product.aiGlow ? "bg-gradient-to-br from-white to-violet-50/60" : ""}`}
              >
                <div className={`w-11 h-11 rounded-xl ${product.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${product.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-900">{product.title}</h3>
                    {product.badge && (
                      <span className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{product.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            {showAll ? "Show less" : "View all products"} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
