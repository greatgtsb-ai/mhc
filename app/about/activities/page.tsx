import Header from "@/components/header";
import Footer from "@/components/footer";
import { BookOpen, Globe, Users, Landmark, Mic, Archive } from "lucide-react";

export const metadata = {
  title: "Төвийн үйл ажиллагааны гол чиглэлүүд | Mongolian Heritage Center",
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
  {
    icon: BookOpen,
    title: "Судалгаа, шинжилгээ",
    description:
      "Монгол угсаатны түүх, соёл, уламжлалын талаар гүнзгий судалгаа хийж, эрдэм шинжилгээний бүтээл туурвидаг.",
    features: [
      "Эрдэм шинжилгээний хурал зохион байгуулах",
      "Судалгааны тайлан хэвлүүлэх",
      "Олон улсын эрдэмтэдтэй хамтрах",
    ],
  },
  {
    icon: Globe,
    title: "Олон улсын хамтын ажиллагаа",
    description:
      "Дэлхийн улс орнуудын соёлын байгууллагуудтай хамтран ажиллаж, соёлын солилцоог дэмжиж байна.",
    features: [
      "Соёлын солилцооны хөтөлбөр",
      "Олон улсын үзэсгэлэн",
      "Хамтарсан төслүүд",
    ],
  },
  {
    icon: Users,
    title: "Боловсрол, сургалт",
    description:
      "Залуу үеийнхэнд Монголын өв соёлын талаар мэдлэг олгох сургалт, семинар зохион байгуулдаг.",
    features: [
      "Сургалтын хөтөлбөр",
      "Уламжлалт урлагийн анги",
      "Хүүхэд залуучуудын клуб",
    ],
  },
  {
    icon: Mic,
    title: "Арга хэмжээ, үзэсгэлэн",
    description:
      "Соёлын арга хэмжээ, үзэсгэлэн зохион байгуулж, олон нийтийг соёлын амьдралд татан оролцуулдаг.",
    features: ["Жилийн үзэсгэлэнгүүд", "Соёлын наадам", "Урлагийн тоглолт"],
  },
  {
    icon: Landmark,
    title: "Музей, архив",
    description:
      "Монголын түүх, соёлын үнэт өвийг хадгалсан музей, архивын үйл ажиллагаа явуулдаг.",
    features: ["Байнгын үзэсгэлэн", "Түр үзэсгэлэн", "Архивын үйлчилгээ"],
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Төвийн үйл ажиллагааны гол чиглэлүүд
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Монгол Өв Соёлын Төвийн үйл ажиллагааны үндсэн чиглэлүүд
            </p>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <activity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                  <ul className="space-y-2">
                    {activity.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
