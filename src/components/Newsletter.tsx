"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B]/[0.03] rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D9488]/10 to-[#F59E0B]/10 mb-6">
            <span className="text-2xl">&#9993;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A153A] mb-3">
            Stay <span className="bg-gradient-to-r from-[#0D9488] to-[#F59E0B] bg-clip-text text-transparent">Inspired</span>
          </h2>
          <p className="text-sm md:text-base text-[#1A153A]/50 mb-8 max-w-md mx-auto">
            Subscribe for exclusive travel deals, destination guides, and car
            rental discounts delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Subscribed! (Demo)"); }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-5 py-3.5 bg-[#FFF8F0] border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A]"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-[0_8px_25px_hsla(170,80%,30%,0.3)] transition-shadow"
            >
              Subscribe &#8594;
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
