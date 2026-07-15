"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hotels", href: "/hotels" },
  { label: "Cars", href: "/cars" },
  { label: "Featured", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0E1A]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#F59E0B] flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-[0_0_25px_hsla(170,80%,40%,0.4)] transition-shadow duration-300">
            W
          </div>
          <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}>
            WanderLust
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg transition-colors duration-200 group block"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-[#0D9488] to-[#F59E0B] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-[0_8px_30px_hsla(170,80%,40%,0.35)] transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer bg-white/5 rounded-lg border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${
                menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" : ""
              } ${menuOpen && i === 1 ? "opacity-0" : ""} ${
                menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F0E1A]/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute top-0 right-0 h-full w-[300px] bg-[#0F0E1A] border-l border-white/5 p-10 pt-28 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium text-white/70 hover:text-white py-2 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white py-3.5 rounded-xl font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
