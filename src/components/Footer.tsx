"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Facebook", icon: "f" },
  { label: "Instagram", icon: "ig" },
  { label: "Twitter", icon: "t" },
  { label: "YouTube", icon: "yt" },
];

const footerLinks = {
  quick: ["Home", "Destinations", "Car Rentals", "Testimonials"],
  support: ["FAQ", "Privacy Policy", "Terms of Service", "Cancellation"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0F0E1A] text-white/50 pt-16 pb-8 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D9488] via-[#F59E0B] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#F59E0B] flex items-center justify-center text-white text-lg font-bold">
                W
              </div>
              <span className="text-xl font-extrabold text-white">WanderLust</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your premium travel companion. Discover breathtaking destinations and
              luxury car rentals for unforgettable journeys.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-xs font-semibold text-white/40 hover:bg-gradient-to-br hover:from-[#0D9488] hover:to-[#F59E0B] hover:text-white transition-colors duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h4 className="text-sm font-semibold text-white/80 mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.quick.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white/80 mb-4 tracking-wide">Support</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.support.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold text-white/80 mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:hello@wanderlust.com" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#0D9488]">&#9993;</span> hello@wanderlust.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                  <span className="text-[#F59E0B]">&#128222;</span> +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0D9488]">&#128205;</span> 123 Travel St, NY
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 text-center text-xs text-white/30">
          &copy; {year} <span className="text-white/60">WanderLust</span>. Crafted with
          care for explorers everywhere.
        </div>
      </div>
    </footer>
  );
}
