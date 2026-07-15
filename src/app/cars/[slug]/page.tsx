"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { findCarBySlug } from "@/data/cars";
import type { Car } from "@/data/cars";

function CarDetail({ car }: { car: Car }) {
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <section className="pt-36 pb-20 flex items-center justify-center px-4" style={{ minHeight: "80vh" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-4xl text-white">&#10003;</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Booking Pending!</h2>
            <p className="text-slate-600 mb-2">
              Your request for <strong>{car.model}</strong> has been received.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              We&apos;ll contact you soon with confirmation details.
            </p>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              &larr; Browse More Cars
            </Link>
          </motion.div>
        </section>
        <Footer />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={car.img} alt={car.model} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-violet-500/20 to-transparent rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <Link href="/cars" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            &larr; Back to Cars
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3">{car.model}</h1>
          <p className="text-indigo-400 font-medium text-lg mb-2">&#128663; {car.type}</p>
          <div className="flex items-center justify-center gap-4 text-white/70 text-sm mb-6">
            <span>&#128100; {car.seats} Seats</span>
            <span>&#128188; {car.bags} Bags</span>
            <span>&#9981; {car.fuel}</span>
          </div>
          <div className="text-5xl font-extrabold text-white mb-8">
            ${car.price}<span className="text-lg font-normal text-white/60">/day</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBooked(true)}
            className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-10 py-4 rounded-xl text-base font-semibold shadow-xl hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] transition-all duration-300"
          >
            Book Now &rarr;
          </motion.button>
        </motion.div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const car = findCarBySlug(slug);

  if (!car) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Car Not Found</h1>
          <p className="text-slate-500 mb-6">The car you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/cars" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold">
            &larr; Browse Cars
          </Link>
        </div>
      </main>
    );
  }

  return <CarDetail car={car} />;
}
