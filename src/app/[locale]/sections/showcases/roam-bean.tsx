"use client"

import { Button } from "@/components/ui/button"
import { Coffee, Map, Leaf, ChevronRight } from "lucide-react"

export default function RoamBean() {
  return (
    <div className="bg-[#FAF8F5] text-[#3E2723] min-h-screen font-serif">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E6DFD3]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest uppercase">Roam Bean</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#D84315] transition-colors">Shop Coffee</a>
            <a href="#" className="hover:text-[#D84315] transition-colors">Our Story</a>
            <a href="#" className="hover:text-[#D84315] transition-colors">Brew Guides</a>
          </div>
          <Button variant="outline" className="border-[#3E2723] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#FAF8F5] rounded-none uppercase text-xs tracking-widest px-6 h-10">
            Subscribe
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:flex max-w-7xl mx-auto items-center gap-16 min-h-[90vh]">
        <div className="lg:w-1/2">
          <p className="text-[#D84315] font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
            <Coffee className="h-4 w-4" /> Single Origin Roasters
          </p>
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-black mb-8 text-[#2E1A14]">
            Wildly<br/><span className="text-[#D84315] italic font-serif font-normal">Sourced</span>.
          </h1>
          <p className="text-lg md:text-xl text-[#5D4037] mb-12 max-w-md leading-relaxed font-sans">
            We travel the world to find exceptional coffee, roasting it carefully to highlight the unique terroir of its origin.
          </p>
          <Button size="lg" className="bg-[#D84315] hover:bg-[#BF360C] text-white rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
            Shop the collection
          </Button>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="aspect-[3/4] bg-[#E6DFD3] rounded-t-full rounded-bl-full overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Coffee beans" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Origins Marquee */}
      <div className="border-y border-[#E6DFD3] py-6 overflow-hidden bg-[#F5EFE6]">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-xl font-bold uppercase tracking-widest text-[#8D6E63]">
          <span>Ethiopia Yirgacheffe</span>
          <span>•</span>
          <span>Colombia Guanesera</span>
          <span>•</span>
          <span>Kenya Guji</span>
          <span>•</span>
          <span>Guatemala Nyeri</span>
          <span>•</span>
          <span>Costa Rica Antigua</span>
          <span>•</span>
          <span>Honduras Huehuetenango</span>
        </div>
      </div>

      {/* Product Highlight */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Current Releases</h2>
          <p className="font-sans text-[#5D4037] text-lg">Fresh crop arrivals, roasted lightly to preserve delicate floral and fruit notes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'The Explorer Blend', origin: 'South America / Africa', notes: 'Chocolate, Hazelnut, Red Berry', price: '$18' },
            { title: 'Finca El Paraiso', origin: 'Colombia', notes: 'Peach, Jasmine, Honey', price: '$24' },
            { title: 'Buku Abel', origin: 'Ethiopia', notes: 'Blueberry, Earl Grey, Lemon', price: '$26' },
          ].map((item, i) => (
            <div key={i} className="group relative border border-[#E6DFD3] p-8 hover:bg-white transition-colors duration-500 flex flex-col">
              <div className="h-64 w-full bg-[#F5EFE6] mb-8 group-hover:scale-105 transition-transform duration-500 rounded overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${['1559525839-b184a4d698c7','1587734195503-904fca47e0e9','1497935586351-b67a49e012bf'][i % 3]}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="uppercase tracking-widest text-xs font-bold text-[#D84315] mb-2">{item.origin}</div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="font-sans text-[#5D4037] text-sm mb-8 flex-1">Notes: {item.notes}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-lg">{item.price}</span>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-[#D84315] group/btn">
                  Add to Cart <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story / Values */}
      <section className="bg-[#3E2723] text-[#FAF8F5] py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-[#4E342E] rounded-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Coffee farm" className="absolute inset-0 w-full h-full object-cover opacity-80" />
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
    </div>
  )
}