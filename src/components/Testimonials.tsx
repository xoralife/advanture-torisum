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
    text: "Driving the Porsche through the French Riviera was a dream come true. The service was top-notch from start to finish. Highly recommend!",
    name: "Alex Rivera",
    role: "Solo Adventurer",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
  {
    text: "WanderLust made our honeymoon unforgettable. The attention to detail and customer service was exceptional. Five stars all the way!",
    name: "Priya Patel",
    role: "Honeymooner",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
  {
    text: "Best travel platform I've ever used. The car rental integration with flight booking saved us so much time and money.",
    name: "Marcus Johnson",
    role: "Digital Nomad",
    rating: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div className="flex gap-0.5 text-[#E67E22] text-sm mb-3">
      {Array.from({ length: full }, (_, i) => (
        <span key={`full-${i}`}>&#9733;</span>
      ))}
      {half && <span>&#9733;</span>}
      {Array.from({ length: 5 - Math.ceil(rating) }, (_, i) => (
        <span key={`empty-${i}`} className="text-[hsl(210,10%,80%)]">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-rotate mobile testimonials every 5 seconds
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
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>What Our Travelers Say</h2>
          <p>Real stories from real adventurers</p>
          <div className="underline" />
        </div>

        {/* Mobile: animated slider */}
        <div className="lg:hidden relative overflow-hidden max-w-md mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" as const }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_hsla(0,0%,0%,0.06)]"
            >
              <Stars rating={testimonials[active].rating} />
              <p className="text-sm text-[hsl(210,10%,40%)] italic leading-relaxed mb-5">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[active].img}
                  alt={testimonials[active].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#0B2A3C]">
                    {testimonials[active].name}
                  </h4>
                  <span className="text-xs text-[hsl(210,10%,50%)]">
                    {testimonials[active].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B2A3C] hover:bg-[#E67E22] hover:text-white transition-all"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B2A3C] hover:bg-[#E67E22] hover:text-white transition-all"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_hsla(0,0%,0%,0.06)] hover:shadow-[0_12px_40px_hsla(0,0%,0%,0.1)] transition-shadow"
            >
              <Stars rating={t.rating} />
              <p className="text-sm text-[hsl(210,10%,40%)] italic leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#0B2A3C]">{t.name}</h4>
                  <span className="text-xs text-[hsl(210,10%,50%)]">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
