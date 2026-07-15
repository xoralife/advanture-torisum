"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cars, toSlug } from "@/data/cars";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`transition-transform duration-150 ease-out ${className}`}
    >
      {children}
    </button>
  );
}

export default function CarRental() {
  return (
    <section id="cars" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>
            Premium <span className="highlight">Car Fleet</span>
          </h2>
          <p>Luxury rides for every journey, priced per day</p>
          <div className="underline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.model}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group"
            >
              <Link href={`/cars/${toSlug(car.model)}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-300 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] transition-shadow duration-500"
                >
                {/* Image */}
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-900/5 to-slate-800/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10" />
                  <motion.img
                    src={car.img}
                    alt={car.model}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-800">
                      {car.model}
                    </h3>
                  </div>
                  <p className="text-sm text-indigo-500 font-medium mb-3">
                    &#128663; {car.type}
                  </p>

                  {/* Features */}
                  <div className="flex gap-3 mb-4">
                    {[
                      { icon: "&#128100;", label: `${car.seats} Seats` },
                      { icon: "&#128188;", label: `${car.bags} Bags` },
                      { icon: "&#9981;", label: car.fuel },
                    ].map((f) => (
                      <span
                        key={f.label}
                        className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg"
                      >
                        {f.icon} {f.label}
                      </span>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <div>
                      <span className="text-2xl font-bold text-slate-800">
                        ${car.price}
                      </span>
                      <span className="text-sm text-slate-500 ml-1">/day</span>
                    </div>
                    <MagneticButton className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] transition-shadow duration-300">
                      Book Now &#8594;
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

