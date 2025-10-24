import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProducts } from "@/components/featured-products"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChoose } from "@/components/why-choose"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { ComparisonTable } from "@/components/comparison-table"
import { EcoImpact } from "@/components/eco-impact"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="gradient-bg min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <HowItWorks />
      <WhyChoose />
      <Gallery />
      <Reviews />
      <ComparisonTable />
      <EcoImpact />
      <CTASection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
