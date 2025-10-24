export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Information We Collect</h2>
              <p>
                Pure Hiker collects minimal information to provide you with the best experience. We may collect basic
                analytics data about your visit, including pages viewed and time spent on our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience and remember your preferences. You can control cookie
                settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Amazon Affiliate Disclosure</h2>
              <p>
                Pure Hiker is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p>
                Our website contains links to third-party websites, including Amazon. We are not responsible for the
                privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Contact Us</h2>
              <p>If you have any questions about our privacy policy, please contact us through our contact page.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
