import Image from "next/image"
import { Quote } from "lucide-react"

export function ChairmanSection() {
  return (
    <section id="chairman" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Leadership</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 text-balance">
              Greetings from the Chairman
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic pl-6 border-l-4 border-primary mb-8">
                {"\""}Our heritage is not merely a collection of artifacts and traditions—it is the living soul of our nation. At the Mongolian Heritage Center, we believe that by understanding and honoring our past, we illuminate the path to a brighter future for all Mongolians.{"\""}
              </blockquote>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to the Mongolian Heritage Center. As Chairman of the Board, I am honored to lead an organization 
              dedicated to preserving the rich tapestry of Mongolian culture. Our mission extends beyond mere preservation—we 
              strive to make our heritage accessible, relevant, and inspiring for generations to come.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I invite you to explore our programs, visit our exhibitions, and join us in this vital work of cultural stewardship.
            </p>

            <div>
              <p className="font-serif text-xl font-semibold text-foreground">B. Batbayar</p>
              <p className="text-muted-foreground">Chairman of the Board</p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden max-w-md mx-auto lg:ml-auto">
              <Image
                src="/images/chairman.jpg"
                alt="Chairman B. Batbayar"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
