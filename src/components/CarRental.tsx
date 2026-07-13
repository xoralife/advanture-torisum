"use client";

import { motion, type Variants } from "framer-motion";

const cars = [
  {
    model: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    price: "$120",
    seats: 5,
    bags: 3,
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    model: "Range Rover Sport",
    type: "Luxury SUV",
    price: "$150",
    seats: 7,
    bags: 5,
    fuel: "Diesel",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    model: "Porsche 911 Carrera",
    type: "Sports Car",
    price: "$200",
    seats: 4,
    bags: 2,
    fuel: "Petrol",
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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

export default function CarRental() {
  return (
    <section id="cars" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-heading">
          <h2>Our Car Rental Fleet</h2>
          <p>Premium rides for every journey</p>
          <div className="underline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.model}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden border border-[hsl(210,15%,92%)] shadow-[0_4px_20px_hsla(0,0%,0%,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_48px_hsla(0,0%,0%,0.12)] group cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={car.img}
                  alt={car.model}
                  loading="lazy"
                  className="w-full h-52 object-cover bg-[#F4F7FA] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#0B2A3C] mb-1">
                  {car.model}
                </h3>
                <p className="text-sm text-[hsl(210,10%,50%)] mb-3 flex items-center gap-1.5">
                  <span className="text-[#E67E22] w-4">&#128663;</span> {car.type}
                </p>
                <div className="flex gap-4 mb-4 text-xs text-[hsl(210,10%,45%)]">
                  <span>&#128100; {car.seats} Seats</span>
                  <span>&#128188; {car.bags} Bags</span>
                  <span>&#9981; {car.fuel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl md:text-2xl font-bold text-[#E67E22]">
                    {car.price}{" "}
                    <span className="text-sm font-normal text-[hsl(210,10%,50%)]">
                      / day
                    </span>
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-[0_6px_20px_hsla(30,80%,50%,0.3)]"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
