import Link from "next/link";
import { Smartphone, Globe, Bot, BarChart2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native Android, iOS, and cross-platform apps built for performance and scale.",
    href: "/services/android-apps",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Startup websites, enterprise platforms, and full-featured ecommerce stores.",
    href: "/services/web-app-dev",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "AI chatbots, generative AI integration, and intelligent process automation.",
    href: "/services/ai-chatbot",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    hover: "hover:border-violet-300",
    badge: "AI",
    aiGlow: true,
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    description: "SEO, SEM, social media marketing, and content that drives real growth.",
    href: "/services/seo",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-slate-100",
    hover: "hover:border-slate-200",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Our Services</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From idea to launch — we cover every layer of your digital product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex flex-col gap-4 p-6 rounded-2xl border ${service.border} ${service.hover} bg-white hover:shadow-md transition-all duration-200 ${service.aiGlow ? "bg-gradient-to-br from-white to-violet-50/60" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  {service.badge && (
                    <span className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                </div>
                <span className={`text-sm font-semibold ${service.color} flex items-center gap-1 mt-auto group-hover:gap-2 transition-all`}>
                  See all <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
