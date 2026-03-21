import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/traditional-ger.jpg"
                alt="Traditional Mongolian Ger"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Preserving Mongolia{"'"}s Rich Cultural Legacy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Mongolian Heritage Center stands as a guardian of our nation{"'"}s
              invaluable cultural treasures. Founded with a vision to bridge the past
              with the future, we work tirelessly to document, preserve, and share
              the unique traditions that define Mongolian identity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From the vast steppes to the Gobi Desert, from throat singing to
              traditional crafts, we celebrate every facet of our heritage while
              ensuring it remains vibrant and accessible to all.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <span className="font-serif text-3xl font-bold text-foreground">25+</span>
                <p className="text-muted-foreground text-sm mt-1">Years of Preservation</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <span className="font-serif text-3xl font-bold text-foreground">50K+</span>
                <p className="text-muted-foreground text-sm mt-1">Artifacts Preserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
