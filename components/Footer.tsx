"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-zinc-400 border-t border-slate-900/60 font-sans">
      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Company Profile Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-zinc-900 text-white border border-slate-700/50 shadow-md transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  Devarya Solutions
                </span>
                <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase mt-1">
                  Private Limited
                </span>
              </div>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              We deliver scalable, secure, and cutting-edge technology solutions that empower startups and enterprises globally. From native app development to full-suite digital marketing, we turn visions into software products.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-blue-400 transition-colors">Company Profile</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">We Are Hiring</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/transetu/privacy-policy" className="hover:text-blue-400 transition-colors">Transetu Agent Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href="tel:8985350585" className="hover:text-blue-400 transition-colors">
                  +91 8985350585
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href="mailto:hello@transetu.com" className="hover:text-blue-400 transition-colors">
                  hello@devaryasolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed">
                  Flat no: 2-1, Near Water Tank, Down Street, Vissannapeta, Bayyavaram, Anakapalli, Andhra Pradesh
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub-Footer Copyright */}
      <div className="py-8 bg-slate-950 text-zinc-600 border-t border-slate-900/40 text-center text-xs">
        <div className="container mx-auto px-4">
          <p>© 2026 Devarya Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
