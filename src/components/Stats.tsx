"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "12,000+", label: "Happy Travelers" },
  { value: "4.9", label: "Average Rating" },
  { value: "8,500+", label: "Cars Rented" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-[#0B2A3C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#E67E22] mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
