"use client";

import { motion } from "framer-motion";

const stats = [
  { id: "destinations", value: "500+", label: "Destinations" },
  { id: "travelers", value: "12K+", label: "Happy Travelers" },
  { id: "rating", value: "4.9", label: "Avg Rating" },
  { id: "cars", value: "8.5K+", label: "Cars Rented" },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-[#0F0E1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1A153A]/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-[#0D9488] via-[#F59E0B] to-[#0D9488] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/50 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
