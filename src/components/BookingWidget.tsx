"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function BookingWidget() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [carType, setCarType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="relative z-20 -mt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_30px_80px_hsla(250,30%,10%,0.15)] p-6 md:p-8 lg:p-10"
          >
            {/* Gradient border accent */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0D9488] via-[#F59E0B] to-[#0D9488] rounded-t-3xl" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <Field label="Destination" icon="&#127758;">
                <input
                  type="text"
                  placeholder="e.g. Bali, Paris"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#FFF8F0]/50 border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A] placeholder:text-[#1A153A]/30"
                />
              </Field>

              <Field label="Check-in" icon="&#128197;">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#FFF8F0]/50 border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A]"
                />
              </Field>

              <Field label="Check-out" icon="&#128197;">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#FFF8F0]/50 border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A]"
                />
              </Field>

              <Field label="Car Type" icon="&#128663;">
                <select
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#FFF8F0]/50 border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A] appearance-none"
                >
                  <option value="">No Car</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="convertible">Convertible</option>
                  <option value="van">Family Van</option>
                </select>
              </Field>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative w-full bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-[0_8px_30px_hsla(170,80%,30%,0.3)] transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>&#10003; Searching...</>
                  ) : (
                    <>
                      <span>&#128269;</span> Search
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#1A153A]/60 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
        <span>{icon}</span> {label}
      </label>
      {children}
    </div>
  );
}
