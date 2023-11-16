import Link from "next/link";

const CustomLink = ({ link, text, onClick, icon }) => {
  return (
    <div className="bg-cutie-blue-200/75 text-cutie-orange font-bold text-base md:text-xl rounded-full px-8 py-1 w-fit hover:bg-cutie-blue-200 duration-200 whitespace-nowrap">
      {onClick ? (
        <button onClick={onClick}>{text}</button>
      ) : (
        <Link
          href={link}
          className="text-cutie-orange no-underline flex items-center"
        >
          {text} {icon}
        </Link>
      )}
    </div>
  );
};

export default CustomLink;
