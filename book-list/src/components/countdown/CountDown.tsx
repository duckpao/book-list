import { useEffect, useState } from "react";
import "./CountDown.css";

interface CountdownProps {
  targetDate: string; 
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


const calculateTimeLeft = (target: string): TimeLeft => {
  const difference = new Date(target).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];
  
  return (
    <div className="countdown">
      {items.map((item, index) => (
        <div className="countdown-label" key={item.label}>
          <h4 className="m-0 d-flex g-3">
            {item.label === "Days" ? item.value : formatNumber(item.value)}
            {index < items.length - 1 && (
              <span className="countdown-separator mx-2">:</span>
            )}
          </h4>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
