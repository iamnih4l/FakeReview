import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 text-white/60">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-[#E50914] fill-[#E50914] animate-pulse" />
          <span>||</span>
          <span className="text-white/80">Mohammed Nihal</span>
        </div>
      </div>
    </footer>
  );
}
