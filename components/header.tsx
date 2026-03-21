"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const aboutColumns = [
  {
    title: "MHC",
    items: [
      { label: "Бидний тухай", href: "/about/about" },
      { label: "Төвийн бүтэц, зохион байгуулалт", href: "/about/structure" },
      { label: "Удирдах зөвлөлийн даргын мэндчилгээ", href: "/about/chairman" },
      { label: "Төвийн үйл ажиллагааны гол чиглэлүүд", href: "/about/activities" },
      { label: "Мэдээ, мэдээлэл", href: "/news" },
    ]
  },
  {
    title: "Манай баг",
    items: [
      { label: "Удирдах зөвлөл болон менежментийн баг", href: "/team/board" },
      { label: "Зөвлөхүүдийн зөвлөл", href: "/team/advisors" },
      { label: "Холбоо барих", href: "/contact" },
    ]
  },
  {
    title: "Дүрэм, тогтоол, шийдвэр",
    items: [
      { label: "\"Монгол Өв Соёлын Төв\"-ийн дүрэм", href: "/regulations/charter" },
      { label: "\"Монгол Өв Соёлын Төв\"-ийн Зөвлөхүүдийн зөвлөлийн үйл ажиллагааны дүрэм", href: "/regulations/advisory-rules" },
    ]
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="/images/mhc-logo.svg" 
                alt="Mongolian Heritage Center Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg font-semibold text-foreground">Mongolian Heritage Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* About Us with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors py-2"
              >
                <span className="text-sm font-medium">About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="#news"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              News and Information
            </Link>

            <Link
              href="#participate"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Your Participation
            </Link>

            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>

            <Link
              href="#donate"
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-4">
            <div>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex items-center justify-between w-full text-foreground py-2"
              >
                <span className="font-medium">About Us</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${aboutDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4 space-y-4 mt-3 pb-4">
                  {aboutColumns.map((column) => (
                    <div key={column.title}>
                      <h4 className="text-xs font-semibold text-primary mb-2">{column.title}</h4>
                      <div className="space-y-1">
                        {column.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="#news"
              className="block font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              News and Information
            </Link>
            <Link
              href="#participate"
              className="block font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Your Participation
            </Link>
            <Link
              href="#contact"
              className="block font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="#donate"
              className="block bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
      {/* Full-width Dropdown for About Us */}
      <div
        className={`absolute top-full left-0 right-0 w-full bg-card border-b border-border shadow-lg transition-all duration-200 ${aboutDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onMouseEnter={() => setAboutDropdownOpen(true)}
        onMouseLeave={() => setAboutDropdownOpen(false)}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-12">
            {aboutColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">{column.title}</h3>
                <div className="space-y-2">
                  {column.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
