"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { findHotelBySlug } from "@/data/hotels";
import type { Hotel } from "@/data/hotels";

function HotelDetail({ hotel }: { hotel: Hotel }) {
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
              Your request for <strong>{hotel.name}</strong> has been received.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              We&apos;ll contact you soon with confirmation details.
            </p>
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              &larr; Browse More Hotels
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
          <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <Link href="/hotels" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            &larr; Back to Hotels
          </Link>
          <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg mb-4 ${hotel.tagColor}`}>
            {hotel.tag}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3">{hotel.name}</h1>
          <p className="text-white/80 text-base md:text-lg flex items-center justify-center gap-2 mb-2">
            <span>&#128205;</span> {hotel.location}
          </p>
          <div className="flex items-center justify-center gap-1 text-amber-400 text-sm mb-4">
            {[1, 2, 3, 4, 5].map((s) => (<span key={s}>&#9733;</span>))}
            <span className="text-white/60 text-xs ml-1">{hotel.rating} ({hotel.reviews} reviews)</span>
          </div>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-6">{hotel.description}</p>
          <div className="text-5xl font-extrabold text-white mb-8">
            ${hotel.pricePerNight}<span className="text-lg font-normal text-white/60">/night</span>
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

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.map((a) => (
                  <span key={a} className="text-sm text-indigo-600 bg-indigo-100 px-4 py-2 rounded-lg font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-300 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Quick Summary</h2>
              <div className="space-y-2 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-800">Location:</span> {hotel.location}</p>
                <p><span className="font-semibold text-slate-800">Rating:</span> {hotel.rating}/5 ({hotel.reviews} reviews)</p>
                <p><span className="font-semibold text-slate-800">Price:</span> ${hotel.pricePerNight} per night</p>
                <p><span className="font-semibold text-slate-800">Category:</span> {hotel.tag}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const hotel = findHotelBySlug(slug);

  if (!hotel) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Hotel Not Found</h1>
          <p className="text-slate-500 mb-6">The hotel you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/hotels" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold">
            &larr; Browse Hotels
          </Link>
        </div>
      </main>
    );
  }

  return <HotelDetail hotel={hotel} />;
}
