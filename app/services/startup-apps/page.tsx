import { StartupApps } from "@/components/services/StartupApps";

export const metadata = {
  title: "Startup App Development | MVP Mobile App for Startups",
  description:
    "Launch your startup faster with Devarya Solutions. We build MVP mobile apps designed for rapid validation, user growth, and investor readiness — Android, iOS, or cross-platform.",
  alternates: { canonical: "https://devaryasolutions.com/services/startup-apps" },
};

export default function Page() {
  return <StartupApps />;
}
