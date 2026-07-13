import Script from "next/script";

export default function StructuredData() {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "WanderLust",
          url: "https://wanderlust-travel.vercel.app",
          logo: "https://wanderlust-travel.vercel.app/favicon.ico",
          description: "Your one-stop platform for tropical getaways, city breaks, and premium car rentals.",
          address: { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "12000" },
        }),
      }}
    />
  );
}
