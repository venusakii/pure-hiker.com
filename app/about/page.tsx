import { Heart, Leaf, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <nav className="glass-strong sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            {/* Placeholder for logo or site name */}
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            About Pure Hiker
          </h1>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <p className="text-lg">
                Welcome to Pure Hiker — your trusted guide to clean, safe water on every adventure. We believe that
                access to pure water shouldn't be a luxury, but a fundamental right for every outdoor enthusiast.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Mission</h2>
              <p>
                We're passionate about helping hikers, campers, and travelers find the perfect water filtration
                solution. Through careful research and real-world testing, we provide honest recommendations that keep
                you hydrated and healthy on the trail.
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="glass p-6 rounded-2xl text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Passion</h3>
                <p className="text-sm">We love the outdoors and want to share that passion with you</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <Leaf className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-sm">Reducing plastic waste, one filtered bottle at a time</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Community</h3>
                <p className="text-sm">Building a community of conscious adventurers</p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Why Trust Us?</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Extensive field testing of water filtration products</li>
                <li>Unbiased reviews based on real outdoor experiences</li>
                <li>Commitment to environmental sustainability</li>
                <li>Transparent affiliate partnerships</li>
                <li>Regular updates with the latest filtration technology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Story</h2>
              <p>
                Pure Hiker was born from countless miles on the trail and a simple question: "Is this water safe to
                drink?" We've tested filters in mountain streams, desert springs, and backcountry lakes. Now, we're
                sharing what we've learned to help you stay safe and hydrated on your adventures.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
