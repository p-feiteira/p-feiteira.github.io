"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Filter, ChevronDown, Plus } from "lucide-react"

const PRODUCTS = [
  { name: 'Organic Cotton Tee', price: '€45', category: 'Apparel', photo: '1523381210434-271e8be1f52b' },
  { name: 'Ceramic Pour-Over', price: '€68', category: 'Home', photo: '1523275335684-37898b6baf30' },
  { name: 'Linen Throw Blanket', price: '€120', category: 'Home', photo: '1618331835717-801e976710b2' },
  { name: 'Everyday Tote Bag', price: '€85', category: 'Accessories', photo: '1611162616305-c69b3fa7fbe0' },
  { name: 'Essential Glassware Set', price: '€55', category: 'Home', photo: '1559525839-b184a4d698c7' },
  { name: 'Minimalist Watch', price: '€145', category: 'Accessories', photo: '1587734195503-904fca47e0e9' },
  { name: 'Bamboo Ribbed Towel', price: '€35', category: 'Home', photo: '1497935586351-b67a49e012bf' },
  { name: 'Scented Soy Candle', price: '€28', category: 'Home', photo: '1616486338812-3dadae4b4ace' },
]

const MATERIALS = [
  {
    name: 'Oak',
    label: 'OAK',
    body: 'Sustainably sourced FSC-certified oak from Portuguese forests. Air-dried for 24 months.',
    photo: '1523381210434-271e8be1f52b',
  },
  {
    name: 'Linen',
    label: 'LINEN',
    body: 'European flax, stone-washed for natural texture. Grows softer with every wash.',
    photo: '1523275335684-37898b6baf30',
  },
  {
    name: 'Clay',
    label: 'CLAY',
    body: 'Wheel-thrown by hand in small batches. No two pieces identical.',
    photo: '1618331835717-801e976710b2',
  },
]

const MAKERS = [
  { initials: 'A.F.', name: 'A. Ferreira', craft: 'Ceramicist', region: 'Alentejo, PT' },
  { initials: 'M.L.', name: 'M. Lima', craft: 'Textile Weaver', region: 'Castelo Branco, PT' },
  { initials: 'R.K.', name: 'R. Knudsen', craft: 'Furniture Maker', region: 'Copenhagen, DK' },
  { initials: 'Y.T.', name: 'Y. Tanaka', craft: 'Glass Artist', region: 'Porto, PT' },
]

export default function MeridianGoods() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans">

      {/* Announcement Bar */}
      <div className="bg-stone-100 border-b border-stone-200 py-2 px-4 text-center">
        <p className="text-xs font-mono tracking-widest text-stone-500 uppercase">
          SS26 Collection &nbsp;—&nbsp; Free shipping on orders over €120 &nbsp;—&nbsp; Certified B Corp
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-serif tracking-tight text-stone-900">Meridian Goods</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-stone-500 uppercase">
            <a href="#" className="text-stone-900 hover:text-stone-700 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Apparel</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Home</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Accessories</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-stone-500 hover:text-stone-900">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero — Asymmetric Editorial */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative chapter number */}
          <span
            className="absolute -left-8 top-0 text-[140px] md:text-[200px] font-black text-stone-100 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            01
          </span>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Left: editorial text */}
            <div className="flex-1 pt-8 md:pt-16">
              <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase mb-8">
                Issue 04 / Spring–Summer 2026
              </span>
              <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-none mb-8">
                The Quiet<br />
                <em>Essentials.</em>
              </h1>
              <p className="text-base text-stone-500 leading-relaxed max-w-sm mb-10">
                Objects made with intention. Chosen for the long run. Discover the SS26 collection — fewer things, made better.
              </p>
              <Button className="bg-stone-900 hover:bg-stone-800 text-white rounded-none px-8 h-12 text-xs font-mono tracking-widest uppercase">
                Shop Collection
              </Button>
            </div>

            {/* Right: portrait image */}
            <div className="w-full md:w-[420px] shrink-0 mt-0 md:-mt-8">
              <div className="aspect-[3/4] overflow-hidden border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Interior collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hairline divider */}
      <div className="border-t border-stone-200 mx-4 sm:mx-6 lg:mx-8" />

      {/* Product Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase mb-3">02 — New Arrivals</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900">The Collection</h2>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="rounded-none border-stone-300 text-xs font-mono tracking-widest uppercase">
              <Filter className="mr-2 h-3 w-3" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="rounded-none border-stone-300 text-xs font-mono tracking-widest uppercase">
              Sort <ChevronDown className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden mb-4 relative">
                <img
                  src={`https://images.unsplash.com/photo-${product.photo}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors" />
                {/* Quick-add */}
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 border border-stone-50 text-stone-50 bg-stone-900/60 backdrop-blur-sm px-4 py-2 text-xs font-mono tracking-widest uppercase whitespace-nowrap hover:bg-stone-900/80">
                  <Plus className="h-3 w-3" /> Quick Add
                </button>
              </div>
              <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase mb-1">{product.category}</span>
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-stone-900 leading-tight">{product.name}</h3>
                <span className="text-sm font-medium text-stone-900 ml-4 shrink-0">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hairline divider */}
      <div className="border-t border-stone-200 mx-4 sm:mx-6 lg:mx-8" />

      {/* Materials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase mb-3">03 — Craft & Materials</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Made with care.</h2>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {MATERIALS.map((mat, i) => (
            <div key={i} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-6 border border-stone-200">
                <img
                  src={`https://images.unsplash.com/photo-${mat.photo}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`}
                  alt={mat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-3">{mat.name}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{mat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Makers Strip */}
      <section className="border-t border-b border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase mb-8">04 — Our Makers</span>
          <div className="flex gap-12 overflow-x-auto pb-2 scrollbar-none">
            {MAKERS.map((maker, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono tracking-wider text-stone-600 font-bold">{maker.initials}</span>
                </div>
                <div>
                  <span className="block text-xs font-mono tracking-widest text-stone-900 uppercase font-bold">{maker.name}</span>
                  <span className="block text-xs font-mono tracking-widest text-stone-500 uppercase">{maker.craft}</span>
                  <span className="block text-xs font-mono tracking-widest text-stone-400 uppercase">{maker.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Editorial Band */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-stone-200 border-y border-stone-200 my-0">
            {/* Left: tall image */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Lookbook"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right: prose panel */}
            <div className="w-full md:w-1/2 bg-stone-50 flex flex-col justify-center px-10 md:px-16 py-16">
              <span className="text-xs font-mono tracking-widest text-stone-400 uppercase mb-8">05 — Lookbook / SS26</span>
              <blockquote className="font-serif text-xl md:text-2xl text-stone-700 leading-relaxed italic mb-8">
                &ldquo;This season, we asked a simple question: what do you actually need? The answer shaped everything — fewer objects, made with more care.&rdquo;
              </blockquote>
              <cite className="text-xs font-mono tracking-widest text-stone-400 uppercase not-italic">
                — The Meridian Studio, 2026
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter — Manifesto Footer */}
      <section className="bg-stone-900 text-stone-50 py-28 px-4 text-center">
        <blockquote className="font-serif text-3xl md:text-5xl text-stone-100 mb-3 italic">
          &ldquo;Make less. Make better.&rdquo;
        </blockquote>
        <p className="text-xs font-mono tracking-widest text-stone-500 uppercase mb-12">— Meridian Goods, est. 2018</p>
        <div className="flex max-w-sm mx-auto gap-0">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-stone-800 border-none px-5 py-3 text-xs font-mono tracking-widest text-stone-100 placeholder-stone-600 outline-none focus:ring-1 focus:ring-stone-600 uppercase"
          />
          <Button className="bg-stone-50 text-stone-900 hover:bg-stone-200 rounded-none px-6 text-xs font-mono tracking-widest uppercase font-bold">
            Subscribe
          </Button>
        </div>
        <p className="text-xs font-mono tracking-widest text-stone-600 uppercase mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </section>

    </div>
  )
}
