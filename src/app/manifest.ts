import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WanderLust — Explore the World with Us",
    short_name: "WanderLust",
    description: "Discover breathtaking destinations, rent premium cars, and create unforgettable memories.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F7FA",
    theme_color: "#0B2A3C",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
