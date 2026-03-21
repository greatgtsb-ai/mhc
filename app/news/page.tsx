import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Мэдээ, мэдээлэл | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн сүүлийн үеийн мэдээ, мэдээлэл',
}

const newsItems = [
  {
    id: 1,
    title: "Наадамын баярын арга хэмжээ амжилттай зохион байгуулагдлаа",
    excerpt: "Монгол Өв Соёлын Төвөөс зохион байгуулсан Наадамын баярын арга хэмжээ олон нийтийн оролцоотой амжилттай болж өндөрлөлөө.",
    date: "2026-02-15",
    image: "/images/news-1.jpg",
    category: "Арга хэмжээ"
  },
  {
    id: 2,
    title: "\"Монголын нүүдэлчдийн өв\" үзэсгэлэн нээлтээ хийлээ",
    excerpt: "Монголын нүүдэлчдийн амьдрал, соёлыг харуулсан шинэ үзэсгэлэн нээлтээ хийж, олон улсын зочдыг угтан авч байна.",
    date: "2026-02-01",
    image: "/images/news-2.jpg",
    category: "Үзэсгэлэн"
  },
  {
    id: 3,
    title: "Хүүхдүүдэд зориулсан уламжлалт урлагийн сургалт эхэллээ",
    excerpt: "Залуу үеийнхэнд зориулсан уламжлалт урлаг, гар урлалын сургалтын шинэ хичээлүүд эхэллээ.",
    date: "2026-01-20",
    image: "/images/news-3.jpg",
    category: "Боловсрол"
  },
  {
    id: 4,
    title: "Олон улсын соёлын хамтын ажиллагааны гэрээ байгуулав",
    excerpt: "Төв нь ЮНЕСКО-ийн дэмжлэгтэйгээр олон улсын соёлын байгууллагуудтай хамтын ажиллагааны гэрээ байгууллаа.",
    date: "2026-01-10",
    image: "/images/hero-steppe.jpg",
    category: "Хамтын ажиллагаа"
  },
  {
    id: 5,
    title: "Эрдэм шинжилгээний хурал зохион байгуулагдана",
    excerpt: "Монголын түүх, соёлын сэдвээр олон улсын эрдэм шинжилгээний хурал зохион байгуулагдах гэж байна.",
    date: "2025-12-15",
    image: "/images/traditional-ger.jpg",
    category: "Эрдэм шинжилгээ"
  },
  {
    id: 6,
    title: "Сайн дурын ажилтнуудын элсэлт эхэллээ",
    excerpt: "Монгол Өв Соёлын Төв нь сайн дурын ажилтнуудыг элсүүлж эхэллээ. Та бүхнийг идэвхтэй оролцохыг урьж байна.",
    date: "2025-12-01",
    image: "/images/chairman.jpg",
    category: "Зарлал"
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Мэдээ, мэдээлэл
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Монгол Өв Соёлын Төвийн сүүлийн үеийн мэдээ, үйл явдлууд
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <article key={news.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(news.date).toLocaleDateString('mn-MN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {news.excerpt}
                    </p>
                    <Link 
                      href={`/news/${news.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Дэлгэрэнгүй
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
