import { BookOpen, Users, Globe, Music } from "lucide-react"

const activities = [
  {
    icon: BookOpen,
    title: "Research & Documentation",
    description: "Systematic documentation of oral traditions, historical records, and cultural practices across all regions of Mongolia."
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Workshops, festivals, and educational programs that bring communities together to celebrate and learn about Mongolian heritage."
  },
  {
    icon: Globe,
    title: "International Outreach",
    description: "Partnerships with cultural institutions worldwide to share Mongolian heritage and foster cross-cultural understanding."
  },
  {
    icon: Music,
    title: "Arts & Performance",
    description: "Supporting traditional arts including throat singing, morin khuur, and traditional dance through training and performance opportunities."
  }
]

export function ActivitiesSection() {
  return (
    <section id="activities" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Work</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Main Areas of Activities
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our center engages in diverse activities to preserve and promote Mongolian heritage, 
            connecting communities and generations through meaningful cultural initiatives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
