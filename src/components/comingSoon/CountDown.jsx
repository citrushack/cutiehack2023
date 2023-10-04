import { useState, useEffect } from "react";

const Digits = ({ time, text }) => {
  const num =
    text == "days"
      ? Math.ceil(time / (1000 * 60 * 60 * 24))
      : text == "hours"
      ? Math.ceil((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      : text == "minutes"
      ? Math.ceil((time % (1000 * 60 * 60)) / (1000 * 60))
      : 0;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <p className="bg-cutie-blue-200/75 m-0 p-3 text-3xl font-bold w-14 flex items-center justify-center rounded-lg drop-shadow-md">
          {Math.floor(num / 10)}
        </p>
        <p className="bg-cutie-blue-200/75 m-0 p-3 text-3xl font-bold w-14 flex items-center justify-center rounded-lg drop-shadow-md">
          {num % 10}
        </p>
      </div>
      <p className="text-base">{text}</p>
    </div>
  );
};
const CountDown = () => {
  const [diffTime, setDiffTIme] = useState(
    new Date("January 13, 2024 12:00:00") - new Date()
  );
  useEffect(() => {
    const interval = setInterval(
      () => setDiffTIme(new Date("November 4, 2023 12:00:00") - new Date()),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-4">
      <Digits time={diffTime} text="days" />
      <Digits time={diffTime} text="hours" />
      <Digits time={diffTime} text="minutes" />
    </div>
  );
};

export default CountDown;
