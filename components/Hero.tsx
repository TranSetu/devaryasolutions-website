import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden bg-white px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Technology Background"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center px-4 max-w-5xl -mt-10">
        {/* Subtle top pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 animate-fade-in shadow-sm backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          Shaping the Future of Technology
        </div>
        
        <h1 className="font-black tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 text-slate-900">
          <span className="block mb-2">
            Welcome to
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 block">
            Devarya Solutions
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl text-slate-500 block font-black tracking-[0.2em] uppercase mt-4">
            Private Limited
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 font-medium leading-relaxed">
          We build mobile apps, web platforms, and AI-powered products for startups and growing businesses — end to end.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services/web-app-dev">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-base font-semibold shadow-lg shadow-blue-200 transition-all duration-200">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-base font-semibold border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
