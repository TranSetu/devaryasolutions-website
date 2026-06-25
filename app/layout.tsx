import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devaryasolutions.com"),
  title: {
    default: "Devarya Solutions Pvt. Ltd. | Mobile & Web App Development",
    template: "%s | Devarya Solutions",
  },
  description:
    "Devarya Solutions delivers scalable mobile apps, web applications, e-commerce platforms, and AI solutions for startups and enterprises across India.",
  keywords: [
    "mobile app development",
    "web development",
    "Android app development",
    "iOS app development",
    "React Native",
    "e-commerce development",
    "AI chatbot development",
    "generative AI integration",
    "AI process automation",
    "machine learning solutions",
    "AI software development India",
    "Devarya Solutions",
  ],
  authors: [{ name: "Devarya Solutions Private Limited" }],
  creator: "Devarya Solutions Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://devaryasolutions.com",
    siteName: "Devarya Solutions",
    title: "Devarya Solutions | Mobile & Web App Development Company",
    description:
      "Scalable mobile apps, web applications, e-commerce platforms, and AI solutions for startups and enterprises.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Devarya Solutions — Mobile & Web App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devarya Solutions | Mobile & Web App Development",
    description:
      "Scalable mobile apps, web applications, e-commerce platforms, and AI solutions for startups and enterprises.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://devaryasolutions.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://devaryasolutions.com/#organization",
      name: "Devarya Solutions Private Limited",
      url: "https://devaryasolutions.com",
      logo: "https://devaryasolutions.com/opengraph-image.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8985350585",
        contactType: "customer service",
        email: "hello@devaryasolutions.com",
        areaServed: "IN",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://devaryasolutions.com/#localbusiness",
      name: "Devarya Solutions Private Limited",
      url: "https://devaryasolutions.com",
      telephone: "+91-8985350585",
      email: "hello@devaryasolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Flat no: 2-1, Near Water Tank, Down Street, Vissannapeta, Bayyavaram",
        addressLocality: "Anakapalli",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      priceRange: "$$",
      description:
        "Devarya Solutions delivers scalable mobile apps, web applications, e-commerce platforms, and AI solutions for startups and enterprises.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
