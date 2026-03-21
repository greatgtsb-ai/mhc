import Header from '@/components/header'
import Footer from '@/components/footer'
import { Building2, Users, Briefcase, Target } from 'lucide-react'

export const metadata = {
  title: 'Төвийн бүтэц, зохион байгуулалт | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн бүтэц, зохион байгуулалтын талаар',
}

const departments = [
  {
    icon: Building2,
    title: "Удирдах зөвлөл",
    description: "Төвийн стратегийн чиглэлийг тодорхойлж, бодлогын шийдвэр гаргадаг дээд байгууллага."
  },
  {
    icon: Users,
    title: "Гүйцэтгэх удирдлага",
    description: "Төвийн өдөр тутмын үйл ажиллагааг удирдан зохион байгуулж, стратегийг хэрэгжүүлдэг баг."
  },
  {
    icon: Briefcase,
    title: "Хөтөлбөрийн хэлтэс",
    description: "Соёлын хөтөлбөрүүд, арга хэмжээ, боловсролын төслүүдийг боловсруулж хэрэгжүүлдэг."
  },
  {
    icon: Target,
    title: "Олон нийттэй харилцах хэлтэс",
    description: "Гадаад харилцаа, хамтын ажиллагаа, олон нийтийн мэдээлэл хариуцдаг."
  }
]

export default function StructurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Төвийн бүтэц, зохион байгуулалт
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Монгол Өв Соёлын Төвийн зохион байгуулалтын бүтэц
            </p>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Зохион байгуулалтын бүтэц
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Манай төв нь үр ашигтай удирдлага, ил тод засаглалын зарчмаар ажилладаг.
              </p>
            </div>

            {/* Org Structure Visual */}
            <div className="relative mb-16">
              <div className="flex flex-col items-center">
                {/* Top Level */}
                <div className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-center mb-4">
                  Удирдах зөвлөл
                </div>
                <div className="w-px h-8 bg-border"></div>
                
                {/* Second Level */}
                <div className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium text-center mb-4">
                  Гүйцэтгэх захирал
                </div>
                <div className="w-px h-8 bg-border"></div>
                
                {/* Third Level */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  <div className="bg-card border border-border px-4 py-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-foreground">Хөтөлбөрийн хэлтэс</span>
                  </div>
                  <div className="bg-card border border-border px-4 py-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-foreground">Санхүүгийн хэлтэс</span>
                  </div>
                  <div className="bg-card border border-border px-4 py-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-foreground">Олон нийттэй харилцах хэлтэс</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <dept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{dept.title}</h3>
                      <p className="text-sm text-muted-foreground">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
