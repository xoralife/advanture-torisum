export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#F59E0B] animate-pulse" />
        <p className="text-sm text-[#1A153A]/40 font-medium">Loading WanderLust...</p>
      </div>
    </div>
  );
}
