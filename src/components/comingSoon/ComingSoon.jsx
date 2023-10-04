import Image from "next/image";
import logo from "../../../public/logo.svg";
import shine from "../../../public/shine.svg";
import submarine from "../../../public/submarine.svg";
import CountDown from "./CountDown";

const ComingSoon = () => {
  return (
    <div className="relative font-karla w-full text-white">
      <Image src={shine} className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col w-1/3">
          <Image src={logo} />
          <p className="ml-10 mb-1 text-6xl text-white font-bold">
            COMING SOON
          </p>
          <p className="ml-10 text-3xl text-cutie-orange font-bold">
            November 4th, 2023
          </p>
          <CountDown />
        </div>
        <Image src={submarine} className="w-1/3 ml-4" />
      </div>
    </div>
  );
};

export default ComingSoon;
