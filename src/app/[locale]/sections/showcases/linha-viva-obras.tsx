"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Leaf, ShieldCheck, TrendingUp, MapPin, Home, Mail } from "lucide-react"

const projects = [
  {
    id: 'P.01',
    name: 'Oásis Residences',
    location: 'Cascais',
    typology: 'Residential Condominium',
    status: 'Under Construction',
    year: '2027',
    units: 48,
    desc: 'A sustainable luxury condominium featuring vertical gardens and state-of-the-art smart home integration.',
    photo: '1486406146926-c627a92ad1ab',
  },
  {
    id: 'P.02',
    name: 'Horizonte Tower',
    location: 'Lisboa',
    typology: 'Waterfront Apartments',
    status: 'Completed',
    year: '2025',
    units: 120,
    desc: 'Premium waterfront apartments with panoramic ocean views and exclusive resident amenities.',
    photo: '1545324418-cc1a3fa10c00',
  },
  {
    id: 'P.03',
    name: 'Vila Verde',
    location: 'Sintra',
    typology: 'Eco Townhouses',
    status: 'Sold Out',
    year: '2023',
    units: 12,
    desc: 'A community of 12 eco-friendly townhouses designed for families seeking tranquility near the city center.',
    photo: '1479839672679-a46483c0e7c8',
  },
]

const awards = [
  { label: 'IHRU Excellence Award', year: '2024' },
  { label: 'A+ Energy Certification', year: 'All Projects' },
  { label: 'Green Building Council Portugal', year: 'Member' },
  { label: 'BPI Real Estate Award', year: '2023' },
  { label: 'EcoXXI Sustainability Label', year: '2022' },
]

const process = [
  { num: '01', title: 'VISION', desc: 'Site analysis, feasibility, client brief' },
  { num: '02', title: 'DESIGN', desc: 'Architecture, interiors, landscaping' },
  { num: '03', title: 'BUILD', desc: 'Premium construction, material sourcing' },
  { num: '04', title: 'DELIVER', desc: 'Quality inspection, after-sales care' },
]

export default function LinhaVivaObras() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen">

      {/* Meta strip */}
      <div className="bg-teal-50 border-b border-teal-100 py-2 text-center">
        <p className="text-xs font-mono tracking-widest text-teal-700 uppercase">
          EST. 2008&nbsp;&nbsp;·&nbsp;&nbsp;LISBOA&nbsp;&nbsp;·&nbsp;&nbsp;15 COMPLETED PROJECTS&nbsp;&nbsp;·&nbsp;&nbsp;A+ CERTIFIED
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-teal-700 tracking-tight">
            Linha Viva <span className="font-light text-zinc-400">| Developments</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <Link href="./linha-viva-listings" className="hover:text-teal-600 transition-colors">Property Listings</Link>
            <a href="#" className="text-teal-600 border-b border-teal-400 pb-0.5">Portfolio</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Sustainability</a>
          </div>
          <Button variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50 rounded-none text-xs font-mono tracking-widest uppercase">
            Request Brochure
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-4">
              P. Feiteira Desenvolvimento Imobiliário
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium mb-8">
              <Building2 className="h-4 w-4" /> Since 2008
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold tracking-tight text-zinc-900 mb-8 leading-[1.0]">
              Shaping the <br /><span className="text-teal-600">skyline</span>.
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed">
              We design and build sustainable, luxury residential developments that harmonize with their surroundings and elevate modern living standards.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-teal-700 hover:bg-teal-800 text-white rounded-none h-14 px-8 text-sm tracking-wide">
                Explore Projects
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-6 text-zinc-500 hover:text-teal-700 group text-sm">
                Watch our story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="aspect-square overflow-hidden relative border border-zinc-100 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Building Architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-teal-900/10 to-transparent" />
            {/* Decorative corner detail */}
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-teal-400 opacity-60" />
          </div>
        </div>
      </section>

      <hr className="border-teal-100 max-w-7xl mx-auto px-4" />

      {/* Stats band */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="px-8 py-10 md:py-0 flex flex-col gap-4 md:pr-12">
            <Building2 className="h-7 w-7 text-teal-500" />
            <div>
              <div className="text-4xl font-serif font-bold mb-1">15+</div>
              <p className="text-zinc-400 text-sm leading-snug">Completed developments across the metropolitan area</p>
            </div>
          </div>
          <div className="px-8 py-10 md:py-0 flex flex-col gap-4 md:px-12">
            <Leaf className="h-7 w-7 text-teal-500" />
            <div>
              <div className="text-4xl font-serif font-bold mb-1">A+</div>
              <p className="text-zinc-400 text-sm leading-snug">Energy certification standard for all new projects</p>
            </div>
          </div>
          <div className="px-8 py-10 md:py-0 flex flex-col gap-4 md:px-12">
            <ShieldCheck className="h-7 w-7 text-teal-500" />
            <div>
              <div className="text-4xl font-serif font-bold mb-1">10 Yr</div>
              <p className="text-zinc-400 text-sm leading-snug">Structural warranty and premium after-sales support</p>
            </div>
          </div>
          <div className="px-8 py-10 md:py-0 flex flex-col gap-4 md:pl-12">
            <TrendingUp className="h-7 w-7 text-teal-500" />
            <div>
              <div className="text-4xl font-serif font-bold mb-1">€420M</div>
              <p className="text-zinc-400 text-sm leading-snug">Total investment value across all projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-4">How we work</p>
          <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-16">From vision to completion.</h2>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Connecting dashed line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-teal-100 z-0" />

            {process.map((step) => (
              <div key={step.num} className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center mb-6 border-4 border-white shadow-md">
                  <span className="text-white font-mono font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="font-mono text-sm font-bold tracking-widest text-zinc-900 uppercase mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-3">Our work</p>
            <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Featured Developments</h2>
            <p className="text-zinc-500 text-lg max-w-xl">A curated selection of our most iconic residential projects, representing our commitment to architectural excellence.</p>
          </div>
        </div>

        <div className="space-y-28">
          {projects.map((proj, i) => (
            <div key={proj.id} className="grid md:grid-cols-12 gap-8 items-center group">
              {/* Image */}
              <div className={`md:col-span-7 aspect-[16/9] overflow-hidden relative ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img
                  src={`https://images.unsplash.com/photo-${proj.photo}?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3`}
                  alt={proj.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
              </div>

              {/* Text */}
              <div className="md:col-span-5">
                <p className="text-xs font-mono text-teal-600 tracking-widest mb-2">{proj.id}</p>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 font-mono ${
                    proj.status === 'Completed' ? 'bg-zinc-900 text-white' :
                    proj.status === 'Under Construction' ? 'bg-teal-100 text-teal-800' :
                    'bg-zinc-200 text-zinc-600'
                  }`}>
                    {proj.status}
                  </span>
                  <span className="text-zinc-400 font-mono text-sm">{proj.year}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2 text-zinc-900">{proj.name}</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 tracking-wider mb-6">
                  <MapPin className="h-3 w-3" />
                  <span>{proj.location} · {proj.typology}</span>
                </div>
                <p className="text-zinc-500 mb-6 leading-relaxed">{proj.desc}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8">
                  <Home className="h-3 w-3" />
                  <span>{proj.units} residential units</span>
                </div>
                <Button variant="link" className="text-teal-700 p-0 h-auto text-base group-hover:underline font-medium">
                  View Case Study &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="border-t border-zinc-100 py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-12 text-center">Recognition</p>
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
            {awards.map((award) => (
              <div key={award.label} className="flex-1 px-6 py-6 sm:py-0 text-center">
                <p className="text-xs font-mono tracking-wider text-zinc-800 uppercase mb-1">{award.label}</p>
                <p className="text-xs font-mono text-zinc-400">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Quote */}
      <section className="bg-stone-50 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-8">
            <span className="text-teal-700 font-bold font-mono text-lg">JL</span>
          </div>
          <blockquote>
            <p className="text-2xl md:text-3xl font-serif text-zinc-900 leading-snug italic mb-8">
              &ldquo;We don&apos;t build units. We build places that people are proud to call home — for generations.&rdquo;
            </p>
            <footer>
              <p className="font-semibold text-zinc-800">João Linha</p>
              <p className="text-sm text-zinc-400 font-mono tracking-wide">Founder &amp; Principal Architect</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
          {/* Col 1 — brand */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-3">Linha Viva</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Shaping the skyline of Portugal — one exceptional development at a time.
            </p>
          </div>

          {/* Col 2 — office */}
          <div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-5">Office</p>
            <address className="not-italic text-sm text-zinc-300 space-y-2 leading-relaxed">
              <p>Av. da Liberdade 180, Lisboa</p>
              <p>T: +351 21 000 0000</p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-teal-500" />
                <a href="mailto:info@linhavivaobras.pt" className="hover:text-teal-400 transition-colors">
                  info@linhavivaobras.pt
                </a>
              </p>
            </address>
          </div>

          {/* Col 3 — newsletter */}
          <div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-5">Newsletter</p>
            <p className="text-sm text-zinc-400 mb-4">Get market insights and launch announcements.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-10 bg-zinc-800 border border-zinc-700 rounded-none px-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-teal-500"
              />
              <Button className="bg-teal-600 hover:bg-teal-500 text-white rounded-none h-10 px-5 text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 py-6 px-4 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            © 2026 Linha Viva Desenvolvimento Imobiliário. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}
