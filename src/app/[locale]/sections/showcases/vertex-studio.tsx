"use client"

import { Button } from "@/components/ui/button"
import { Zap, Dumbbell, Wind, Bike, PersonStanding, Target, Quote, Mail } from "lucide-react"
import Image from "next/image"

const CLASSES = [
  { name: 'HIIT Burn', duration: '45 MIN', level: 'INTENSE', intensity: 95, icon: Zap },
  { name: 'Power Lift', duration: '60 MIN', level: 'ADVANCED', intensity: 85, icon: Dumbbell },
  { name: 'Core Flow', duration: '45 MIN', level: 'ALL LEVELS', intensity: 60, icon: Wind },
  { name: 'Spin Rush', duration: '45 MIN', level: 'INTENSE', intensity: 90, icon: Bike },
  { name: 'Mobility', duration: '30 MIN', level: 'RECOVERY', intensity: 30, icon: PersonStanding },
  { name: 'Box Fit', duration: '60 MIN', level: 'INTENSE', intensity: 80, icon: Target },
]

const COACHES = [
  { name: 'Alex Ferreira', discipline: 'Strength & Conditioning', handle: '@alexftraining', photo: 'photo-1534438327276-14e5300c3a48' },
  { name: 'Mariana Costa', discipline: 'HIIT & Cardio', handle: '@mari.moves', photo: 'photo-1571019613454-1cb2f99b2d8b' },
  { name: 'Diogo Pinto', discipline: 'Mobility & Recovery', handle: '@diogopinto.fit', photo: 'photo-1534438327276-14e5300c3a48' },
  { name: 'Sara Mendes', discipline: 'Boxing & HIIT', handle: '@sara.box', photo: 'photo-1571019613454-1cb2f99b2d8b' },
]

const SCHEDULE = [
  { time: '06:00 AM', name: 'HIIT BURN', trainer: 'Alex Ferreira', spots: 4 },
  { time: '07:30 AM', name: 'POWER LIFT', trainer: 'Diogo Pinto', spots: 7 },
  { time: '12:00 PM', name: 'CORE FLOW', trainer: 'Mariana Costa', spots: 8 },
  { time: '18:00 PM', name: 'SPIN RUSH', trainer: 'Alex Ferreira', spots: 3 },
  { time: '19:30 PM', name: 'BOX FIT', trainer: 'Sara Mendes', spots: 5 },
]

export default function VertexStudio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-50">

      {/* Hero */}
      <section className="relative h-[80dvh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Gym"
          fill
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 to-purple-600/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="relative z-10 max-w-4xl px-4 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-6xl md:text-8xl">
            Studio Vértex
          </h1>
          <p className="mb-10 text-lg font-light uppercase tracking-[0.2em] text-zinc-400 sm:text-xl md:text-2xl">
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

      {/* Stats Strip */}
      <div className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: '2,400+', label: 'MEMBERS' },
            { value: '30+', label: 'WEEKLY CLASSES' },
            { value: '12', label: 'COACHES' },
            { value: 'EST. 2016', label: 'FOUNDED' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-10 px-6 border-t-2 border-pink-500 border-r border-zinc-800 last:border-r-0">
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-50">{stat.value}</span>
              <span className="text-xs tracking-widest text-zinc-500 uppercase mt-1 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            OUR <span className="text-pink-500">CLASSES</span>
          </h2>
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" className="uppercase tracking-widest text-xs text-zinc-400 hover:text-pink-500 rounded-none">Strength</Button>
            <Button variant="ghost" className="uppercase tracking-widest text-xs text-zinc-400 hover:text-pink-500 rounded-none">Cardio</Button>
            <Button variant="ghost" className="uppercase tracking-widest text-xs text-pink-500 rounded-none">All</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
          {CLASSES.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="group relative p-8 bg-zinc-950 hover:bg-zinc-900 transition-colors cursor-pointer overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-pink-500 transition-all duration-500" />
                <Icon className="h-8 w-8 text-zinc-700 group-hover:text-pink-500 transition-colors mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{c.name}</h3>
                <div className="flex gap-3 text-xs text-zinc-500 uppercase tracking-widest font-medium mb-6">
                  <span>{c.duration}</span>
                  <span>·</span>
                  <span>{c.level}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                    <span className="text-zinc-500">Intensity</span>
                    <span className="text-pink-500 font-bold">{c.intensity}%</span>
                  </div>
                  <div className="h-px bg-zinc-800 w-full relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-pink-500 w-0 group-hover:transition-all group-hover:duration-700"
                      style={{ width: `${c.intensity}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* The Coaches */}
      <section className="py-24 bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs tracking-widest text-pink-500 uppercase font-bold mb-4">— Our Team</div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
              THE<br /><span className="text-pink-500">COACHES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900">
            {COACHES.map((coach, i) => (
              <div key={i} className="group flex gap-0 bg-black hover:bg-zinc-950 transition-colors overflow-hidden">
                <div className="w-1 bg-zinc-800 group-hover:bg-pink-500 transition-colors shrink-0" />
                <div className="flex gap-4 p-6 w-full">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden bg-zinc-900">
                    <Image
                      src={`https://images.unsplash.com/${coach.photo}?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3`}
                      alt={coach.name}
                      fill
                      sizes="80px"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-black uppercase tracking-tight text-lg leading-none">{coach.name}</span>
                    <span className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">{coach.discipline}</span>
                    <span className="text-xs text-pink-500 mt-1 font-medium">{coach.handle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="text-xs tracking-widest text-pink-500 uppercase font-bold mb-4">— Pricing</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              CHOOSE YOUR <span className="text-pink-500">PLAN</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-2 border-zinc-800">
            {/* Drop-In */}
            <div className="border-r border-zinc-800 p-8 flex flex-col">
              <div className="text-xs tracking-widest text-zinc-500 uppercase font-bold mb-6">Drop-In</div>
              <div className="mb-1">
                <span className="text-5xl font-black tracking-tighter">€15</span>
                <span className="text-zinc-500 text-sm ml-1 uppercase tracking-wide">/ session</span>
              </div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-8">No commitment required</p>
              <ul className="space-y-3 mb-10 flex-1">
                {['Access to single class', 'No commitment', 'Locker included'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <div className="w-px h-3 bg-zinc-700" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-none border-zinc-700 hover:border-pink-500 hover:text-pink-500 uppercase tracking-widest text-xs font-bold h-12">
                Book a Session
              </Button>
            </div>

            {/* Unlimited (Featured) */}
            <div className="border-r border-pink-500/30 p-8 flex flex-col bg-pink-950/20 border-2 border-pink-500 -m-px z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-widest text-pink-400 uppercase font-bold">Unlimited</span>
                <span className="text-xs bg-pink-500 text-white px-2 py-0.5 uppercase tracking-widest font-bold">Most Popular</span>
              </div>
              <div className="mb-1">
                <span className="text-5xl font-black tracking-tighter text-pink-400">€79</span>
                <span className="text-zinc-400 text-sm ml-1 uppercase tracking-wide">/ month</span>
              </div>
              <p className="text-xs text-pink-600 uppercase tracking-widest mb-8">Best value</p>
              <ul className="space-y-3 mb-10 flex-1">
                {['Unlimited classes', 'Priority booking', 'Guest pass x2'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-px h-3 bg-pink-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="rounded-none bg-pink-600 hover:bg-pink-700 text-white uppercase tracking-widest text-xs font-bold h-12">
                Start Free Trial
              </Button>
            </div>

            {/* Elite */}
            <div className="p-8 flex flex-col">
              <div className="text-xs tracking-widest text-zinc-500 uppercase font-bold mb-6">Elite</div>
              <div className="mb-1">
                <span className="text-5xl font-black tracking-tighter">€129</span>
                <span className="text-zinc-500 text-sm ml-1 uppercase tracking-wide">/ month</span>
              </div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-8">Full access</p>
              <ul className="space-y-3 mb-10 flex-1">
                {['All Unlimited benefits', 'Personal trainer (1×/mo)', 'Nutrition consult', 'Towel service'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-400">
                    <div className="w-px h-3 bg-zinc-700" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-none border-zinc-700 hover:border-pink-500 hover:text-pink-500 uppercase tracking-widest text-xs font-bold h-12">
                Go Elite
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-24 bg-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="text-xs tracking-widest text-pink-500 uppercase font-bold mb-4">— This Week</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              WEEKLY <span className="text-pink-500">SCHEDULE</span>
            </h2>
          </div>
          <div className="space-y-0 border-t border-zinc-800">
            {SCHEDULE.map((slot, i) => (
              <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors pl-4 border-l-2 border-l-transparent hover:border-l-pink-500">
                <div className="flex items-center gap-6">
                  <span className="text-xs text-zinc-600 font-mono w-20 shrink-0">{slot.time}</span>
                  <span className="text-xl font-black uppercase tracking-tight">{slot.name}</span>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4 pl-26 sm:pl-0">
                  <span className="text-sm text-zinc-500 uppercase tracking-widest">{slot.trainer}</span>
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 uppercase tracking-widest font-bold">
                    {slot.spots} SPOTS
                  </span>
                  <Button variant="outline" className="border-zinc-700 hover:border-pink-500 hover:text-pink-500 rounded-none uppercase text-xs tracking-widest h-8 px-4">
                    Book
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Quote className="h-12 w-12 text-pink-500/30 mb-8" />
          <blockquote className="font-serif text-3xl md:text-5xl text-zinc-100 leading-tight mb-10 italic">
            &ldquo;I&apos;ve trained at 6 different gyms. None of them come close.&rdquo;
          </blockquote>
          <cite className="text-sm text-zinc-500 uppercase tracking-widest font-medium not-italic">
            — Ricardo M., Member since 2021
          </cite>
        </div>
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[280px] leading-none font-black text-pink-500/5 select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-pink-600 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-10">
            START YOUR<br />TRIAL TODAY.
          </h2>
          <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto mb-6">
            <div className="flex items-center bg-white flex-1">
              <Mail className="h-5 w-5 text-zinc-400 ml-4 shrink-0" />
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent px-4 py-4 text-sm text-zinc-900 placeholder-zinc-400 uppercase tracking-widest outline-none font-bold"
              />
            </div>
            <button className="bg-black text-white px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-zinc-900 transition-colors">
              CLAIM IT
            </button>
          </div>
          <p className="text-sm text-pink-200 uppercase tracking-widest font-medium">
            No contracts. Cancel anytime.
          </p>
        </div>
      </section>

    </div>
  )
}
