import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CreditCard, Navigation, ShieldCheck, ArrowRight } from "lucide-react";

export function OurBrands() {
  return (
    <section className="py-20 px-4 bg-white border-t border-slate-100" id="brands">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading - Devarya Identity */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Ecosystem &amp; Ventures
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Associated Brands
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            In addition to delivering full-stack software and digital technology services, Devarya Solutions builds and backs specialised product brands delivering dedicated mobility and consumer solutions.
          </p>
        </div>

        {/* TranSetu Brand Container - TranSetu Brand Theming */}
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/70 to-white shadow-lg shadow-slate-100/80 overflow-hidden">
          {/* TranSetu Brand Accent Top Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#05A223] via-[#59C71C] to-[#087A3E]" />

          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Brand Identity & Overview */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200/80 p-2 shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src="/transetu-logo.png"
                      alt="TranSetu Logo"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full -translate-y-1"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#05A223]/10 text-[#087A3E] text-xs font-bold tracking-wide uppercase mb-1">
                      Associated Brand
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      TranSetu
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Smart Mobility &amp; Transit Solutions
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    Seamless Travel. <span className="text-[#05A223]">Smarter Solutions.</span>
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    TranSetu is an innovative transit and vehicle solutions brand by Devarya Solutions. Dedicated to modern travelers, fleets, and logistics partners, TranSetu simplifies highway mobility through reliable FASTag management, real-time GPS tracking, and durable vehicle accessories.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="https://transetu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#05A223] hover:bg-[#087A3E] text-white font-semibold text-sm sm:text-base shadow-md shadow-[#05A223]/25 transition-all duration-200 group"
                  >
                    <span>Visit TranSetu Website</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Offerings Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Feature 1: FASTag */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#05A223]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#05A223]/10 text-[#05A223] flex items-center justify-center mb-4">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-900 text-base mb-1.5">
                        FASTag Solutions
                      </h5>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Instant issuance, automated toll payments, and seamless vehicle tagging for cashless highway travel.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2: GPS Trackers */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#05A223]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#087A3E]/10 text-[#087A3E] flex items-center justify-center mb-4">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-900 text-base mb-1.5">
                        GPS Trackers
                      </h5>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Real-time location tracking, route history, and fleet monitoring for enhanced vehicle security.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3: FASTag Holders */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#05A223]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#59C71C]/15 text-[#087A3E] flex items-center justify-center mb-4">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-900 text-base mb-1.5">
                        FASTag Holders
                      </h5>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Durable, high-grade transparent acrylic holders engineered to protect RFID tags from heat and wear.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Subtle bottom informational bar */}
                <div className="mt-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#05A223] shrink-0" />
                    Operated &amp; backed by Devarya Solutions Private Limited
                  </span>
                  <Link
                    href="https://transetu.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#087A3E] hover:text-[#05A223] font-semibold inline-flex items-center gap-1 shrink-0"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
