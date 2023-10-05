"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Digits = ({ value, text }) => {
  return (
    <div className="flex flex-col items-center mr-3 md:mr-5 gap-2">
      <div className="flex items-center">
        <p className="bg-cutie-blue-200/75 mb-0 h-10 md:h-16 text-lg md:text-3xl font-bold w-8 md:w-14 flex items-center justify-center rounded-lg drop-shadow-md mr-1 md:mr-2">
          {Math.floor(value / 10)}
        </p>
        <p className="bg-cutie-blue-200/75 mb-0 h-10 md:h-16 text-lg md:text-3xl font-bold w-8 md:w-14 flex items-center justify-center rounded-lg drop-shadow-md">
          {value % 10}
        </p>
      </div>
      <p className="text-xs md:text-base">{text}</p>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = CONFIG.date - new Date();
      setTime({
        days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
        hours: Math.ceil((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60)),
      }),
        1000;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;