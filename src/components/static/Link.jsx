import Link from "next/link";

const CustomLink = ({ link, text }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-cutie-blue-200/75 text-cutie-orange font-bold text-base md:text-xl rounded-full px-8 py-1 w-fit no-underline hover:bg-cutie-blue-200 duration-200 whitespace-nowrap"
    >
      {text}
    </Link>
  );
};

export default CustomLink;
