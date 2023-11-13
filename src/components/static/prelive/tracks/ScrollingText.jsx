"use client";
import { useEffect, useState } from "react";

const tracks = ["sustainability", "social impact", "smart living"];

const ScrollingText = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrent((curr) => (curr === 2 ? 0 : curr + 1));
    }, 3000);
  }, []);

  return (
    <div className="text-white w-full text-right font-bold -mb-10 md:-mb-20">
      <p className="text-xl md:text-3xl mb-0 text-cutie-orange">create for</p>
      <div className="h-10 md:h-20 overflow-hidden text-2xl md:text-7xl">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="duration-500 h-10 md:h-20"
            style={{
              transform: `translateY(${-100 * current}%)`,
            }}
          >
            {track}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
