import Image from "next/image";
import logo from "../../../public/logo.svg";
import shine from "../../../public/shine.svg";
import submarine from "../../../public/submarine.svg";
import CountDown from "./Countdown";

const ComingSoon = () => {
  return (
    <div className="relative font-karla w-full text-white">
      <Image src={shine} className="absolute w-full inset-0 z-0" />
      <div className="relative flex items-center justify-center pt-8 md:pt-20 z-10">
        <div className="flex flex-col w-1/2">
          <Image src={logo} />
          <p className="justify-self-end text-2xl md:text-6xl text-white font-bold">
            COMING SOON
          </p>
          <p className="text-xl md:text-3xl text-cutie-orange font-bold">
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
