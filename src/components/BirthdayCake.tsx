import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Flame, X } from "lucide-react";
import BirthdayCandle from "./BirthdayCandle";
import { toast } from "sonner";

import van from "@/assets/van.jpg";

const BirthdayCake = () => {
  const [isLit, setIsLit] = useState(true);
  const [showReveal, setShowReveal] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const photo = "/placeholder.svg";
  const compliment = "Happy Birthday! You are deeply loved and cherished ✨";

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      
      analyserRef.current.fftSize = 256;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      setIsListening(true);
      
      const detectBlow = () => {
        if (!analyserRef.current || !isLit) return;
        
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / bufferLength;
        
        // Detect blow (sudden increase in audio level)
        if (average > 50) {
          handleBlowOut();
          return;
        }
        
        animationFrameRef.current = requestAnimationFrame(detectBlow);
      };
      
      detectBlow();
    } catch (error) {
      console.error("Microphone access error:", error);
      toast.error("Could not access microphone. Please allow microphone access.");
    }
  };

  const stopListening = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
  };

  const handleBlowOut = () => {
    setIsLit(false);
    setShowReveal(true);
    stopListening();
    toast.success("You blew out the candle! 🎉");
  };

  const handleCloseReveal = () => {
    setShowReveal(false);
  };

  const relightCandle = () => {
    setIsLit(true);
    setShowReveal(false);
    toast.success("Candle relit! Blow it out again 🕯️");
  };

  useEffect(() => {
    if (isLit && !isListening) {
      startListening();
    }
    
    return () => {
      stopListening();
    };
  }, [isLit]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex items-center justify-center flex-wrap gap-4">
        {!isLit && (
          <Button onClick={relightCandle} variant="outline" className="gap-2">
            <Flame className="w-4 h-4" />
            Light Candle Again
          </Button>
        )}
      </div>

      {/* Single Candle Cake */}
      <div className="relative">
        {/* Single Candle */}
        <div className="flex justify-center items-end mb-4">
          <BirthdayCandle
            isLit={isLit}
            onBlowOut={handleBlowOut}
            number={21}
            photo={photo}
            compliment="Happy Birthday to the Prettiest, Kindest, and Smartest Girl"
            showReveal={false}
          />
        </div>

        {/* Simple Cake Base */}
        <div className="relative mx-auto max-w-md">
          {/* Main cake body */}
          <div className="relative h-32 md:h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-xl">
            {/* Top frosting */}
            <div className="absolute top-0 left-0 right-0 h-3 md:h-4 bg-white/30 rounded-t-lg" />
            
            {/* Simple center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-light text-white/40">
                21
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm md:text-base">
            {isLit ? "Blow into your microphone to extinguish the candle 🎂" : "Click the button above to relight the candle"}
          </p>
        </div>
      </div>

      {/* Reveal Modal */}
      {showReveal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleCloseReveal}
        >
          <div 
            className="relative bg-card rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-accent max-w-md w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseReveal}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={van} 
                  alt="Birthday Memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-base md:text-lg text-foreground font-medium leading-relaxed">
                Happy Birthday to the Prettiest, Kindest, and Smartest Girl
              </p>
              <div className="text-center">
                <Button onClick={handleCloseReveal} variant="outline">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayCake;
