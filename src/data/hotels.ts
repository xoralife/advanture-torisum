export interface Hotel {
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  tag: string;
  tagColor: string;
  description: string;
  amenities: string[];
  img: string;
}

export function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function findHotelBySlug(slug: string) {
  return hotels.find((h) => toSlug(h.name) === slug) || null;
}

export const hotels: Hotel[] = [
  {
    name: "The Grand Palace",
    location: "Bali, Indonesia",
    pricePerNight: 189,
    rating: 4.9,
    reviews: 342,
    tag: "Popular",
    tagColor: "bg-indigo-500 text-white",
    description: "Luxury beachfront resort with infinity pools and private villas surrounded by tropical gardens.",
    amenities: ["Pool", "Spa", "Free WiFi", "Breakfast"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Le Royal Monceau",
    location: "Paris, France",
    pricePerNight: 299,
    rating: 4.8,
    reviews: 287,
    tag: "Best Seller",
    tagColor: "bg-violet-500 text-white",
    description: "Elegant palace hotel steps from the Champs-Élysées with world-class dining and art.",
    amenities: ["Restaurant", "Bar", "Fitness", "Concierge"],
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    pricePerNight: 850,
    rating: 4.9,
    reviews: 521,
    tag: "Luxury",
    tagColor: "bg-slate-900 text-white",
    description: "Iconic sail-shaped hotel with butler service, underwater restaurant, and private beach.",
    amenities: ["Private Beach", "Butler", "Helipad", "Aquarium"],
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Park Hyatt Tokyo",
    location: "Tokyo, Japan",
    pricePerNight: 420,
    rating: 4.7,
    reviews: 634,
    tag: "Cultural",
    tagColor: "bg-indigo-600 text-white",
    description: "Sophisticated high-rise hotel with panoramic city views and a serene spa.",
    amenities: ["Spa", "Sky Bar", "Pool", "Michelin Star"],
    img: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Canaves Oia Suites",
    location: "Santorini, Greece",
    pricePerNight: 380,
    rating: 4.9,
    reviews: 198,
    tag: "Romantic",
    tagColor: "bg-rose-500 text-white",
    description: "Cliffside cave suites with caldera views, private plunge pools, and sunset dining.",
    amenities: ["Plunge Pool", "Sunset View", "Wine Cellar", "Spa"],
    img: "https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Chedi Andermatt",
    location: "Zermatt, Switzerland",
    pricePerNight: 650,
    rating: 4.8,
    reviews: 415,
    tag: "Adventure",
    tagColor: "bg-cyan-600 text-white",
    description: "Alpine luxury resort with ski-in/ski-out access, thermal spa, and mountain vistas.",
    amenities: ["Ski Access", "Thermal Spa", "Fine Dining", "Fireplace"],
    img: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
