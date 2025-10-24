import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Acceptance of Terms</h2>
              <p>
                By accessing and using Pure Hiker, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Use of Service</h2>
              <p>
                Pure Hiker provides information and recommendations about water filtration products. All product
                recommendations are based on research and personal experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Affiliate Disclaimer</h2>
              <p>
                Pure Hiker participates in affiliate programs. When you click on links to products and make a purchase,
                we may receive a commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Product Information</h2>
              <p>
                While we strive to provide accurate product information, we cannot guarantee that all details are
                complete or error-free. Always verify product specifications with the manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p>
                Pure Hiker is not responsible for any damages or losses resulting from the use of products recommended
                on this site. Always follow manufacturer instructions for water filtration products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the site after changes
                constitutes acceptance of the new terms.
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
