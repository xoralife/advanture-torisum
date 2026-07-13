"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    price: "$899",
    tag: "Popular",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "City of Love",
    location: "Paris, France",
    price: "$1,299",
    tag: "Best Seller",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Desert Oasis",
    location: "Dubai, UAE",
    price: "$1,599",
    tag: "Luxury",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: "1000px" }}
      className={className}
    >
      <div
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>
            Popular <span className="highlight">Destinations</span>
          </h2>
          <p>Hand-picked gems waiting for your next adventure</p>
          <div className="underline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
            >
              <TiltCard className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_hsla(250,30%,10%,0.06)] hover:shadow-[0_20px_60px_hsla(170,80%,30%,0.15)] transition-shadow duration-500">
                  {/* Image container with clip reveal on hover */}
                  <div className="relative overflow-hidden h-60">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E1A]/40 to-transparent z-10" />

                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
                          dest.tag === "Popular"
                            ? "bg-[#0D9488] text-white"
                            : dest.tag === "Best Seller"
                            ? "bg-[#F59E0B] text-[#0F0E1A]"
                            : "bg-[#1A153A] text-white"
                        }`}
                      >
                        {dest.tag}
                      </span>
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-[#1A153A] font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                      {dest.price}
                    </div>

                    <motion.img
                      src={dest.img}
                      alt={dest.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#1A153A]">
                        {dest.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#1A153A]/50 flex items-center gap-1.5 mb-3">
                      <span>&#128205;</span> {dest.location}
                    </p>
                    <div className="flex items-center gap-1 text-[#F59E0B] text-sm mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s}>&#9733;</span>
                      ))}
                      <span className="text-[#1A153A]/40 text-xs ml-1">(4.9)</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2.5 rounded-xl border border-[#0D9488]/20 text-[#0D9488] text-sm font-semibold hover:bg-[#0D9488] hover:text-white transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
