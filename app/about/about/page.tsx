import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  BookOpen,
  Globe,
  Users,
  Landmark,
  Mic,
  Archive,
  Eye,
  Clock4,
} from "lucide-react";

export const metadata = {
  title: "Бидний тухай | Mongolian Heritage Center",
  description: "Монгол Өв Соёлын Төвийн үйл ажиллагааны гол чиглэлүүд",
};

const activities = [
  {
    icon: Archive,
    title: "Өв соёлын хадгалалт",
    description:
      "Монголын түүхэн дурсгал, соёлын өвийг цуглуулах, хадгалах, баримтжуулах ажлыг тасралтгүй явуулж байна.",
    features: [
      "Түүхэн баримт бичгүүдийг архивлах",
      "Уламжлалт урлагийн бүтээлүүдийг хадгалах",
      "Дижитал архив бүрдүүлэх",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Бидний тухай
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Монгол Өв Соёлын Төвийн тухай
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/traditional-ger.jpg"
                    alt="Traditional Mongolian Ger"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>

              {/* Content */}
              <div>
                <span className="text-accent font-medium tracking-widest uppercase text-sm">
                  About Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  Монгол Өв Соёлын Төвийн тухай
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Монгол Өв Соёлын Төв нь 2023 оны 8 дугаар сард АНУ-ын Чикаго
                  хотноо байгуулагдсан ашгийн бус байгууллага. Үйл ажиллагааны
                  зорилго нь: 1. Монгол гаралтай иргэд тогтмол уулзаж, танилцан
                  нөхөрлөх, биенээсээ суралцах, мэдээлэл солилцох таатай орчин,
                  нөхцлийг бүрдүүлэх; 2. Залуу үедээ монгол хэл,өв соёл, урлаг,
                  уран зохиол, ёс заншлаас заан сургаж, өвлүүлэх; 3. Монгол,
                  Америкийн ард түмний найрамдал, харилцан ойлголцлыг
                  гүнзгийрүүлэн хөгжүүлэхэд оршино. Төвийн талаарх дэлгэрэнгүй
                  мэдээлэлийг mongolianheritagecenter.org хаягаар болон
                  https://www.facebook.com/mongolianheritagecenter пэйж хуудсаар
                  орж аваарай.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Монгол Өв Соёлын Төв нь 501(c)(3) ашгийн бус байгууллага юм.
                  Монгол Өв Соёлын Төвд өргөсөн хандив нь татвараас
                  чөлөөлөгддөг. IRS татварын дугаар: 93-3162554
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Алсын Хараа & Эрхэм Зорилго
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Монгол Өв Соёлын Төвийн зорилго, алсын хараа нь монгол түмний өв
            соёлыг хойч үедээ өвлүүлэх, дэлхий нийтэд сурталчлах, орчин цагийн
            боловсрол, соёлын харилцааг дэмжихэд чиглэгддэг.
          </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 ">
            {/* Mission */}
            <div className="p-8 border bg-gray-50 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-blue-600 mb-4 text-6xl">🚀</div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                The ‘Mongolian Heritage Center’ aims to meet the cultural needs
                of people with a Mongolian origin residing in the Midwestern
                region of the United States, to preserve and pass on the
                knowledge of Mongolian language, culture and traditions to
                future generations, and to promote the understanding of
                Mongolian heritage among foreign friends. Foster a welcoming
                environment and conducive conditions for the people with a
                Mongolian origin to meet regularly, establish connections, forge
                friendships, share knowledge, and exchange information. Teach
                and pass on the knowledge of Mongolian language, culture, arts,
                literature, and traditions to younger generations. Cultivate and
                strengthen the bonds of friendship and mutual understanding
                between the peoples of Mongolia and America.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 border bg-gray-50 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-purple-600 mb-4 text-6xl">👁️‍🗨️</div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Даяаршилд ондооших Монгол өв соёлоо эрхэмлэн авч үлдэх, өвлүүлэн
                таниулах
              </p>
            </div>
          </div>
        </section>

        {/* Core Values / Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50k</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
