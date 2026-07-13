import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Destinations from "@/components/Destinations";
import CarRental from "@/components/CarRental";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookingWidget />
      <Destinations />
      <CarRental />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
