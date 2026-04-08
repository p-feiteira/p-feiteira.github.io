"use client"

import { Button } from "@/components/ui/button"
import { Coffee, Map, Leaf, ChevronRight, Flame } from "lucide-react"
import Image from "next/image"

export default function RoamBean() {
  const products = [
    { title: 'The Explorer Blend', origin: 'South America / Africa', notes: ['Chocolate', 'Hazelnut', 'Red Berry'], price: '€18', img: '1559525839-b184a4d698c7' },
    { title: 'Finca El Paraiso', origin: 'Colombia', notes: ['Peach', 'Jasmine', 'Honey'], price: '€24', img: '1587734195503-904fca47e0e9' },
    { title: 'Buku Abel', origin: 'Ethiopia', notes: ['Blueberry', 'Earl Grey', 'Lemon'], price: '€26', img: '1497935586351-b67a49e012bf' },
  ]

  const tasteAtlas = [
    { emoji: '🍑', name: 'FRUIT', desc: 'Stone fruit, berry, and citrus notes from high-altitude washed lots.', origins: 'Ethiopia, Kenya' },
    { emoji: '🌸', name: 'FLORAL', desc: 'Jasmine, lavender, rose — the hallmark of Ethiopian naturals.', origins: 'Ethiopia, Yemen' },
    { emoji: '🍫', name: 'CHOCOLATE', desc: 'Bittersweet cocoa, dark chocolate, mocha.', origins: 'Colombia, Peru' },
    { emoji: '🌰', name: 'NUT', desc: 'Almond, hazelnut, walnut — rich and comforting.', origins: 'Brazil, Honduras' },
    { emoji: '🌍', name: 'EARTH', desc: 'Cedar, tobacco, dried fruit — complex terroir.', origins: 'Sumatra, Yemen' },
    { emoji: '🌿', name: 'SPICE', desc: 'Cardamom, clove, cinnamon — exotic and warming.', origins: 'Indonesia, Ethiopia' },
  ]

  const brews = [
    { method: 'V60 Pour Over', ratio: '1:16', time: '3:00 min', temp: '93°C', desc: 'For clean, bright cups that showcase delicate florals.' },
    { method: 'Chemex', ratio: '1:15', time: '4:30 min', temp: '94°C', desc: 'Full-bodied with exceptional clarity. Great for sharing.' },
    { method: 'Aeropress', ratio: '1:14', time: '2:00 min', temp: '88°C', desc: 'Forgiving and flexible. Espresso-style or long cup.' },
  ]

  const subscriptions = [
    { name: 'WEEKLY', price: '€18', desc: 'Fresh roast every 7 days.', features: ['250g', 'Free shipping'], featured: false },
    { name: 'BI-WEEKLY', price: '€16', desc: 'Our most popular plan.', features: ['250g or 500g', 'Free shipping', 'Skip anytime'], featured: true },
    { name: 'MONTHLY', price: '€14', desc: 'Light habit, quality first.', features: ['250g', 'Free shipping', 'Cancel anytime'], featured: false },
  ]

  const fieldNotes = [
    { date: 'March 2026', title: 'Harvest Report: Ethiopia Buku Abel', excerpt: 'Exceptional cherry density this season. Processing has begun; first shipment arrives in 6 weeks.' },
    { date: 'February 2026', title: "Origin Visit: Colombia's Guanesera Region", excerpt: "We spent 5 days with the Palacios family on Finca El Paraiso. The terroir is unlike anything we've seen." },
    { date: 'April 2026', title: 'New Crop Alert: Kenya Guji AA', excerpt: 'High scoring lot just landed. Notes of black tea, lemon curd, and redcurrant. Limited quantity.' },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5] font-serif text-[#3E2723]">

      {/* Editorial Flag */}
      <div className="bg-[#F5EFE6] border-b border-[#E6DFD3] py-2 text-center">
        <span className="font-mono text-xs tracking-widest text-[#8D6E63] uppercase">ISSUE N°04 · SPRING 2026 · SINGLE ORIGIN EDITION</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-[#E6DFD3] bg-[#FAF8F5]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest uppercase">Roam Bean</div>
          <div className="hidden gap-8 text-sm font-bold uppercase tracking-widest lg:flex">
            <a href="#" className="hover:text-[#D84315] transition-colors">Shop Coffee</a>
            <a href="#" className="hover:text-[#D84315] transition-colors">Our Story</a>
            <a href="#" className="hover:text-[#D84315] transition-colors">Brew Guides</a>
          </div>
          <Button variant="outline" className="border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#FAF8F5] rounded-none uppercase text-xs tracking-widest px-6 h-10">
            Subscribe
          </Button>
        </div>
      </nav>
      <nav
        aria-label="Mobile showcase navigation"
        className="sticky top-20 z-40 border-b border-[#E6DFD3] bg-[#FAF8F5]/95 px-4 py-3 backdrop-blur-sm lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1 pl-20 sm:pl-24">
          <a href="#releases" className="shrink-0 rounded-full border border-[#E6DFD3] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5D4037] transition-colors hover:border-[#D84315] hover:text-[#D84315]">
            Current Releases
          </a>
          <a href="#atlas" className="shrink-0 rounded-full border border-[#E6DFD3] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5D4037] transition-colors hover:border-[#D84315] hover:text-[#D84315]">
            Taste Atlas
          </a>
          <a href="#brew-guides" className="shrink-0 rounded-full border border-[#E6DFD3] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5D4037] transition-colors hover:border-[#D84315] hover:text-[#D84315]">
            Brew Guides
          </a>
          <a href="#subscriptions" className="shrink-0 rounded-full border border-[#E6DFD3] px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5D4037] transition-colors hover:border-[#D84315] hover:text-[#D84315]">
            Subscriptions
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6 lg:flex max-w-7xl mx-auto items-center gap-16 min-h-[90dvh]">
        <div className="lg:w-1/2">
          <p className="text-[#D84315] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2 font-sans">
            <Coffee className="h-4 w-4" /> Single Origin Roasters <span className="text-[#8D6E63] mx-2">★</span> Est. 2018
          </p>
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-black mb-8 text-[#2E1A14]">
            Wildly<br/><span className="text-[#D84315] italic font-serif font-normal">Sourced</span>.
          </h1>
          <p className="text-lg md:text-xl text-[#5D4037] mb-10 max-w-md leading-relaxed font-sans">
            We travel the world to find exceptional coffee, roasting it carefully to highlight the unique terroir of its origin.
          </p>
          <Button size="lg" className="bg-[#D84315] hover:bg-[#BF360C] text-white rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold mb-4">
            Shop the collection
          </Button>
          <p className="font-mono text-xs text-[#8D6E63] tracking-wider">Free shipping · Direct trade · Carbon neutral</p>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="aspect-[3/4] bg-[#E6DFD3] rounded-t-full rounded-bl-full overflow-hidden shadow-2xl relative">
            <Image
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Coffee beans"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover mix-blend-multiply"
            />
            <div className="absolute top-4 right-4 bg-[#D84315] text-white text-xs uppercase font-bold tracking-widest px-3 py-1.5">
              NEW CROP
            </div>
          </div>
        </div>
      </section>

      {/* Origins Marquee */}
      <div className="border-y border-[#E6DFD3] overflow-hidden bg-[#F5EFE6]">
        <div className="py-4 flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-xl font-bold uppercase tracking-widest text-[#8D6E63]">
          {['Ethiopia Yirgacheffe', '•', 'Colombia Guanesera', '•', 'Kenya Guji', '•', 'Guatemala Nyeri', '•', 'Costa Rica Antigua', '•', 'Honduras Huehuetenango', '•', 'Ethiopia Yirgacheffe', '•', 'Colombia Guanesera', '•', 'Kenya Guji', '•', 'Guatemala Nyeri'].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="py-4 flex gap-12 animate-[marquee-reverse_25s_linear_infinite] whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[#BCAAA4] border-t border-[#E6DFD3]">
          {['ALTITUDE 1900M', '•', 'WASHED PROCESS', '•', 'NATURAL PROCESS', '•', 'HONEY PROCESS', '•', 'ALTITUDE 2100M', '•', 'ANAEROBIC', '•', 'ALTITUDE 1600M', '•', 'WET-HULLED', '•', 'ALTITUDE 1900M', '•', 'WASHED PROCESS', '•', 'NATURAL PROCESS'].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Product Highlight */}
      <section id="releases" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-32">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Current Releases</h2>
          <p className="font-sans text-[#5D4037] text-lg">Fresh crop arrivals, roasted lightly to preserve delicate floral and fruit notes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div key={i} className="group relative border border-[#E6DFD3] p-8 hover:bg-white transition-colors duration-500 flex flex-col">
              <div className="relative h-64 w-full bg-[#F5EFE6] mb-8 group-hover:scale-105 transition-transform duration-500 rounded overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${item.img}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="uppercase tracking-widest text-xs font-bold text-[#D84315] mb-2 font-sans">{item.origin}</div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <div className="mb-6 flex-1">
                <p className="font-sans text-[#5D4037] text-xs uppercase tracking-wider mb-2">Notes:</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.notes.map((note) => (
                    <span key={note} className="rounded-full bg-[#F5EFE6] border border-[#E6DFD3] text-[#5D4037] text-xs uppercase tracking-wider px-2 py-0.5 font-sans">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-lg">{item.price}</span>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#D84315] group/btn font-sans">
                  Add to Cart <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Taste Atlas */}
      <section id="atlas" className="py-32 px-6 bg-[#F5EFE6] scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Taste Atlas</h2>
            <p className="font-sans text-[#5D4037] text-lg">Six flavor families. Infinite expressions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {tasteAtlas.map((item) => (
              <div key={item.name} className="bg-white border border-[#E6DFD3] p-6">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <div className="font-black uppercase tracking-widest text-sm mb-3">{item.name}</div>
                <p className="font-sans text-sm text-[#5D4037] mb-4 leading-relaxed">{item.desc}</p>
                <p className="font-mono text-xs text-[#D84315] uppercase tracking-wider">Origins: {item.origins}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brew Guides */}
      <section id="brew-guides" className="py-32 px-6 bg-[#FAF8F5] scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-widest text-[#8D6E63] uppercase mb-4">Extraction Science</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">How to Brew</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {brews.map((brew) => (
              <div key={brew.method} className="bg-[#3E2723] text-[#FAF8F5] p-8">
                <Flame className="h-6 w-6 text-[#D84315] mb-6" />
                <h3 className="text-xl font-black uppercase tracking-widest mb-6">{brew.method}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#D84315] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Ratio {brew.ratio}</span>
                  <span className="bg-[#D84315] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">{brew.time}</span>
                  <span className="bg-[#D84315] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">{brew.temp}</span>
                </div>
                <p className="font-sans text-[#D7CCC8] text-sm leading-relaxed">{brew.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section id="subscriptions" className="py-32 px-6 bg-[#F5EFE6] scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono text-xs tracking-widest text-[#8D6E63] uppercase mb-4">Coffee on your terms</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Never Run Out</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {subscriptions.map((tier) => (
              <div
                key={tier.name}
                className={`border p-8 flex flex-col relative ${
                  tier.featured
                    ? 'border-[#D84315] bg-[#FFF3EF]'
                    : 'border-[#E6DFD3] bg-white'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D84315] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className="font-black uppercase tracking-widest text-sm mb-4">{tier.name}</div>
                <div className="text-4xl font-black mb-1">{tier.price}</div>
                <div className="font-sans text-xs text-[#8D6E63] mb-6">per bag</div>
                <p className="font-sans text-sm text-[#5D4037] mb-6">{tier.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="font-sans text-sm text-[#5D4037] flex items-center gap-2">
                      <span className="text-[#D84315]">→</span> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`rounded-none uppercase text-xs tracking-widest font-bold h-12 ${
                    tier.featured
                      ? 'bg-[#D84315] hover:bg-[#BF360C] text-white'
                      : 'bg-[#3E2723] hover:bg-[#2E1A14] text-[#FAF8F5]'
                  }`}
                >
                  Subscribe
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Notes */}
      <section className="py-32 px-6 bg-[#3E2723] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest text-[#8D6E63] uppercase mb-4">Dispatches from origin</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase">From the Field</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {fieldNotes.map((note) => (
              <div key={note.title} className="border-t border-[#5D4037] pt-8">
                <p className="font-mono text-xs text-[#D84315] uppercase tracking-widest mb-4">{note.date}</p>
                <h3 className="font-bold text-lg leading-snug mb-4">{note.title}</h3>
                <p className="font-sans text-[#D7CCC8] text-sm leading-relaxed mb-6">{note.excerpt}</p>
                <a href="#" className="font-sans text-xs text-[#D84315] uppercase tracking-widest hover:underline">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Values */}
      <section className="bg-[#3E2723] text-[#FAF8F5] py-32 px-6 border-t border-[#5D4037]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-[#4E342E] rounded-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Coffee farm"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-80"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1]">Direct trade.<br/>Better wages.<br/>Exceptional cup.</h2>
            <div className="space-y-8 font-sans text-lg text-[#D7CCC8]">
              <p>We pay premiums well above Fair Trade minimums directly to producers. This ensures sustainable farming practices and guarantees the highest quality lots make it to our roastery.</p>
              <div className="flex gap-6 mt-8 pt-8 border-t border-[#5D4037]">
                <div className="flex flex-col gap-2">
                  <Map className="h-6 w-6 text-[#D84315]" />
                  <span className="font-bold uppercase tracking-widest text-xs text-white">Direct Sourcing</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Leaf className="h-6 w-6 text-[#D84315]" />
                  <span className="font-bold uppercase tracking-widest text-xs text-white">100% Organic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E1A14] text-[#FAF8F5] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-2xl font-black tracking-widest uppercase mb-3">Roam Bean</div>
            <p className="font-sans text-sm text-[#8D6E63]">Single Origin Roasters, Lisboa PT</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8D6E63] mb-4">Navigate</p>
            <ul className="space-y-2 font-sans text-sm">
              {['Shop', 'Our Story', 'Brew Guides', 'Subscription', 'Wholesale'].map((link) => (
                <li key={link}><a href="#" className="text-[#D7CCC8] hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#8D6E63] mb-4">Stay in the loop.</p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#3E2723] border border-[#5D4037] px-4 py-3 text-sm font-sans text-[#FAF8F5] placeholder-[#8D6E63] focus:outline-none focus:border-[#D84315]"
              />
              <button className="bg-[#D84315] hover:bg-[#BF360C] text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors font-sans">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#3E2723] pt-8 text-center">
          <p className="font-mono text-xs text-[#8D6E63]">© 2026 Roam Bean. Roasted with care in Lisboa, Portugal.</p>
        </div>
      </footer>
    </div>
  )
}
