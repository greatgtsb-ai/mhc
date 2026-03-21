import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'Удирдах зөвлөл болон менежментийн баг | Mongolian Heritage Center',
  description: 'Монгол Өв Соёлын Төвийн удирдах зөвлөл болон менежментийн баг',
}

const boardMembers = [
  {
    name: "Б. Батбаяр",
    role: "Удирдах зөвлөлийн дарга",
    bio: "20 гаруй жил соёлын салбарт ажилласан туршлагатай, олон улсын хамтын ажиллагааны чиглэлээр мэргэшсэн.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Д. Оюунчимэг",
    role: "Удирдах зөвлөлийн гишүүн",
    bio: "Түүхийн ухааны доктор, Монголын түүх, соёлын судлаач.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Г. Энхбат",
    role: "Удирдах зөвлөлийн гишүүн",
    bio: "Санхүүгийн салбарын мэргэжилтэн, олон нийтийн байгууллагын удирдлагын туршлагатай.",
    image: "/images/chairman.jpg"
  }
]

const managementTeam = [
  {
    name: "С. Мөнхбаяр",
    role: "Гүйцэтгэх захирал",
    bio: "Соёлын менежментийн чиглэлээр магистрын зэрэгтэй, 15 жилийн туршлагатай.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Б. Сарантуяа",
    role: "Хөтөлбөрийн захирал",
    bio: "Соёлын арга хэмжээ зохион байгуулах, хөтөлбөр боловсруулах чиглэлээр мэргэшсэн.",
    image: "/images/chairman.jpg"
  },
  {
    name: "Э. Тэмүүлэн",
    role: "Санхүүгийн менежер",
    bio: "Нягтлан бодох бүртгэлийн мэргэжилтэй, олон нийтийн байгууллагын санхүүгийн удирдлагын туршлагатай.",
    image: "/images/chairman.jpg"
  },
  {
    name: "А. Болормаа",
    role: "Олон нийттэй харилцах менежер",
    bio: "Олон нийтийн харилцаа, маркетингийн чиглэлээр мэргэшсэн.",
    image: "/images/chairman.jpg"
  }
]

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Удирдах зөвлөл болон менежментийн баг
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Манай төвийг удирдан чиглүүлж буй мэргэжилтнүүдийн баг
            </p>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Удирдах зөвлөл
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>

            {/* Management Team */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Менежментийн баг
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementTeam.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
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
