"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Floating decorative shapes
const shapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, color: "rgba(13,148,136,0.15)" },
  { size: 40, x: "85%", y: "15%", delay: 0.5, color: "rgba(245,158,11,0.12)" },
  { size: 80, x: "75%", y: "70%", delay: 1, color: "rgba(13,148,136,0.1)" },
  { size: 30, x: "20%", y: "75%", delay: 1.5, color: "rgba(255,255,255,0.08)" },
  { size: 50, x: "50%", y: "10%", delay: 0.8, color: "rgba(245,158,11,0.08)" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.35;
        bgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-[110%] h-[120%] -left-[5%]"
        style={{
          background: "linear-gradient(-45deg, #0F0E1A, #1A153A, #0D9488, #1A153A, #0F0E1A)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-[#0F0E1A]/30" />

      {/* Floating geometric shapes */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            background: s.color,
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          animate={{
            y: [0, -20, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}

      {/* Gradient orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #0D9488 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemScale} className="inline-flex mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              Premium Travel Experience
            </span>
          </motion.div>

          {/* Heading with gradient text */}
          <motion.h1
            variants={itemUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 text-white"
          >
            Explore the{" "}
            <span
              className="bg-gradient-to-r from-[#0D9488] via-[#F59E0B] to-[#0D9488] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "gradient-shift 4s ease infinite" }}
            >
              World
            </span>
            <br />
            <span className="text-white/90">With Us</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemUp}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Discover breathtaking destinations, rent premium cars, and create
            unforgettable memories — all in one seamless experience.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <span className="relative z-10 text-lg">&#8594;</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            <motion.a
              href="#destinations"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white px-6 py-4 rounded-2xl text-base font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              Explore Destinations
              <span>&#8595;</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          className="w-[2px] h-8 bg-gradient-to-b from-[#0D9488] to-transparent rounded-full"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
