import { useState, useEffect, useMemo } from "react";

interface CountdownTime {
  minutes: string;
  seconds: string;
}

export const useCountdown = (initialHours: number): CountdownTime => {
  const totalSeconds = useMemo(() => initialHours * 3600, [initialHours]);

  const [elapsed, setElapsed] = useState<number>(0);

  useEffect(() => {
    if (elapsed >= totalSeconds) {
      return;
    }

    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [elapsed, totalSeconds]);

  const remaining = Math.max(0, totalSeconds - elapsed);

  return {
    minutes: String(Math.floor(remaining / 60)).padStart(2, "0"),
    seconds: String(remaining % 60).padStart(2, "0"),
  };
};
