import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Mongolian Heritage Center",
  description: "Our privacy policy explains how we handle and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Introduction</h2>
              <p className="leading-relaxed mb-4">
                Mongolian Heritage Center ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Information You Provide Directly</h3>
                  <p className="leading-relaxed mb-2">
                    We collect information you voluntarily provide when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Contact us through our contact form or email</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Donate to our organization</li>
                    <li>Register for events or programs</li>
                    <li>Leave comments or feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed mb-2">
                    When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website information</li>
                    <li>Device type and operating system</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve and personalize your experience</li>
                <li>Send newsletters, updates, and promotional communications</li>
                <li>Process donations and memberships</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to improve our offerings</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Cookies and Tracking</h2>
              <p className="leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and analyze site usage. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only when:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Required by law or government request</li>
                <li>Necessary to protect our legal rights and safety</li>
                <li>Working with trusted service providers who agree to maintain confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Mongolian Heritage Center</p>
                <p>Email: privacy@mongolianheritage.mn</p>
                <p>Phone: +976 11 123 456</p>
                <p>Address: 123 Heritage Street, Ulaanbaatar, Mongolia</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">Policy Updates</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any significant changes by posting the updated policy on our website and updating the "Last Updated" date above.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
