import Link from "next/link"
import { Heart, HandHeart, GraduationCap } from "lucide-react"

const ways = [
  {
    icon: Heart,
    title: "Become a Member",
    description: "Join our community of heritage enthusiasts and receive exclusive access to events, newsletters, and resources.",
    cta: "Join Today",
    href: "#"
  },
  {
    icon: HandHeart,
    title: "Donate",
    description: "Your generous contributions help us preserve artifacts, fund research, and expand our educational programs.",
    cta: "Make a Donation",
    href: "#"
  },
  {
    icon: GraduationCap,
    title: "Volunteer",
    description: "Share your skills and passion by volunteering at events, exhibitions, and community outreach programs.",
    cta: "Get Involved",
    href: "#"
  }
]

export function ParticipationSection() {
  return (
    <section id="participate" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Get Involved</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Your Participation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            There are many ways to support our mission of preserving Mongolian heritage. 
            Every contribution, whether time, talent, or resources, makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => {
            const Icon = way.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {way.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
