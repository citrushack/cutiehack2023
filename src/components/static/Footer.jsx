import Image from "next/image";
import footer from "../../../public/svg/footer.svg";
import logo from "../../../public/svg/logo.svg";
import { BsHeartFill } from "react-icons/bs";
import { SOCIAL } from "@/data/static/Social";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full relative">
      <Image src={footer} className="w-full" />
      <div className="absolute bottom-10 w-full flex flex-col items-center">
        <Image src={logo} alt="logo" className="w-1/6 object-contain" />

        <div className="text-xl text-white flex items-center">
          made with <BsHeartFill className="mx-2 text-cutie-blue-100" /> by the
          Cutie Hack team at UCR
        </div>
        <div className="flex gap-2 mt-2">
          {SOCIAL.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className="text-white hover:!text-cutie-blue-100 duration-200 hover:-translate-y-0.5 !text-2xl "
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
