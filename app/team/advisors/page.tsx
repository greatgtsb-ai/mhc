import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, BookOpen, Globe } from 'lucide-react'

export const metadata = {
  title: 'Зөвлөхүүдийн зөвлөл | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн зөвлөхүүдийн зөвлөл',
}

const advisors = [
  {
    name: "Академич Ц. Шагдарсүрэн",
    role: "Ахлах зөвлөх",
    specialty: "Монгол судлал",
    bio: "Монголын Шинжлэх Ухааны Академийн гишүүн, Монгол судлалын чиглэлээр 40 гаруй жил судалгаа хийсэн.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Проф. Д. Цэрэнсодном",
    role: "Зөвлөх",
    specialty: "Түүхийн ухаан",
    bio: "Түүхийн ухааны доктор, профессор, Монголын түүхийн талаар олон бүтээл туурвисан.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Др. М. Эрдэнэбат",
    role: "Зөвлөх",
    specialty: "Археологи",
    bio: "Археологийн ухааны доктор, олон улсын малтлага судалгаанд оролцсон туршлагатай.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Проф. Н. Хатанболд",
    role: "Зөвлөх",
    specialty: "Угсаатны зүй",
    bio: "Угсаатны зүйн профессор, Монгол угсаатны соёл, заншлын талаар судалгаа хийдэг.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Др. О. Батмөнх",
    role: "Зөвлөх",
    specialty: "Урлаг судлал",
    bio: "Урлаг судлалын доктор, Монголын уламжлалт урлагийн талаар мэргэшсэн.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Проф. Ж. Түмэнжаргал",
    role: "Олон улсын зөвлөх",
    specialty: "Соёлын өв хамгаалал",
    bio: "ЮНЕСКО-ийн мэргэжилтэн, олон улсын соёлын өв хамгаалах чиглэлээр 25 жил ажилласан.",
    image: "/images/chairman.jpg"
  }
]

const expertiseAreas = [
  {
    icon: BookOpen,
    title: "Эрдэм шинжилгээ",
    description: "Судалгааны төсөл, хэвлэлд зөвлөгөө өгөх"
  },
  {
    icon: Award,
    title: "Чанарын хяналт",
    description: "Хөтөлбөр, үзэсгэлэнгийн чанарт хяналт тавих"
  },
  {
    icon: Globe,
    title: "Олон улсын хамтын ажиллагаа",
    description: "Гадаад харилцаа, хамтын ажиллагаанд зөвлөх"
  }
]

export default function AdvisorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Зөвлөхүүдийн зөвлөл
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Манай төвийн үйл ажиллагаанд мэргэжлийн зөвлөгөө өгч буй эрдэмтэн, судлаачид
            </p>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{area.title}</h3>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">{advisor.name}</h3>
                      <p className="text-sm text-primary font-medium">{advisor.role}</p>
                      <p className="text-xs text-accent font-medium mt-1">{advisor.specialty}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{advisor.bio}</p>
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
