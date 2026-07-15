"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ratingLabels = ["Poor", "Fair", "Good", "Great", "Excellent"];

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <section id="feedback" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-heading">
            <h2>
              Share Your <span className="highlight">Feedback</span>
            </h2>
            <p>Help us improve your travel experience</p>
            <div className="underline" />
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-12 text-center shadow-[0_8px_30px_hsla(250,30%,10%,0.06)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#F59E0B] flex items-center justify-center mx-auto mb-5">
                  <span className="text-3xl text-white">&#10003;</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1A153A] mb-2">Thank You!</h3>
                <p className="text-[#1A153A]/50">
                  Your feedback means the world to us. We&apos;ll use it to make your next trip even better.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_hsla(250,30%,10%,0.06)]"
              >
                {/* Star Rating */}
                <div className="text-center mb-8">
                  <label className="block text-sm font-semibold text-[#1A153A]/60 uppercase tracking-wider mb-3">
                    Your Rating
                  </label>
                  <div className="flex items-center justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(star)}
                        className="text-3xl md:text-4xl transition-colors duration-150 focus:outline-none"
                      >
                        <span
                          className={
                            star <= (hovered || rating)
                              ? "text-[#F59E0B]"
                              : "text-[#1A153A]/10"
                          }
                        >
                          &#9733;
                        </span>
                      </motion.button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-[#0D9488] font-medium mt-2"
                    >
                      {ratingLabels[rating - 1]}
                    </motion.p>
                  )}
                </div>

                {/* Name */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold text-[#1A153A]/60 uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 bg-[#FFF8F0] border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A] placeholder:text-[#1A153A]/30"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold text-[#1A153A]/60 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 bg-[#FFF8F0] border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A] placeholder:text-[#1A153A]/30"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-[#1A153A]/60 uppercase tracking-wider mb-1.5">
                    Your Experience
                  </label>
                  <textarea
                    placeholder="Tell us about your experience..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-[#FFF8F0] border border-[#1A153A]/10 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all text-[#1A153A] placeholder:text-[#1A153A]/30 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-[0_8px_30px_hsla(170,80%,30%,0.3)] transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>&#9997;</span> Submit Feedback
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
