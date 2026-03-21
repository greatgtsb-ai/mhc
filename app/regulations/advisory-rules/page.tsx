import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, Download, Users, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Зөвлөхүүдийн зөвлөлийн үйл ажиллагааны дүрэм | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн Зөвлөхүүдийн зөвлөлийн үйл ажиллагааны дүрэм',
}

const sections = [
  {
    title: "Зөвлөхүүдийн зөвлөлийн зорилго",
    content: [
      "Төвийн үйл ажиллагаанд мэргэжлийн зөвлөгөө өгөх",
      "Судалгаа, шинжилгээний ажлын чанарт хяналт тавих",
      "Олон улсын хамтын ажиллагааг хөгжүүлэхэд дэмжлэг үзүүлэх",
      "Хөтөлбөр, төслийн санал, санаачилга гаргах"
    ]
  },
  {
    title: "Зөвлөлийн бүрэлдэхүүн",
    content: [
      "Зөвлөхүүдийн зөвлөл нь 5-10 гишүүнтэй байна",
      "Гишүүдийг Удирдах зөвлөлийн санал болгосноор томилно",
      "Гишүүдийн бүрэн эрхийн хугацаа 3 жил байна",
      "Зөвлөлийн даргыг гишүүдийн дундаас сонгоно"
    ]
  },
  {
    title: "Хуралдаан",
    content: [
      "Зөвлөлийн хурал улиралд 1-ээс доошгүй удаа хуралдана",
      "Гишүүдийн олонхи оролцсон тохиолдолд хурал хүчин төгөлдөр болно",
      "Шийдвэрийг олонхийн саналаар гаргана",
      "Хурлын тэмдэглэлийг хөтөлж, архивлана"
    ]
  },
  {
    title: "Гишүүдийн эрх, үүрэг",
    content: [
      "Хурлын шийдвэр гаргахад оролцох эрхтэй",
      "Санал, санаачилга гаргах",
      "Мэргэжлийн зөвлөгөө өгөх үүрэгтэй",
      "Төвийн нэр хүндийг өндөрт өргөх"
    ]
  }
]

export default function AdvisoryRulesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Зөвлөхүүдийн зөвлөлийн үйл ажиллагааны дүрэм
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Зөвлөхүүдийн зөвлөлийн үйл ажиллагааг зохицуулах дүрэм
            </p>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-8 bg-muted/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-card p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Дүрэм бүрэн хувилбар</p>
                  <p className="text-sm text-muted-foreground">PDF файл, 1.2 MB</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4" />
                Татах
              </button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Зөвлөхүүдийн зөвлөлийн тухай
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Зөвлөхүүдийн зөвлөл нь Монгол Өв Соёлын Төвийн үйл ажиллагаанд мэргэжлийн 
                  зөвлөгөө өгөх, судалгаа шинжилгээний ажилд дэмжлэг үзүүлэх зорилготой 
                  зөвлөлдөх байгууллага юм. Зөвлөл нь тус төвийн дүрмийн дагуу байгуулагдаж, 
                  энэхүү дүрмийн дагуу үйл ажиллагаа явуулна.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Adoption Info */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Батлагдсан огноо</h3>
              <p className="text-muted-foreground text-sm">
                Энэхүү дүрэм нь 2024 оны 03 дугаар сарын 20-ны өдөр Удирдах зөвлөлийн хурлаар 
                батлагдаж, мөн өдрөөс хүчин төгөлдөр мөрдөгдөж эхэлсэн.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
