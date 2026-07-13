"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Car Rentals", href: "#cars" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_hsla(0,0%,0%,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl md:text-2xl font-extrabold">
          <span className="text-[#E67E22] text-2xl">&#9992;</span>
          <span className={scrolled ? "text-[#0B2A3C]" : "text-white"}>
            WanderLust
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#E67E22] after:transition-all after:duration-300 hover:after:w-full after:w-0 ${
                scrolled ? "text-[#1A2A3A] hover:text-[#E67E22]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_hsla(30,80%,50%,0.3)]">
            <span className="mr-1">&#128100;</span> Sign Up / Login
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-none border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-[3px] rounded transition-all duration-300 ${
              scrolled ? "bg-[#1A2A3A]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
          />
          <span
            className={`block w-7 h-[3px] rounded transition-all duration-300 ${
              scrolled ? "bg-[#1A2A3A]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-7 h-[3px] rounded transition-all duration-300 ${
              scrolled ? "bg-[#1A2A3A]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-[280px] bg-[#0B2A3C] p-8 pt-24 flex flex-col gap-6 shadow-[-5px_0_30px_hsla(0,0%,0%,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={closeMenu}
                  className="text-white/90 hover:text-[#E67E22] text-lg font-medium transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#E67E22] text-white px-5 py-3 rounded-full font-semibold mt-4"
                onClick={closeMenu}
              >
                Sign Up / Login
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
