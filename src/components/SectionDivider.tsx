"use client";

export default function SectionDivider({ flip }: { flip?: boolean }) {
  return (
    <div className={`relative h-24 md:h-32 bg-[#FFF8F0] ${flip ? "-scale-y-100" : ""}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="#FFFFFF"
      >
        <path d="M0,40 C360,100 1080,0 1440,60 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
}
