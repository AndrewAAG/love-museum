import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BirthdayCandleProps {
  isLit: boolean;
  onBlowOut: () => void;
  number: number;
  photo: string;
  compliment: string;
  showReveal: boolean;
}

const BirthdayCandle = ({ isLit, onBlowOut, number }: BirthdayCandleProps) => {
  const [showSmoke, setShowSmoke] = useState(false);

  useEffect(() => {
    if (!isLit) {
      setShowSmoke(true);
      const timer = setTimeout(() => setShowSmoke(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLit]);

  return (
    <div 
      className={`relative flex flex-col items-center transition-all ${!isLit && 'opacity-50'}`}
    >
      {/* Candle */}
      <div className="relative w-5 md:w-6 h-24 md:h-28 bg-gradient-to-b from-pink-200 via-pink-100 to-pink-300 rounded-t-sm shadow-lg border-l border-r border-pink-300/50">
        {/* Candle highlights */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-white/40 to-transparent rounded-tl-sm" />
        
        {/* Flame - positioned clearly ABOVE candle */}
        <AnimatePresence>
          {isLit && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.08, 1, 1.12, 1],
                opacity: 1,
              }}
              exit={{ 
                scale: 0,
                opacity: 0,
                y: -30,
                transition: { duration: 0.4 }
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 z-20"
            >
              {/* Large visible flame */}
              <div className="relative">
                {/* Outer orange glow */}
                <div className="absolute inset-0 w-10 h-16 md:w-12 md:h-20 -left-2 -top-2 bg-gradient-to-t from-orange-600 via-orange-500 to-yellow-400 rounded-full blur-md opacity-60" />
                
                {/* Main flame shape */}
                <div className="relative w-6 h-12 md:w-8 md:h-16 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400" 
                     style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }} />
                
                {/* Bright inner core */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-8 md:w-5 md:h-10 bg-gradient-to-t from-yellow-400 via-yellow-200 to-white rounded-full opacity-90" />
                
                {/* Flickering tip */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    opacity: [0.8, 1, 0.7, 1, 0.8]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-5 md:w-4 md:h-6 bg-gradient-to-t from-orange-500 via-red-500 to-red-600 rounded-full blur-[1px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Smoke effect */}
        <AnimatePresence>
          {showSmoke && (
            <motion.div
              initial={{ y: 0, opacity: 0.6, scale: 0.5 }}
              animate={{ 
                y: -40,
                opacity: 0,
                scale: 1.5
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-400 rounded-full blur-md"
            />
          )}
        </AnimatePresence>

        {/* Candle number */}
        <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium text-pink-600">
          {number}
        </div>
      </div>
    </div>
  );
};

export default BirthdayCandle;
