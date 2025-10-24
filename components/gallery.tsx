const images = [
  { url: "/hiker-drinking-filtered-water-in-mountains.jpg", alt: "Mountain hiking" },
  { url: "/water-filter-in-misty-forest-stream.jpg", alt: "Forest stream" },
  { url: "/camping-with-water-purifier-at-sunset.jpg", alt: "Camping sunset" },
  { url: "/backpacker-using-water-filter-by-lake.jpg", alt: "Lake adventure" },
]

export function Gallery() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            Water, Light &{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Freedom</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl overflow-hidden hover:glow-hover transition-all duration-300 hover:scale-105 float group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
