import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, Download } from 'lucide-react'

export const metadata = {
  title: '"Монгол Өв Соёлын Төв"-ийн дүрэм | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн дүрэм',
}

const chapters = [
  {
    number: 1,
    title: "Нийтлэг үндэслэл",
    articles: [
      "Төвийн нэр, хаяг",
      "Төвийн эрх зүйн байдал",
      "Төвийн зорилго, чиглэл",
      "Төвийн үйл ажиллагааны хүрээ"
    ]
  },
  {
    number: 2,
    title: "Гишүүнчлэл",
    articles: [
      "Гишүүн болох журам",
      "Гишүүдийн эрх, үүрэг",
      "Гишүүнчлэлээс хасах үндэслэл"
    ]
  },
  {
    number: 3,
    title: "Удирдлага, зохион байгуулалт",
    articles: [
      "Удирдах зөвлөл",
      "Гүйцэтгэх удирдлага",
      "Зөвлөхүүдийн зөвлөл",
      "Хурал зарлан хуралдуулах журам"
    ]
  },
  {
    number: 4,
    title: "Санхүү, эд хөрөнгө",
    articles: [
      "Санхүүгийн эх үүсвэр",
      "Эд хөрөнгийн өмчлөл",
      "Санхүүгийн тайлагнал",
      "Хяналт, шалгалт"
    ]
  },
  {
    number: 5,
    title: "Төгсгөлийн заалт",
    articles: [
      "Дүрэмд нэмэлт, өөрчлөлт оруулах",
      "Төвийг татан буулгах",
      "Маргаан шийдвэрлэх журам"
    ]
  }
]

export default function CharterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              "Монгол Өв Соёлын Төв"-ийн дүрэм
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Төвийн үйл ажиллагааг зохицуулах үндсэн баримт бичиг
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
                  <p className="text-sm text-muted-foreground">PDF файл, 2.5 MB</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
                <Download className="w-4 h-4" />
                Татах
              </button>
            </div>
          </div>
        </section>

        {/* Charter Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Дүрмийн агуулга
              </h2>
              
              <div className="space-y-8">
                {chapters.map((chapter) => (
                  <div key={chapter.number} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {chapter.number}-р бүлэг: {chapter.title}
                    </h3>
                    <ul className="space-y-2">
                      {chapter.articles.map((article, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {chapter.number}.{index + 1}
                          </span>
                          {article}
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
                  Энэхүү дүрэм нь 2024 оны 01 дүгээр сарын 15-ны өдөр Удирдах зөвлөлийн хурлаар 
                  батлагдаж, мөн өдрөөс хүчин төгөлдөр мөрдөгдөж эхэлсэн.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
