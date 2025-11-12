import { motion } from "motion/react";
import { History, CheckCircle2, XCircle, Trash2 } from "lucide-react";

interface AnalysisResult {
  id: string;
  text: string;
  isGenuine: boolean;
  confidence: number;
  timestamp: Date;
}

interface AnalysisHistoryProps {
  history: AnalysisResult[];
  onClearHistory: () => void;
  onSelectHistoryItem: (text: string) => void;
}

export function AnalysisHistory({ history, onClearHistory, onSelectHistoryItem }: AnalysisHistoryProps) {
  if (history.length === 0) return null;

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/70">
          <History className="w-5 h-5 text-[#E50914]" />
          <h3 className="text-white">Analysis History</h3>
        </div>
        
        <button
          onClick={onClearHistory}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-lg text-white/60 hover:text-white transition-all group"
        >
          <Trash2 className="w-4 h-4 group-hover:text-[#E50914] transition-colors" />
          <span className="text-sm">Clear</span>
        </button>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {history.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onSelectHistoryItem(item.text)}
            className="w-full group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-xl p-4 text-left transition-all hover:shadow-lg hover:shadow-white/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="relative flex items-start gap-3">
              {item.isGenuine ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
              )}
              
              <div className="flex-1 min-w-0 space-y-2">
                <p className="text-white/80 text-sm line-clamp-2">
                  {item.text}
                </p>
                
                <div className="flex items-center gap-3 text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    item.isGenuine 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-[#E50914]/20 text-[#E50914]'
                  }`}>
                    {item.isGenuine ? 'Genuine' : 'Fake'} - {item.confidence}%
                  </span>
                  
                  <span className="text-white/40">
                    {item.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(229, 9, 20, 0.5);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(229, 9, 20, 0.7);
        }
      `}</style>
    </motion.div>
  );
}
