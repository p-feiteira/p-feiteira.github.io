"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Bed, Bath, SquareMenu } from "lucide-react"
import Link from "next/link"

export default function LinhaVivaListings() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900 tracking-tighter">Linha Viva</div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="text-blue-600">Buy</a>
            <a href="#" className="hover:text-blue-600">Rent</a>
            <Link href="./linha-viva-obras" className="hover:text-blue-600">Our Developments</Link>
            <a href="#" className="hover:text-blue-600">Agents</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded">Contact Us</Button>
        </div>
      </nav>

      {/* Hero / Search */}
      <section className="bg-blue-900 py-16 px-4 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Luxury home" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Find your perfect home</h1>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">Explore premium real estate listings curated for modern living across the metropolitan area.</p>
          
          <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input placeholder="Location, Neighborhood, or Zip" className="pl-10 h-12 border-0 bg-slate-50 focus-visible:ring-0" />
            </div>
            <div className="w-full md:w-px h-[1px] md:h-12 bg-slate-200" />
            <div className="flex-1 flex gap-2">
              <select className="flex-1 h-12 bg-slate-50 border-0 rounded-md px-3 text-sm text-slate-600 outline-none">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
              <select className="flex-1 h-12 bg-slate-50 border-0 rounded-md px-3 text-sm text-slate-600 outline-none">
                <option>Price Range</option>
                <option>$500k - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M+</option>
              </select>
            </div>
            <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
            <p className="text-slate-500">Discover hand-picked premium listings</p>
          </div>
          <Button variant="link" className="text-blue-600 font-semibold hidden sm:flex">View all listings &rarr;</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { price: '€ 1,250,000', title: 'Modern Villa with Pool', location: 'Cascais', beds: 4, baths: 3, sqft: '350 m²' },
            { price: '€ 850,000', title: 'Luxury Downtown Apartment', location: 'Lisbon Center', beds: 2, baths: 2, sqft: '120 m²' },
            { price: '€ 2,100,000', title: 'Oceanfront Penthouse', location: 'Estoril', beds: 3, baths: 4, sqft: '280 m²' },
            { price: '€ 650,000', title: 'Renovated Historic Flat', location: 'Alfama', beds: 2, baths: 1, sqft: '95 m²' },
            { price: '€ 3,400,000', title: 'Contemporary Estate', location: 'Sintra', beds: 5, baths: 6, sqft: '600 m²' },
            { price: '€ 920,000', title: 'Family Home with Garden', location: 'Oeiras', beds: 3, baths: 2, sqft: '180 m²' }
          ].map((prop, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${['1600596542815-ffad4c1539a9','1512917774080-9991f1c4c750','1600585154340-be6161a56a0c','1486406146926-c627a92ad1ab','1545324418-cc1a3fa10c00','1479839672679-a46483c0e7c8'][i % 6]}?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3`} alt={prop.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">For Sale</div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-blue-900 mb-1">{prop.price}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{prop.title}</h3>
                <p className="text-slate-500 text-sm mb-4 flex items-center"><MapPin className="inline mr-1 h-3 w-3" />{prop.location}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 text-sm text-slate-600">
                  <span className="flex items-center"><Bed className="inline mr-1.5 h-4 w-4 text-slate-400" />{prop.beds}</span>
                  <span className="flex items-center"><Bath className="inline mr-1.5 h-4 w-4 text-slate-400" />{prop.baths}</span>
                  <span className="flex items-center"><SquareMenu className="inline mr-1.5 h-4 w-4 text-slate-400" />{prop.sqft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA cross-link */}
      <section className="bg-blue-50 py-20 px-4 text-center border-t border-blue-100">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Looking for new constructions?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Explore our portfolio of exclusive new developments, built with unparalleled quality and modern design.</p>
        <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white" asChild>
          <Link href="./linha-viva-obras">View Our Developments</Link>
        </Button>
      </section>
    </div>
  )
}