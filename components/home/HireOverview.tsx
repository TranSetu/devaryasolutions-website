import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  { label: "React Native", href: "/hire/react-native-developers" },
  { label: "Node.js", href: "/hire/nodejs-developers" },
  { label: "Flutter", href: "/hire/flutter-developers" },
  { label: "Python", href: "/hire/python-developers" },
  { label: "Android", href: "/hire/android-developers" },
  { label: "iOS", href: "/hire/ios-developers" },
];

export function HireOverview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 p-10 md:p-16 text-white text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-6">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Hire Expert Developers</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
            Dedicated engineers who integrate with your team and ship production-ready code on your schedule.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {roles.map((role) => (
              <Link
                key={role.label}
                href={role.href}
                className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold border border-white/20 transition-all duration-200"
              >
                {role.label}
              </Link>
            ))}
            <Link
              href="/hire/web-developers"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-100 text-sm font-medium border border-white/10 transition-all duration-200"
            >
              + more roles
            </Link>
          </div>

          <Link href="/hire/react-native-developers">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 font-semibold shadow-lg transition-all duration-200"
            >
              Browse Developers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
