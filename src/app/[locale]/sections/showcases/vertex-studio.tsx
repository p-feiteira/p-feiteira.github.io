"use client"

import { Button } from "@/components/ui/button"

export default function VertexStudio() {
  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Gym" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 to-purple-600/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
            Studio Vértex
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 uppercase tracking-widest font-light">
            Push Your Limits. Define Your Peak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-none uppercase tracking-wider font-bold h-14 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-none uppercase tracking-wider font-bold h-14 px-8">
              View Timetable
            </Button>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our Classes</h2>
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" className="uppercase tracking-widest text-xs">Strength</Button>
            <Button variant="ghost" className="uppercase tracking-widest text-xs">Cardio</Button>
            <Button variant="ghost" className="uppercase tracking-widest text-xs text-pink-500">All</Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'HIIT Burn', duration: '45 Min', level: 'Intense', bg: 'bg-zinc-900' },
            { name: 'Power Lift', duration: '60 Min', level: 'Advanced', bg: 'bg-zinc-800' },
            { name: 'Core Flow', duration: '45 Min', level: 'All Levels', bg: 'bg-zinc-900' },
            { name: 'Spin Rush', duration: '45 Min', level: 'Intense', bg: 'bg-zinc-800' },
            { name: 'Mobility', duration: '30 Min', level: 'Recovery', bg: 'bg-zinc-900' },
            { name: 'Box Fit', duration: '60 Min', level: 'Intense', bg: 'bg-zinc-800' },
          ].map((c, i) => (
            <div key={i} className={`group relative p-8 ${c.bg} border border-zinc-800 hover:border-pink-500/50 transition-colors cursor-pointer overflow-hidden`}>
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-2 w-2 rounded-full bg-pink-500" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">{c.name}</h3>
              <div className="flex gap-4 text-sm text-zinc-500 uppercase tracking-wider font-medium">
                <span>{c.duration}</span>
                <span>•</span>
                <span>{c.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timetable Mock */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-center mb-16">Weekly Schedule</h2>
          <div className="space-y-4">
            {['06:00 AM - HIIT Burn', '07:30 AM - Power Lift', '12:00 PM - Core Flow', '18:00 PM - Spin Rush', '19:30 PM - Box Fit'].map((slot, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <div className="text-xl font-bold uppercase tracking-wide">{slot}</div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4">
                  <div className="text-sm text-zinc-400 uppercase tracking-widest">Trainer: Alex</div>
                  <Button variant="outline" className="border-zinc-700 hover:border-pink-500 hover:text-pink-500 rounded-none uppercase text-xs tracking-widest">
                    Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}