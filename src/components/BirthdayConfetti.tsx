import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

interface BirthdayConfettiProps {
  isActive: boolean;
  intensity?: "light" | "medium" | "heavy";
}

const BirthdayConfetti = ({ isActive, intensity = "medium" }: BirthdayConfettiProps) => {
  const { width, height } = useWindowSize();
  const [recycle, setRecycle] = useState(true);

  useEffect(() => {
    if (isActive) {
      // Stop recycling confetti after 10 seconds for performance
      const timer = setTimeout(() => {
        setRecycle(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  const pieceCount = {
    light: 100,
    medium: 200,
    heavy: 400,
  }[intensity];

  return (
    <Confetti
      width={width}
      height={height}
      recycle={recycle}
      numberOfPieces={pieceCount}
      colors={["#D4AF37", "#FFD700", "#FFC0CB", "#FF69B4", "#DDA0DD", "#F0E68C"]}
      gravity={0.15}
      opacity={0.8}
    />
  );
};

export default BirthdayConfetti;
