"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay — ::before approach, no rgb/rgba */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A3C] via-[#0B2A3C]/80 to-transparent opacity-75 z-[1]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4"
        >
          Explore the <span className="text-[#E67E22]">World</span> with Us
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8"
        >
          Discover breathtaking destinations, rent premium cars, and create
          unforgettable memories — all in one place.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#booking"
          className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-7 py-3.5 md:px-9 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_hsla(30,80%,50%,0.35)]"
        >
          <span>&#9992;</span> Start Booking
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 text-xs"
      >
        <span>Scroll to explore</span>
        <motion.span
          className="text-lg text-[#E67E22]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          &#8595;
        </motion.span>
      </motion.div>
    </section>
  );
}
