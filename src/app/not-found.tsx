import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] to-[#F0F0FA] px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold bg-gradient-to-br from-[#0D9488] to-[#F59E0B] bg-clip-text text-transparent mb-2">
          404
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-[#0D9488] to-[#F59E0B] mx-auto mb-6 rounded" />
        <h1 className="text-2xl font-bold text-[#1A153A] mb-3">Page Not Found</h1>
        <p className="text-sm text-[#1A153A]/50 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D9488] to-[#F59E0B] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
        >
          &#8592; Back Home
        </Link>
      </div>
    </div>
  );
}
