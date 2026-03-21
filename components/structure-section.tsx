import { Building2, Users2, BookMarked, Palette } from "lucide-react"

const departments = [
  {
    icon: Building2,
    name: "Board of Directors",
    description: "Strategic leadership and governance oversight for the Center's long-term vision and mission."
  },
  {
    icon: Users2,
    name: "Community Relations",
    description: "Building partnerships with local communities, schools, and cultural organizations across Mongolia."
  },
  {
    icon: BookMarked,
    name: "Research Division",
    description: "Academic research, documentation, and publication of Mongolian cultural heritage materials."
  },
  {
    icon: Palette,
    name: "Arts & Programs",
    description: "Organizing exhibitions, performances, workshops, and educational programs for all ages."
  }
]

export function StructureSection() {
  return (
    <section id="structure" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Organization</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Center Structure
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Our organizational structure is designed to effectively fulfill our mission 
            of preserving and promoting Mongolian heritage through coordinated efforts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {dept.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
