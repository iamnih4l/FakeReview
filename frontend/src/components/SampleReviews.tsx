import { motion } from "motion/react";
import { Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";

interface SampleReviewsProps {
  onSelectReview: (text: string) => void;
}

const sampleReviews = [
  {
    id: 1,
    type: "genuine",
    icon: ThumbsUp,
    text: "I've been using this product for about three months now. The quality is good overall, though I noticed the battery life could be better. Customer service was helpful when I had questions. Worth the price in my opinion.",
    label: "Genuine Review"
  },
  {
    id: 2,
    type: "fake",
    icon: ThumbsDown,
    text: "AMAZING!!! BEST PRODUCT EVER!!! Everyone MUST buy this NOW!!! Changed my life completely!!! 10/10 would recommend to EVERYONE!!!",
    label: "Suspicious Review"
  },
  {
    id: 3,
    type: "genuine",
    icon: ThumbsUp,
    text: "Solid product for the money. Shipping took a week which was expected. The setup instructions could be clearer but I managed to figure it out. It does what it's supposed to do, no complaints so far.",
    label: "Balanced Review"
  },
  {
    id: 4,
    type: "fake",
    icon: ThumbsDown,
    text: "Perfect perfect perfect! This is the absolute best thing I've ever purchased! No flaws whatsoever! Trust me everyone should buy this immediately! Amazing quality amazing price amazing everything!",
    label: "Over-enthusiastic"
  }
];

export function SampleReviews({ onSelectReview }: SampleReviewsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-white/70">
        <Sparkles className="w-5 h-5 text-[#E50914]" />
        <h3 className="text-white">Try Sample Reviews</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleReviews.map((review, index) => {
          const Icon = review.icon;
          return (
            <motion.button
              key={review.id}
              onClick={() => onSelectReview(review.text)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-xl p-4 text-left transition-all hover:shadow-lg hover:shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${
                    review.type === 'genuine' ? 'text-green-500' : 'text-orange-500'
                  }`} />
                  <span className="text-white/60 text-sm">{review.label}</span>
                </div>
                <p className="text-white/80 text-sm line-clamp-3">
                  {review.text}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
