import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/images/mhc-logo.svg" 
                  alt="Mongolian Heritage Center Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-lg font-semibold">Mongolian Heritage Center</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Preserving and promoting Mongolian heritage for present and future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Activities", href: "#activities" },
                { label: "News", href: "#news" },
                { label: "Get Involved", href: "#participate" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Heritage Street<br />
                  Ulaanbaatar, Mongolia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-sm">+976 11 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-background/70 text-sm">info@mongolianheritage.mn</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>&copy; {new Date().getFullYear()} Mongolian Heritage Center. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
