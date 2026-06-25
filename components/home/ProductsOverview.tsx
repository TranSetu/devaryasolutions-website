import Link from "next/link";
import { UtensilsCrossed, Car, Stethoscope, GraduationCap, Bot, ShoppingBag, ArrowRight } from "lucide-react";

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
];

export function ProductsOverview() {
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
          {products.map((product) => {
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
          <Link
            href="/products/food-delivery"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
