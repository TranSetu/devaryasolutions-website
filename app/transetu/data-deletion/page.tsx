import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Data Deletion | Transetu Agent",
  description: "How to request deletion of your Transetu Agent account and data.",
  alternates: { canonical: "https://devaryasolutions.com/transetu/data-deletion" },
};

export default function TransetuDataDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900">Data Deletion</h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: July 28, 2026</p>

          <div className="mt-8 space-y-6 text-zinc-700 leading-relaxed">
            <p>
              This page describes how Transetu Agent users (&quot;agents&quot;) can request deletion of their
              account and associated data from the Transetu Agent mobile application, operated by Devarya
              Solutions Private Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
            </p>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">How to Request Deletion</h2>
              <p>
                You can request deletion of your account by emailing{" "}
                <a href="mailto:hello@transetu.com" className="text-blue-600 hover:underline">
                  hello@transetu.com
                </a>{" "}
                from your registered email address or phone number, including your registered mobile number or
                agent ID in the request. We process deletion requests within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">What Gets Deleted</h2>
              <p>
                Upon request, we delete your personal profile information (name, phone number, email address, and
                business details) and revoke your access to the Transetu Agent app account.
              </p>
              <p>
                Transaction and wallet records may be retained where required by applicable financial or tax
                regulations, even after your account has been deleted. Account deletion is irreversible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-3">In-App Request</h2>
              <p>
                You can also request account deletion directly from within the Transetu Agent app by creating a
                support ticket under the Support tab.
              </p>
            </section>

            <section className="mt-10 rounded-2xl bg-white border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-3">Contact Us</h2>
              <p>If you have questions about this data deletion policy or your data, contact us at:</p>
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
