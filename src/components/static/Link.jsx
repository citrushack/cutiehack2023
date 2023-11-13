import Link from "next/link";

const CustomLink = ({ link, text, onClick }) => {
  return (
    <div className="bg-cutie-blue-200/75 text-cutie-orange font-bold text-base md:text-xl rounded-full px-8 py-1 w-fit hover:bg-cutie-blue-200 duration-200 whitespace-nowrap">
      {onClick ? (
        <button onClick={onClick} href={link} target="_blank">
          {text}
        </button>
      ) : (
        <Link href={link} className="text-cutie-orange no-underline ">
          {text}
        </Link>
      )}
    </div>
  );
};

export default CustomLink;
