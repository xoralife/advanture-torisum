import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Destinations from "@/components/Destinations";
import Stats from "@/components/Stats";
import CarRental from "@/components/CarRental";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookingWidget />
      <Destinations />
      <Stats />
      <CarRental />
      <Testimonials />
      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  );
}
