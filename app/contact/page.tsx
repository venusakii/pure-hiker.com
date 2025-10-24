import { Droplet, Mail, MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <nav className="glass-strong sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Droplet className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              PURE HIKER
            </span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-3xl mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Have questions about water filtration? Want to share your hiking story? We'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-strong p-6 rounded-2xl text-center">
                <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-serif font-bold mb-2">Email Us</h3>
                <p className="text-sm text-foreground/70">info@pure-hiker.com</p>
              </div>
              <div className="glass-strong p-6 rounded-2xl text-center">
                <MessageSquare className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-serif font-bold mb-2">Response Time</h3>
                <p className="text-sm text-foreground/70">Within 24-48 hours</p>
              </div>
              <div className="glass-strong p-6 rounded-2xl text-center">
                <Send className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-serif font-bold mb-2">Social Media</h3>
                <p className="text-sm text-foreground/70">Follow our adventures</p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl glass-strong border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl glass-strong border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl glass-strong border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass-strong border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center">
            <Link href="/" className="inline-block px-8 py-3 glass rounded-full hover:glass-strong transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
