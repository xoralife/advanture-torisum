import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F7FA] px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-[#0B2A3C] mb-2">404</div>
        <div className="w-16 h-1 bg-[#E67E22] mx-auto mb-6 rounded" />
        <h1 className="text-2xl font-bold text-[#0B2A3C] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[hsl(210,10%,50%)] mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#E67E22] hover:bg-[hsl(30,80%,46%)] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
        >
          &#8592; Back to Home
        </Link>
      </div>
    </div>
  );
}
