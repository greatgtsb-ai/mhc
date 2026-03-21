import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-steppe.jpg"
          alt="Mongolian steppe landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-6">
          Preserving Our Heritage
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-tight mb-6 text-balance">
          Mongolian Heritage Center
        </h1>
        <p className="text-lg sm:text-xl text-card/90 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Dedicated to preserving, promoting, and celebrating the rich cultural heritage
          and traditions of Mongolia for present and future generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#about"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Discover Our Mission
          </Link>
          <Link
            href="#participate"
            className="bg-card/10 border border-card/30 text-card px-8 py-4 rounded-lg font-semibold hover:bg-card/20 transition-colors backdrop-blur-sm"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
