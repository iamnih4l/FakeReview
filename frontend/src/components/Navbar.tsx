import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#E50914]" />
          <span className="text-white tracking-tight">FakeReview AI</span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="#demo" 
            className="relative px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-lg text-white/70 hover:text-white transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative">Try Demo</span>
          </a>
          <a 
            href="#about" 
            className="relative px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-lg text-white/70 hover:text-white transition-all group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative">About</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
