"use client";
import { LuArrowUpRight } from "react-icons/lu";

const Button = ({ text, onClick }) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <div className="text-2xl font-bold items-center">
      <p>
        {words.join(" ")}{" "}
        <span
          className="text-cutie-orange cursor-pointer underline"
          onClick={onClick}
        >
          {last}
        </span>{" "}
        <LuArrowUpRight className="inline" />
      </p>
    </div>
  );
};

export default Button;
