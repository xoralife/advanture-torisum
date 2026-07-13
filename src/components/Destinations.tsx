"use client";

import { motion, type Variants } from "framer-motion";

const destinations = [
  {
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    price: "$899",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "City of Love",
    location: "Paris, France",
    price: "$1,299",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Desert Oasis",
    location: "Dubai, UAE",
    price: "$1,599",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>Popular Destinations</h2>
          <p>Hand-picked gems waiting for your next adventure</p>
          <div className="underline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_hsla(0,0%,0%,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_48px_hsla(0,0%,0%,0.12)] group cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={dest.img}
                  alt={dest.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#0B2A3C] mb-1">
                  {dest.title}
                </h3>
                <p className="text-sm text-[hsl(210,10%,50%)] mb-3 flex items-center gap-1.5">
                  <span className="text-[#E67E22]">&#128205;</span> {dest.location}
                </p>
                <p className="text-xl md:text-2xl font-bold text-[#E67E22]">
                  {dest.price}{" "}
                  <span className="text-sm font-normal text-[hsl(210,10%,50%)]">
                    / person
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
