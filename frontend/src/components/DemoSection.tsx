import { motion } from "motion/react";
import { Play, Image as ImageIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DemoSection() {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="text-center space-y-2">
        <h2 className="text-white text-3xl">See It In Action</h2>
        <p className="text-white/60">
          Watch how our AI analyzes reviews in real-time
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main demo video placeholder */}
        <div className="md:col-span-2 relative group">
          <div className="relative aspect-video bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            {/* Demo image */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjg2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Technology Interface Demo"
              className="w-full h-full object-cover"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
              <button className="flex items-center justify-center w-20 h-20 bg-[#E50914] backdrop-blur-xl border border-white/20 rounded-full shadow-lg shadow-[#E50914]/50 hover:scale-110 transition-transform group">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Side images */}
        <div className="space-y-6">
          <div className="relative group">
            <div className="relative aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584981344812-aac1f5a6ec91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXZpZXclMjByYXRpbmd8ZW58MXx8fHwxNzYxNzk1NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile Review Rating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-2 text-white text-sm">
                  <ImageIcon className="w-4 h-4" />
                  <span>Review Analysis</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGZlZWRiYWNrfGVufDF8fHx8MTc2MTc5NTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Customer Feedback"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-2 text-white text-sm">
                  <ImageIcon className="w-4 h-4" />
                  <span>User Feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
