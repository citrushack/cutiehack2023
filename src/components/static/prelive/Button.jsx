import { LuArrowUpRight } from "react-icons/lu";

const Button = ({ text, onClick }) => {
  return (
    <div className="text-2xl font-bold items-center">
      <span
        className="text-cutie-orange cursor-pointer underline"
        onClick={onClick}
      >
        {text}
      </span>
      <LuArrowUpRight className="inline" />
    </div>
  );
};

export default Button;
