import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BookingStep = 'selection' | 'details' | 'success';

interface BookingState {
  step: BookingStep;
  serviceId: string | null;
  date: string | null;
  customerDetails: { name: string; email: string } | null;
  isSubmitting: boolean;
  
  setService: (id: string, date: string) => Promise<void>;
  submitDetails: (details: { name: string; email: string }) => Promise<void>;
  reset: () => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      step: 'selection',
      serviceId: null,
      date: null,
      customerDetails: null,
      isSubmitting: false,

      setService: async (id, date) => {
        set({ isSubmitting: true });
        // Simulated network latency
        await new Promise((resolve) => setTimeout(resolve, 800));
        set({ serviceId: id, date, step: 'details', isSubmitting: false });
      },

      submitDetails: async (details) => {
        set({ isSubmitting: true });
        // Simulated network latency for final booking
        await new Promise((resolve) => setTimeout(resolve, 1200));
        set({ customerDetails: details, step: 'success', isSubmitting: false });
      },

      reset: () => set({ 
        step: 'selection', 
        serviceId: null, 
        date: null, 
        customerDetails: null, 
        isSubmitting: false 
      }),
    }),
    {
      name: 'sereno-spa-booking-storage',
    }
  )
);