import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ChairmanSection } from "@/components/chairman-section"
import { StructureSection } from "@/components/structure-section"
import { NewsSection } from "@/components/news-section"
import { ParticipationSection } from "@/components/participation-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <ChairmanSection />
      <StructureSection />
      <NewsSection />
      <ParticipationSection />
      <Footer />
    </main>
  )
}
