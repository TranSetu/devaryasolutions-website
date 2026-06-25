"use client";

import * as React from "react";
import { User, Mail, Smartphone, Globe, Info, PenTool, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = [
  { name: "India", code: "+91", flag: "in" },
  { name: "United States", code: "+1", flag: "us" },
  { name: "United Kingdom", code: "+44", flag: "gb" },
  { name: "United Arab Emirates", code: "+971", flag: "ae" },
  { name: "Australia", code: "+61", flag: "au" },
  { name: "Canada", code: "+1", flag: "ca" },
  { name: "Germany", code: "+49", flag: "de" },
  { name: "Singapore", code: "+65", flag: "sg" },
  { name: "Saudi Arabia", code: "+966", flag: "sa" },
  { name: "Qatar", code: "+974", flag: "qa" },
  { name: "Kuwait", code: "+965", flag: "kw" },
  { name: "Oman", code: "+968", flag: "om" },
  { name: "Bahrain", code: "+973", flag: "bh" }
];

export function ContactForm() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const phone = `${selectedCountry.code} ${formData.get("phone")}`;
    formData.set("phone", phone);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setSelectedCountry(countries[0]);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      clearTimeout(timer);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-zinc-100/50 p-5 sm:p-8 md:p-12 w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/95 text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-700 mb-6 sm:mb-8 md:mb-12">
        Fill in the Details
      </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="e9f31c51-7e6c-4c50-aa83-47e53ee79028" />
        <input type="hidden" name="subject" value="New Contact Form Submission - Devarya Solutions" />
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800 flex items-center">
            Full Name <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full h-12 pl-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              Your Email <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Id"
                className="w-full h-12 pl-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          {/* Phone Mobile Number with Flag Selector Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              Your Mobile <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative flex w-full">
              <div className="relative flex-none">
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="h-12 flex items-center gap-2 px-3 border border-r-0 border-zinc-200 rounded-l-md bg-zinc-50 text-zinc-700 cursor-pointer hover:bg-zinc-100 transition-colors focus:outline-none"
                >
                  <img
                    src={`https://flagcdn.com/w20/${selectedCountry.flag}.png`}
                    alt={selectedCountry.name}
                    className="w-5 h-auto rounded-sm shrink-0"
                  />
                  <span className="text-sm font-semibold text-zinc-800">{selectedCountry.code}</span>
                  <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                </button>

                {isCountryDropdownOpen && (
                  <>
                    {/* Click-outside listener overlay */}
                    <div
                      className="fixed inset-0 z-30 cursor-default"
                      onClick={() => setIsCountryDropdownOpen(false)}
                    />
                    <ul className="absolute left-0 top-full mt-1.5 w-64 max-w-[calc(100vw-40px)] max-h-60 overflow-y-auto bg-white border border-zinc-200 rounded-md shadow-2xl z-40 py-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
                      {countries.map((country, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsCountryDropdownOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left text-sm"
                          >
                            <img
                              src={`https://flagcdn.com/w20/${country.flag}.png`}
                              alt={country.name}
                              className="w-5 h-auto rounded-sm shrink-0"
                            />
                            <span className="font-bold text-zinc-800 shrink-0 min-w-[42px]">{country.code}</span>
                            <span className="text-zinc-600 truncate">{country.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Mobile"
                className="flex-1 min-w-0 h-12 pl-4 pr-12 border border-zinc-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          {/* Select Service For Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800 flex items-center">
              For <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <div className="relative">
              <select
                name="service"
                defaultValue=""
                required
                className="w-full h-12 pl-4 pr-14 appearance-none border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 bg-white cursor-pointer"
              >
                <option value="" disabled hidden>Select Service / Requirement</option>
                <optgroup label="Services" className="font-bold text-slate-900 bg-slate-100">
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-apps">Mobile App Development</option>
                  <option value="startup-apps">App for Start-ups</option>
                  <option value="startup-web">Web for Start-ups</option>
                  <option value="growing-business-web">Web for Growing Business</option>
                  <option value="enterprise-web">Web for Enterprise</option>
                  <option value="ecommerce-dev">Ecommerce Development</option>
                  <option value="web-app-dev">Web App Development</option>
                  <option value="website-revamp">Website Revamp</option>
                  <option value="seo">Search Engine Optimization (SEO)</option>
                  <option value="sem">Search Engine Marketing (SEM)</option>
                  <option value="smm">Social Media Marketing (SMM)</option>
                  <option value="content-writing">Content Writing</option>
                </optgroup>
                <optgroup label="Hire Dedicated Developers" className="font-bold text-slate-900 bg-slate-100">
                  <option value="~hire-web-dev">Hire Web Developers</option>
                  <option value="hire-android-dev">Hire Android Developers</option>
                  <option value="hire-ios-dev">Hire iOS Developers</option>
                  <option value="hire-flutter-dev">Hire Flutter Developers</option>
                  <option value="hire-react-native-dev">Hire React Native Developers</option>
                  <option value="hire-ionic-dev">Hire Ionic Developers</option>
                  <option value="hire-angular-dev">Hire Angular Developers</option>
                  <option value="hire-nodejs-dev">Hire Node.js Developers</option>
                  <option value="hire-php-dev">Hire PHP Developers</option>
                  <option value="hire-codeigniter-dev">Hire Codeigniter Developers</option>
                  <option value="hire-python-dev">Hire Python Developers</option>
                  <option value="hire-unity-dev">Hire Unity Developers</option>
                  <option value="hire-frontend-dev">Hire Front-End Developers</option>
                  <option value="hire-ui-ux-designers">Hire UI/UX Designers</option>
                  <option value="hire-graphic-designers">Hire Graphic Designers</option>
                  <option value="hire-web-designers">Hire Web Designers</option>
                </optgroup>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-zinc-500">
                <Globe className="w-5 h-5 mr-1" />
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Other / Additional Requirements */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-800">
              Other
            </label>
            <div className="relative">
              <input
                type="text"
                name="other"
                placeholder="Any additional requirements or information"
                className="w-full h-12 px-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 bg-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 group cursor-pointer z-10">
                <Info className="w-5 h-5 text-zinc-500 hover:text-blue-500 transition-colors" />
                <div className="absolute bottom-full right-0 mb-2 w-56 p-2.5 bg-slate-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 leading-relaxed">
                  Tell us anything else about your project or specify custom requirements.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-800 flex items-center">
            Message <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <div className="relative">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full p-4 pr-12 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-800 placeholder:text-zinc-400 resize-none bg-white"
            ></textarea>
            <PenTool className="absolute right-4 bottom-4 w-5 h-5 text-zinc-500 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-gradient-to-r from-[#10b981] to-[#2563eb] hover:opacity-90 text-white font-bold py-6 sm:py-7 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Sending..." : "SUBMIT NOW"}
          </Button>
          <div aria-live="polite" aria-atomic="true" className="empty:hidden">
            {submitStatus === "success" && (
              <p className="text-emerald-600 font-semibold text-sm">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 font-semibold text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
