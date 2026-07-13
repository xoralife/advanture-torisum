"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Facebook", icon: "f", href: "#" },
  { label: "Instagram", icon: "ig", href: "#" },
  { label: "Twitter", icon: "t", href: "#" },
  { label: "YouTube", icon: "yt", href: "#" },
];

const socialIcon = (label: string) => {
  switch (label) {
    case "Facebook": return "f";
    case "Instagram": return "ig";
    case "Twitter": return "t";
    case "YouTube": return "yt";
    default: return "?";
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0B2A3C] text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-extrabold text-white mb-3">
              <span className="text-[#E67E22] mr-1">&#9992;</span> WanderLust
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Your one-stop platform for tropical getaways, city breaks, and
              premium car rentals. We make travel effortless and unforgettable.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold hover:bg-[#E67E22] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {s.label === "Facebook" && "f"}
                  {s.label === "Instagram" && "ig"}
                  {s.label === "Twitter" && "t"}
                  {s.label === "YouTube" && "yt"}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["Home", "Destinations", "Car Rentals", "Testimonials"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-[#E67E22] transition-colors"
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              {["FAQ", "Privacy Policy", "Terms of Service", "Cancellation"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#E67E22] transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@wanderlust.com"
                  className="hover:text-[#E67E22] transition-colors flex items-center gap-2"
                >
                  &#9993; hello@wanderlust.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#E67E22] transition-colors flex items-center gap-2"
                >
                  &#128222; +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                &#128205; 123 Travel St, NY
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/60">
          &copy; {year}{" "}
          <span className="text-[#E67E22] font-semibold">WanderLust</span>. All
          rights reserved. Made with{" "}
          <span className="text-[#E67E22]">&#10084;</span> for explorers.
        </div>
      </div>
    </footer>
  );
}
