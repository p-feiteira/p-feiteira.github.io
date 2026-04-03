"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Filter, ChevronDown } from "lucide-react"

export default function MeridianGoods() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-medium tracking-tight">Meridian Goods</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#" className="text-stone-900">New Arrivals</a>
            <a href="#" className="hover:text-stone-900">Apparel</a>
            <a href="#" className="hover:text-stone-900">Home</a>
            <a href="#" className="hover:text-stone-900">Accessories</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-stone-600">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-stone-200 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Interior" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 max-w-3xl leading-tight">
            Elevate your everyday with mindful essentials.
          </h1>
          <p className="text-lg text-stone-600 mb-8 max-w-xl">
            Discover our curated collection of sustainable goods, designed for the modern lifestyle.
          </p>
          <Button className="bg-stone-900 hover:bg-stone-800 text-white rounded-full px-8 h-12 text-sm font-medium">
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-stone-500 font-medium">Showing 24 products</div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="rounded-full border-stone-300">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="rounded-full border-stone-300">
              Sort by <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-y-12">
          {[
            { name: 'Organic Cotton Tee', price: '$45', category: 'Apparel' },
            { name: 'Ceramic Pour-Over', price: '$68', category: 'Home' },
            { name: 'Linen Throw Blanket', price: '$120', category: 'Home' },
            { name: 'Everyday Tote Bag', price: '$85', category: 'Accessories' },
            { name: 'Essential Glassware Set', price: '$55', category: 'Home' },
            { name: 'Minimalist Watch', price: '$145', category: 'Accessories' },
            { name: 'Bamboo Ribbed Towel', price: '$35', category: 'Home' },
            { name: 'Scented Soy Candle', price: '$28', category: 'Home' },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-stone-200 rounded-lg overflow-hidden mb-4 relative">
                <img src={`https://images.unsplash.com/photo-${['1523381210434-271e8be1f52b','1523275335684-37898b6baf30','1618331835717-801e976710b2','1611162616305-c69b3fa7fbe0','1559525839-b184a4d698c7','1587734195503-904fca47e0e9','1497935586351-b67a49e012bf','1616486338812-3dadae4b4ace'][i % 8]}?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm text-stone-500 mb-1">{product.category}</div>
              <div className="flex items-start justify-between">
                <h3 className="text-base font-medium text-stone-900">{product.name}</h3>
                <span className="text-base font-medium text-stone-900">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-900 text-stone-50 py-24 px-4 text-center">
        <h2 className="text-3xl font-serif mb-4">Join the Club</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">Subscribe for early access to new collections and exclusive events.</p>
        <div className="flex max-w-sm mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="flex-1 bg-stone-800 border-none rounded-full px-6 text-sm outline-none focus:ring-2 focus:ring-stone-500"
          />
          <Button className="bg-white text-stone-900 hover:bg-stone-200 rounded-full px-6">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  )
}