"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "12K+", label: "Happy Travelers" },
  { value: "4.9", label: "Avg Rating" },
  { value: "8.5K+", label: "Cars Rented" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-[#0F0E1A] relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0D9488]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-[#0D9488] to-[#F59E0B] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/40 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
