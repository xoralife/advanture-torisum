"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { cars, toSlug } from "@/data/cars";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-600/30 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/15 to-transparent rounded-full blur-2xl" />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Car Fleet</span>
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
            Luxury rides for every journey &mdash; choose your perfect car
          </p>
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
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
                      <div className="flex gap-3 mb-4">
                        {[
                          { icon: "&#128100;", label: `${car.seats} Seats` },
                          { icon: "&#128188;", label: `${car.bags} Bags` },
                          { icon: "&#9981;", label: car.fuel },
                        ].map((f) => (
                          <span
                            key={f.label}
                            className="text-xs text-slate-600 bg-slate-200 px-3 py-1.5 rounded-lg"
                          >
                            {f.icon} {f.label}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-300">
                        <div>
                          <span className="text-2xl font-bold text-slate-800">
                            ${car.price}
                          </span>
                          <span className="text-sm text-slate-500 ml-1">/day</span>
                        </div>
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] transition-shadow duration-300 inline-block">
                          View Details &#8594;
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
