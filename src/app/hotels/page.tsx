"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { hotels, toSlug } from "@/data/hotels";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
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

function BookingForm({ hotelName, onClose }: { hotelName: string | null; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Booking Pending!</h3>
        <p className="text-slate-600">
          Thank you, <strong>{name}</strong>! Your room at <strong>{hotelName}</strong> has been received.
        </p>
        <p className="text-slate-500 text-sm mt-1">We&apos;ll contact you soon with confirmation.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-800">
          {hotelName ? `Book ${hotelName}` : "Book a Room"}
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 text-xl transition-colors"
        >
          &#10005;
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-slate-800" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com"
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-slate-800" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Check-in</label>
          <input type="date" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-slate-800" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Check-out</label>
          <input type="date" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-slate-800" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Guests</label>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-slate-800 appearance-none">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>
      </div>

      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)] transition-all duration-300">
        Confirm Booking &#8594;
      </motion.button>
    </motion.form>
  );
}

export default function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-600/30 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-violet-500/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-gradient-to-bl from-amber-500/15 to-transparent rounded-full blur-2xl" />
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Hotel Rooms</span>
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto">
            Premium stays curated for your comfort and luxury
          </p>
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {hotels.map((hotel, i) => (
              <motion.div
                key={hotel.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
              >
                <Link href={`/hotels/${toSlug(hotel.name)}`} className="block group cursor-pointer">
                  <TiltCard>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)] transition-shadow duration-500">
                      <div className="relative overflow-hidden h-56">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10" />
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg ${hotel.tagColor}`}>
                            {hotel.tag}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-slate-800 font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
                          ${hotel.pricePerNight}<span className="font-normal text-[10px]">/night</span>
                        </div>
                        <motion.img src={hotel.img} alt={hotel.name} loading="lazy"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-center gap-1 text-amber-500 text-sm mb-1">
                          {[1, 2, 3, 4, 5].map((s) => (<span key={s}>&#9733;</span>))}
                          <span className="text-slate-500 text-xs ml-1">{hotel.rating} ({hotel.reviews})</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800">{hotel.name}</h3>
                        <p className="text-sm text-slate-600 flex items-center gap-1.5 mt-1">
                          <span>&#128205;</span> {hotel.location}
                        </p>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">{hotel.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                          {hotel.amenities.map((a) => (
                            <span key={a} className="text-[10px] text-indigo-600 bg-indigo-100 px-2 py-1 rounded-md font-medium">{a}</span>
                          ))}
                        </div>
                        <div className="relative w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold shadow-md hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] transition-all duration-300 overflow-hidden text-center">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            View Details <span>&rarr;</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <div id="hotel-booking" className="max-w-2xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.12)] p-6 md:p-8 lg:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-t-3xl" />

              {selectedHotel === null ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800">Quick Room Booking</h3>
                    <p className="text-slate-500 text-sm mt-1">Select a hotel to book instantly</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {hotels.map((hotel) => (
                      <button
                        key={hotel.name}
                        onClick={() => setSelectedHotel(hotel.name)}
                        className="text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all text-sm"
                      >
                        <span className="font-semibold text-slate-800">{hotel.name}</span>
                        <span className="text-slate-500 block text-xs">{hotel.location}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <BookingForm hotelName={selectedHotel} onClose={() => setSelectedHotel(null)} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
