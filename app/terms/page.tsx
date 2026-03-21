import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Mongolian Heritage Center",
  description: "Terms and conditions for using our website and services.",
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Mongolian Heritage Center's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">3. Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The materials on Mongolian Heritage Center's website are provided on an "as is" basis. Mongolian Heritage Center makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="leading-relaxed">
                Further, Mongolian Heritage Center does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">4. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall Mongolian Heritage Center or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mongolian Heritage Center's website, even if Mongolian Heritage Center or a Mongolian Heritage Center authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">5. Accuracy of Materials</h2>
              <p className="leading-relaxed">
                The materials appearing on Mongolian Heritage Center's website could include technical, typographical, or photographic errors. Mongolian Heritage Center does not warrant that any of the materials on its website are accurate, complete, or current. Mongolian Heritage Center may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">6. Links</h2>
              <p className="leading-relaxed">
                Mongolian Heritage Center has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mongolian Heritage Center of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">7. Modifications</h2>
              <p className="leading-relaxed">
                Mongolian Heritage Center may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">8. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Mongolia, and you irrevocably submit to the exclusive jurisdiction of the courts located in Ulaanbaatar, Mongolia.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">9. User Conduct</h2>
              <p className="leading-relaxed mb-4">
                You agree not to use this website in any way that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Is unlawful or fraudulent</li>
                <li>Infringes on any intellectual property rights</li>
                <li>Harasses or causes distress or inconvenience to any person</li>
                <li>Obscures or changes the origin of the website</li>
                <li>Transmits obscene or offensive content</li>
                <li>Disrupts the normal flow of dialogue within our website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">10. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Mongolian Heritage Center or its content suppliers and is protected by international copyright laws. You agree not to reproduce, modify, or distribute any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 text-primary">11. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Mongolian Heritage Center</p>
                <p>Email: legal@mongolianheritage.mn</p>
                <p>Phone: +976 11 123 456</p>
                <p>Address: 123 Heritage Street, Ulaanbaatar, Mongolia</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
