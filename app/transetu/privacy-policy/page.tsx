import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Transetu Agent",
  description:
    "Privacy policy for the Transetu Agent mobile application, operated by Devarya Solutions Private Limited.",
  alternates: { canonical: "https://devaryasolutions.com/transetu/privacy-policy" },
};

export default function TransetuPrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: July 28, 2026</p>

          <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
            <p>
              Devarya Solutions Private Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the
              Transetu Agent mobile application. This privacy policy explains how we collect, use, and protect
              your information when you use our app.
            </p>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Information We Collect</h2>
              <p>
                <strong>Account Information:</strong> When you register as an agent, we collect your name, phone
                number, email address, and business details required for agent onboarding and verification.
              </p>
              <p>
                <strong>Transaction Data:</strong> We record wallet transactions, product activations (such as
                FASTag activations and vehicle service tag activations), sales records, and commission or earnings
                data to process your business operations.
              </p>
              <p>
                <strong>Device Information:</strong> We may collect device identifiers, operating system version,
                and app version for troubleshooting, security, and improving the app experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">How We Use Your Information</h2>
              <p>
                We use the information we collect to operate and manage your agent account, process wallet
                transactions and product activations, track your sales, earnings, and commissions, communicate with
                you about your account and our services, comply with legal and regulatory requirements, and improve
                the app and our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Data Sharing</h2>
              <p>
                We share your information only when necessary to process transactions through our banking and
                payment partners (such as FASTag issuers and payment gateways), comply with applicable laws or
                respond to valid legal requests, or with your team lead or manager within the Transetu agent network
                for operational purposes.
              </p>
              <p>We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Data Security</h2>
              <p>
                We implement industry-standard security measures including encrypted data transmission
                (HTTPS/TLS), secure server infrastructure, and access controls to protect your information. Wallet
                and payment data are processed through licensed and regulated payment partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Data Retention</h2>
              <p>
                We retain your account and transaction data for as long as your agent account is active and for any
                additional period required by applicable laws and regulations. You may request deletion of your
                account and associated data by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Your Rights</h2>
              <p>
                You have the right to access the personal data we hold about you, request correction of inaccurate
                information, request deletion of your account and personal data, and withdraw consent for data
                processing where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted within the app and
                on this page with an updated revision date.
              </p>
            </section>

            <section className="mt-10 rounded-2xl bg-white border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-3">Contact Us</h2>
              <p>If you have questions about this privacy policy or your data, contact us at:</p>
              <p className="mt-3">
                <strong>Devarya Solutions Private Limited</strong>
                <br />
                2-1, Near Water Tank, Down Street, Vissannapeta, Kasimkota, Anakapalli
                <br />
                Visakhapatnam - 531031, Andhra Pradesh, India
                <br />
                Email:{" "}
                <a href="mailto:hello@transetu.com" className="text-blue-600 hover:underline">
                  hello@transetu.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
