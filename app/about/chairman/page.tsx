import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'Удирдах зөвлөлийн даргын мэндчилгээ | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн Удирдах зөвлөлийн даргын мэндчилгээ',
}

export default function ChairmanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Удирдах зөвлөлийн даргын мэндчилгээ
            </h1>
          </div>
        </section>

        {/* Chairman Message */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Chairman Photo */}
              <div className="md:col-span-1">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/images/chairman.jpg"
                    alt="Удирдах зөвлөлийн дарга"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Б. Батбаяр</h3>
                  <p className="text-sm text-muted-foreground">Удирдах зөвлөлийн дарга</p>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Эрхэм хүндэт зочид, найзууд аа!
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Монгол Өв Соёлын Төвийн цахим хуудсанд тавтай морилно уу. Манай төв нь Монгол угсаатны 
                  эрт, эдүгээгийн өв соёлыг хадгалж хамгаалах, судалж шинжлэх, сурталчлан түгээх үйл 
                  хэрэгт хувь нэмрээ оруулах эрхэм зорилготойгоор үйл ажиллагаа явуулж байна.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Монголчуудын өвөрмөц соёл, уламжлал, түүхийг дэлхий нийтэд таниулах, ирээдүй хойч 
                  үедээ өвлүүлэн үлдээх нь бидний гол зорилго юм. Энэхүү зорилгодоо хүрэхийн тулд бид 
                  олон улсын түвшинд хамтын ажиллагааг өргөжүүлэн, соёлын солилцооны хөтөлбөрүүдийг 
                  хэрэгжүүлж байна.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Та бүхнийг манай төвтэй хамтран ажиллаж, Монголын өв соёлыг хамгаалах, хөгжүүлэх 
                  үйл хэрэгт идэвхтэй оролцохыг урьж байна.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Хүндэтгэсэн,
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-serif text-lg font-semibold text-foreground">Б. Батбаяр</p>
                  <p className="text-sm text-muted-foreground">Удирдах зөвлөлийн дарга</p>
                  <p className="text-sm text-muted-foreground">Монгол Өв Соёлын Төв</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
