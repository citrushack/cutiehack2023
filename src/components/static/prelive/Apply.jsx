import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <div className="text-sm md:text-2xl font-bold flex items-center text-white">
      Apply to&nbsp;
      <Link
        href={link}
        className="text-cutie-orange underline hover:-translate-y-0.5 duration-200"
      >
        {text}
      </Link>
      <LuArrowUpRight />
    </div>
  );
};

export default Apply;
