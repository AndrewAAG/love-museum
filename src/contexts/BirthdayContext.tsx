import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BirthdayContextType {
  isBirthdayMode: boolean;
  birthdayDate: Date;
  daysUntilBirthday: number;
  toggleBirthdayMode: () => void;
  isBirthdayToday: boolean;
}

const BirthdayContext = createContext<BirthdayContextType | undefined>(undefined);

// Set your girlfriend's birthday here (month is 0-indexed: 0 = January, 11 = December)
const BIRTHDAY_MONTH = 10; // November
const BIRTHDAY_DAY = 24; // 27th (change this)

export const BirthdayProvider = ({ children }: { children: ReactNode }) => {
  const [isBirthdayMode, setIsBirthdayMode] = useState(false);

  // Calculate if today is the birthday
  const checkIfBirthday = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthday = new Date(currentYear, BIRTHDAY_MONTH, BIRTHDAY_DAY);
    
    return (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() === birthday.getDate()
    );
  };

  // Calculate days until next birthday
  const calculateDaysUntilBirthday = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, BIRTHDAY_MONTH, BIRTHDAY_DAY);
    
    // If birthday has passed this year, calculate for next year
    if (today > nextBirthday) {
      nextBirthday = new Date(currentYear + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY);
    }
    
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  const isBirthdayToday = checkIfBirthday();
  const daysUntilBirthday = calculateDaysUntilBirthday();

  // Automatically enable birthday mode if it's her birthday
  useEffect(() => {
    if (isBirthdayToday) {
      setIsBirthdayMode(true);
    }
  }, [isBirthdayToday]);

  const toggleBirthdayMode = () => {
    setIsBirthdayMode(!isBirthdayMode);
  };

  const birthdayDate = new Date(new Date().getFullYear(), BIRTHDAY_MONTH, BIRTHDAY_DAY);

  return (
    <BirthdayContext.Provider
      value={{
        isBirthdayMode,
        birthdayDate,
        daysUntilBirthday,
        toggleBirthdayMode,
        isBirthdayToday,
      }}
    >
      {children}
    </BirthdayContext.Provider>
  );
};

export const useBirthday = () => {
  const context = useContext(BirthdayContext);
  if (context === undefined) {
    throw new Error("useBirthday must be used within a BirthdayProvider");
  }
  return context;
};