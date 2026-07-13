"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingWidget() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [carType, setCarType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking initiated! (Demo)");
  };

  return (
    <section id="booking" className="relative z-20 -mt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-[0_20px_60px_hsla(0,0%,0%,0.12)] p-6 md:p-8 flex flex-wrap items-end gap-4"
        >
          <Field label="&#128205; Destination">
            <input
              type="text"
              placeholder="e.g. Bali, Paris"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3.5 py-3 border border-[hsl(210,15%,88%)] rounded-xl bg-[#F4F7FA] text-sm focus:outline-none focus:border-[#E67E22] focus:shadow-[0_0_0_3px_hsla(30,80%,52%,0.15)] transition-all"
            />
          </Field>

          <Field label="&#128197; Check-in">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-3 border border-[hsl(210,15%,88%)] rounded-xl bg-[#F4F7FA] text-sm focus:outline-none focus:border-[#E67E22] focus:shadow-[0_0_0_3px_hsla(30,80%,52%,0.15)] transition-all"
            />
          </Field>

          <Field label="&#128197; Check-out">
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-3 border border-[hsl(210,15%,88%)] rounded-xl bg-[#F4F7FA] text-sm focus:outline-none focus:border-[#E67E22] focus:shadow-[0_0_0_3px_hsla(30,80%,52%,0.15)] transition-all"
            />
          </Field>

          <Field label="&#128663; Car Type">
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full px-3.5 py-3 border border-[hsl(210,15%,88%)] rounded-xl bg-[#F4F7FA] text-sm focus:outline-none focus:border-[#E67E22] focus:shadow-[0_0_0_3px_hsla(30,80%,52%,0.15)] transition-all appearance-none"
            >
              <option value="">No Car Needed</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="convertible">Convertible</option>
              <option value="van">Family Van</option>
            </select>
          </Field>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full md:w-auto bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_8px_25px_hsla(30,80%,50%,0.3)]"
          >
            <span>&#128269;</span> Search
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 min-w-[140px]">
      <label className="block text-xs font-semibold text-[#0B2A3C] uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
