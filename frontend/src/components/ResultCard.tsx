import { CheckCircle2, XCircle } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

interface ResultCardProps {
  isGenuine: boolean;
  confidence: number;
}

export function ResultCard({ isGenuine, confidence }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          {isGenuine ? (
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <h2 className="text-white text-2xl">This review appears Genuine</h2>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <XCircle className="w-12 h-12 text-[#E50914]" />
              <h2 className="text-white text-2xl">This review appears Fake</h2>
            </div>
          )}
          
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/70">Confidence Level</span>
              <span className="text-white">{confidence}%</span>
            </div>
            
            {/* Circular confidence indicator */}
            <div className="flex justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={isGenuine ? "#22c55e" : "#E50914"}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - confidence / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-3xl">{confidence}%</span>
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${
                  isGenuine ? "bg-green-500" : "bg-[#E50914]"
                }`}
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>
          
          <p className="text-white/60 text-center max-w-md">
            Our AI has analyzed the text patterns, sentiment, and linguistic markers to determine authenticity.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
