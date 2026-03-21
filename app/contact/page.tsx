import Header from '@/components/header'
import Footer from '@/components/footer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Холбоо барих | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвтэй холбоо барих',
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Хаяг",
    details: ["Улаанбаатар хот", "Сүхбаатар дүүрэг", "Энхтайвны өргөн чөлөө 46"]
  },
  {
    icon: Phone,
    title: "Утас",
    details: ["+976 11 123456", "+976 99 123456"]
  },
  {
    icon: Mail,
    title: "Имэйл",
    details: ["info@mhc.mn", "contact@mhc.mn"]
  },
  {
    icon: Clock,
    title: "Ажлын цаг",
    details: ["Даваа - Баасан: 09:00 - 18:00", "Бямба: 10:00 - 16:00", "Ням: Амарна"]
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Холбоо барих
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Бидэнтэй холбогдох, санал хүсэлт илгээх
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Бидэнд мессеж илгээх
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Нэр
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Таны нэр"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Имэйл
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Утасны дугаар
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+976 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сэдэв
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Мессежийн сэдэв"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Мессеж
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Таны мессеж..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Илгээх
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Холбоо барих мэдээлэл
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Газрын зураг</p>
                  </div>
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
