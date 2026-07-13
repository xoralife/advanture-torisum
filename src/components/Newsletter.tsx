"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B2A3C] mb-3">
            Stay Inspired
          </h2>
          <p className="text-sm md:text-base text-[hsl(210,10%,50%)] mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive travel deals, destination
            guides, and car rental discounts.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed! (Demo)");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 border border-[hsl(210,15%,88%)] rounded-xl bg-[#F4F7FA] text-sm focus:outline-none focus:border-[#E67E22] focus:shadow-[0_0_0_3px_hsla(30,80%,52%,0.15)] transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-[0_6px_20px_hsla(30,80%,50%,0.3)]"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
