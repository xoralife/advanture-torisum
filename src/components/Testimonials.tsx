"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Absolutely incredible experience. The booking was seamless, the car was pristine, and the destination exceeded every expectation. I'll definitely book again!",
    name: "James Mitchell",
    role: "Business Traveler",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
  {
    text: "Our family trip to Bali was magical! The rental SUV was perfect for exploring the island. Thank you WanderLust for making it so easy and affordable.",
    name: "Sarah Chen",
    role: "Family Traveler",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
  {
    text: "Driving the Porsche through the French Riviera was a dream come true. The service was top-notch from start to finish. Highly recommend the convertible upgrade!",
    name: "Alex Rivera",
    role: "Solo Adventurer",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[#F59E0B] text-sm mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.3 }}
          className={i < Math.floor(rating) ? "text-[#F59E0B]" : "text-[#1A153A]/10"}
        >
          &#9733;
        </motion.span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>
            What <span className="highlight">Travelers Say</span>
          </h2>
          <p>Real stories from real adventurers</p>
          <div className="underline" />
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_hsla(250,30%,10%,0.06)] p-8">
            {/* Decorative quote */}
            <div className="absolute top-4 right-6 text-6xl font-serif text-[#0D9488]/5 leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" as const }}
              >
                <Stars rating={testimonials[active].rating} />
                <p className="text-sm text-[#1A153A]/70 italic leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[active].img}
                    alt={testimonials[active].name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#0D9488]/20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A153A]">
                      {testimonials[active].name}
                    </h4>
                    <span className="text-xs text-[#1A153A]/40">
                      {testimonials[active].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-gradient-to-r from-[#0D9488] to-[#F59E0B]"
                      : "w-1.5 bg-[#1A153A]/10"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-[#1A153A]/5 flex items-center justify-center text-sm text-[#1A153A]/50 hover:bg-[#0D9488] hover:text-white transition-all"
                aria-label="Previous"
              >
                &#8592;
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-[#1A153A]/5 flex items-center justify-center text-sm text-[#1A153A]/50 hover:bg-[#0D9488] hover:text-white transition-all"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_hsla(250,30%,10%,0.06)] hover:shadow-[0_20px_60px_hsla(250,30%,10%,0.1)] transition-shadow"
            >
              <div className="absolute top-4 right-6 text-6xl font-serif text-[#0D9488]/5 leading-none select-none">
                &ldquo;
              </div>
              <Stars rating={t.rating} />
              <p className="text-sm text-[#1A153A]/70 italic leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#0D9488]/20"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#1A153A]">{t.name}</h4>
                  <span className="text-xs text-[#1A153A]/40">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
