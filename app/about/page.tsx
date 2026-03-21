import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'About Us | Mongolian Heritage Center',
  description: 'Learn about the Mongolian Heritage Center\'s mission, vision, and organization.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              About the Mongolian Heritage Center
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Preserving Mongolian culture, language, and traditions for future generations
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg border border-border p-8 md:p-12 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Монгол Өв Соёлын Төвийн тухай</h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-4">
                <p>
                  Монгол Өв Соёлын Төв нь 2023 оны 8 дугаар сард АНУ-ын Чикаго хотноо байгуулагдсан ашгийн бус байгууллага. Үйл ажиллагааны зорилго нь:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li>
                    Монгол гаралтай иргэд тогтмол уулзаж, танилцан нөхөрлөх, биенээсээ суралцах, мэдээлэл солилцох таатай орчин, нөхцлийг бүрдүүлэх;
                  </li>
                  <li>
                    Залуу үедээ монгол хэл, өв соёл, урлаг, уран зохиол, ёс заншлаас заан сургаж, өвлүүлэх;
                  </li>
                  <li>
                    Монгол, Америкийн ард түмний найрамдал, харилцан ойлголцлыг гүнзгийрүүлэн хөгжүүлэхэд оршино.
                  </li>
                </ol>
                <p className="pt-2">
                  Төвийн талаарх дэлгэрэнгүй мэдээлэлийг mongolianheritagecenter.org хаягаар болон{' '}
                  <a 
                    href="https://www.facebook.com/mongolianheritagecenter" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Facebook пэйж
                  </a>{' '}
                  хуудсаар орж аваарай.
                </p>
              </div>

              {/* Organization Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  <strong>Organization Status:</strong> Монгол Өв Соёлын Төв нь 501(c)(3) ашгийн бус байгууллага юм. Монгол Өв Соёлын Төвд өргөсөн хандив нь татвараас чөлөөлөгддөг.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>IRS Tax ID:</strong> 93-3162554
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Эрхэм зорилго</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Statement */}
              <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground leading-relaxed">
                  The 'Mongolian Heritage Center' aims to meet the cultural needs of people with a Mongolian origin residing in the Midwestern region of the United States, to preserve and pass on the knowledge of Mongolian language, culture and traditions to future generations, and to promote the understanding of Mongolian heritage among foreign friends.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Алсын караа (Vision)</h3>
                <p className="text-foreground leading-relaxed">
                  Даяаршилд ондооших Монгол өв соёлоо эрхэмлэн авч үлдэх, өвлүүлэн таниулах
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Our Goals</h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-lg border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Foster Community</h3>
                    <p className="text-muted-foreground mt-2">
                      Foster a welcoming environment and conducive conditions for the people with a Mongolian origin to meet regularly, establish connections, forge friendships, share knowledge, and exchange information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10">
                      <span className="text-accent font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Preserve Heritage</h3>
                    <p className="text-muted-foreground mt-2">
                      Teach and pass on the knowledge of Mongolian language, culture, arts, literature, and traditions to younger generations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Build International Understanding</h3>
                    <p className="text-muted-foreground mt-2">
                      Cultivate and strengthen the bonds of friendship and mutual understanding between the peoples of Mongolia and America.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our community and help preserve Mongolian heritage for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:info@mongolianheritagecenter.org"
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
              <a 
                href="#donate"
                className="inline-block bg-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors border border-primary-foreground/50"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
