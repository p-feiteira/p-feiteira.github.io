"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Leaf, ShieldCheck } from "lucide-react"

export default function LinhaVivaObras() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-700 tracking-tighter">Linha Viva <span className="font-light text-zinc-400">| Developments</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
            <Link href="./linha-viva-listings" className="hover:text-teal-600">Property Listings</Link>
            <a href="#" className="text-teal-600">Portfolio</a>
            <a href="#" className="hover:text-teal-600">Sustainability</a>
          </div>
          <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">Request Brochure</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" /> Since 2008
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Shaping the <br/><span className="text-teal-600">skyline</span>.
            </h1>
            <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
              We design and build sustainable, luxury residential developments that harmonize with their surroundings and elevate modern living standards.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-none h-14 px-8">
                Explore Projects
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-6 text-zinc-600 hover:text-teal-700 group">
                Watch our story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative border border-zinc-200 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Building Architecture" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats/Values */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="md:pr-12 pt-8 md:pt-0">
            <Building2 className="h-8 w-8 text-teal-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-4xl font-bold mb-2">15+</h3>
            <p className="text-zinc-400">Completed developments across the metropolitan area</p>
          </div>
          <div className="md:px-12 pt-8 md:pt-0">
            <Leaf className="h-8 w-8 text-teal-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-4xl font-bold mb-2">A+</h3>
            <p className="text-zinc-400">Energy certification standard for all new projects</p>
          </div>
          <div className="md:pl-12 pt-8 md:pt-0">
            <ShieldCheck className="h-8 w-8 text-teal-500 mb-4 mx-auto md:mx-0" />
            <h3 className="text-4xl font-bold mb-2">10 Yr</h3>
            <p className="text-zinc-400">Structural warranty and premium after-sales support</p>
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Featured Developments</h2>
            <p className="text-zinc-600 text-lg">A curated selection of our most iconic residential projects, representing our commitment to architectural excellence.</p>
          </div>
        </div>

        <div className="space-y-24">
          {[
            { name: 'Oásis Residences', status: 'Under Construction', year: '2027', desc: 'A sustainable luxury condominium featuring vertical gardens and state-of-the-art smart home integration.' },
            { name: 'Horizonte Tower', status: 'Completed', year: '2025', desc: 'Premium waterfront apartments with panoramic ocean views and exclusive resident amenities.' },
            { name: 'Vila Verde', status: 'Sold Out', year: '2023', desc: 'A community of 12 eco-friendly townhouses designed for families seeking tranquility near the city center.' }
          ].map((proj, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-8 items-center group">
              <div className={`md:col-span-7 aspect-[16/9] bg-zinc-100 overflow-hidden relative ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={`https://images.unsplash.com/photo-${['1486406146926-c627a92ad1ab','1545324418-cc1a3fa10c00','1479839672679-a46483c0e7c8'][i % 3]}?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3`} alt={proj.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 ${proj.status === 'Completed' ? 'bg-zinc-900 text-white' : proj.status === 'Under Construction' ? 'bg-teal-100 text-teal-800' : 'bg-zinc-200 text-zinc-600'}`}>{proj.status}</span>
                  <span className="text-zinc-400 font-medium">{proj.year}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{proj.name}</h3>
                <p className="text-zinc-600 mb-8 text-lg">{proj.desc}</p>
                <Button variant="link" className="text-teal-700 p-0 h-auto text-lg group-hover:underline">View Case Study &rarr;</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}