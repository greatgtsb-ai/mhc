import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    image: "/images/news-1.jpg",
    date: "March 5, 2026",
    title: "Annual Naadam Festival Celebration Announced",
    excerpt: "Join us for our annual celebration of the traditional Naadam festival featuring wrestling, archery, and horse racing demonstrations."
  },
  {
    image: "/images/news-2.jpg",
    date: "February 28, 2026",
    title: "New Exhibition: Nomadic Life Through the Ages",
    excerpt: "A comprehensive exhibition exploring the evolution of nomadic traditions from ancient times to the modern era."
  },
  {
    image: "/images/news-3.jpg",
    date: "February 15, 2026",
    title: "Youth Heritage Program Launches",
    excerpt: "A new initiative designed to engage young Mongolians in preserving and celebrating their cultural heritage."
  }
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Stay Updated</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              News & Information
            </h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{item.date}</time>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
