"use client";

export default function SectionDivider({ flip }: { flip?: boolean }) {
  return (
    <div className={`relative h-28 md:h-36 bg-[#FFF8F0] ${flip ? "-scale-y-100" : ""}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        fill="#FFFFFF"
      >
        <path d="M0,80 C240,140 480,20 720,60 C960,100 1200,0 1440,50 L1440,140 L0,140 Z" />
      </svg>
    </div>
  );
}
