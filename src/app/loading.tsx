export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F7FA]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[hsl(210,15%,88%)] border-t-[#E67E22] rounded-full animate-spin" />
        <p className="text-sm text-[hsl(210,10%,50%)] font-medium">Loading WanderLust...</p>
      </div>
    </div>
  );
}
