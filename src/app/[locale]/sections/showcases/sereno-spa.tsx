"use client"

import { Button } from "@/components/ui/button"
import { useBookingStore } from "../../../../lib/store/useBookingStore"
import { CheckCircle2, Clock, CalendarDays, User, ArrowLeft, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function SerenoSpa() {
  const { step, serviceId, date, isSubmitting, setService, submitDetails, reset } = useBookingStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-stone-100 text-stone-800 min-h-screen font-sans selection:bg-purple-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif text-purple-900">Sereno <span className="text-stone-400 font-light italic">Spa</span></div>
          <div className="text-sm font-medium text-stone-500">Therapeutic Massage</div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 md:py-24">
        {/* Booking Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
          
          {/* Progress Bar */}
          <div className="bg-stone-50 border-b border-stone-100 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${step === 'selection' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'}`}>1</div>
              <span className={`font-medium ${step === 'selection' ? 'text-purple-900' : 'text-stone-500'}`}>Select Service</span>
            </div>
            <div className="h-px bg-stone-200 flex-1 mx-4" />
            <div className="flex items-center gap-3">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${step === 'details' ? 'bg-purple-600 text-white' : step === 'success' ? 'bg-purple-100 text-purple-700' : 'bg-stone-200 text-stone-400'}`}>2</div>
              <span className={`font-medium ${step === 'details' ? 'text-purple-900' : 'text-stone-400'}`}>Your Details</span>
            </div>
            <div className="h-px bg-stone-200 flex-1 mx-4 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-3">
              <div className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${step === 'success' ? 'bg-purple-600 text-white' : 'bg-stone-200 text-stone-400'}`}>3</div>
              <span className={`font-medium ${step === 'success' ? 'text-purple-900' : 'text-stone-400'}`}>Confirmation</span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {step === 'selection' && <StepSelection onSelect={setService} isSubmitting={isSubmitting} />}
            {step === 'details' && <StepDetails onSubmit={submitDetails} onBack={reset} isSubmitting={isSubmitting} selectedService={serviceId} date={date} />}
            {step === 'success' && <StepSuccess onReset={reset} />}
          </div>
          
        </div>
      </main>
    </div>
  )
}

function StepSelection({ onSelect, isSubmitting }: { onSelect: (id: string, date: string) => void, isSubmitting: boolean }) {
  const [selected, setSelected] = useState<string | null>(null)
  
  const services = [
    { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 min', price: '$120', desc: 'Firm pressure focusing on deeper layers of muscle tissue.' },
    { id: 'swedish', name: 'Swedish Relaxation', duration: '90 min', price: '$160', desc: 'Gentle, flowing strokes for full-body relaxation.' },
    { id: 'sports', name: 'Sports Recovery', duration: '60 min', price: '$130', desc: 'Targeted therapy to prevent or treat sports injuries.' }
  ]

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-serif text-purple-900 mb-2">Choose a Service</h2>
      <p className="text-stone-500 mb-8">Select the therapy that best fits your needs today.</p>
      
      <div className="grid gap-4 mb-8">
        {services.map(s => (
          <div 
            key={s.id} 
            onClick={() => setSelected(s.id)}
            className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${selected === s.id ? 'border-purple-600 bg-purple-50' : 'border-stone-200 hover:border-purple-300'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-stone-900">{s.name}</h3>
              <span className="text-lg font-semibold text-purple-700">{s.price}</span>
            </div>
            <p className="text-stone-600 mb-4">{s.desc}</p>
            <div className="flex items-center text-sm text-stone-500 font-medium">
              <Clock className="h-4 w-4 mr-2" /> {s.duration}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-6 border-t border-stone-100">
        <Button 
          size="lg" 
          disabled={!selected || isSubmitting} 
          onClick={() => onSelect(selected!, new Date(Date.now() + 86400000 * 2).toISOString())} // Dummy date: tomorrow
          className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-8"
        >
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Checking slots...</> : 'Continue to Details'}
        </Button>
      </div>
    </div>
  )
}

interface StepDetailsProps {
  onSubmit: (details: { name: string; email: string }) => void;
  onBack: () => void;
  isSubmitting: boolean;
  selectedService: string | null;
  date: string | null;
}
function StepDetails({ onSubmit, onBack, isSubmitting, selectedService, date }: StepDetailsProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-serif text-purple-900 mb-2">Your Details</h2>
          <p className="text-stone-500">Almost there. Who is this booking for?</p>
        </div>
        <Button variant="ghost" onClick={onBack} disabled={isSubmitting} className="text-stone-500">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              placeholder="Jane Doe" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              placeholder="jane@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number (optional)</label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              placeholder="+1 (555) 000-0000" 
            />
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 h-fit">
          <h4 className="font-serif text-lg text-stone-900 mb-4 border-b border-stone-200 pb-2">Booking Summary</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-0.5 text-purple-600"><User className="h-5 w-5" /></div>
              <div>
                <div className="font-medium text-stone-900 capitalize">{selectedService?.replace('-', ' ')}</div>
                <div className="text-sm text-stone-500">Duration: 60-90 min</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 text-purple-600"><CalendarDays className="h-5 w-5" /></div>
              <div>
                <div className="font-medium text-stone-900">{date ? new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}</div>
                <div className="text-sm text-stone-500">at 10:00 AM</div>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-8 bg-purple-900 hover:bg-purple-800 text-white rounded-full py-6 text-lg"
            disabled={!formData.name || !formData.email || isSubmitting}
            onClick={() => onSubmit(formData)}
          >
            {isSubmitting ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Confirming...</> : 'Confirm Booking'}
          </Button>
        </div>
      </div>
    </div>
  )
}

function StepSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-12 text-center animate-in zoom-in-95 duration-500">
      <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="text-4xl font-serif text-purple-900 mb-4">Booking Confirmed!</h2>
      <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
        Your appointment has been successfully scheduled. We&apos;ve sent a confirmation email with details.
      </p>
      
      <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 max-w-sm mx-auto mb-10 text-left">
        <div className="text-sm text-stone-500 mb-1">Confirmation Code</div>
        <div className="text-2xl font-mono text-stone-900 font-bold tracking-widest">SER-{Math.floor(Math.random() * 9000) + 1000}</div>
      </div>

      <Button variant="outline" onClick={onReset} className="border-purple-200 text-purple-800 hover:bg-purple-50 rounded-full">
        Book Another Session
      </Button>
    </div>
  )
}