import Image from "next/image";
import logo from "../../../../public/svg/logo.svg";
import shine from "../../../../public/svg/shine.svg";
import submarine from "../../../../public/svg/submarine.svg";
import bubble from "../../../../public/svg/bubble.svg";
import CountDown from "../Countdown";
import Link from "../Link";

const Upcoming = () => {
  return (
    <div className="relative font-karla w-full text-white min-h-screen flex flex-col items-center justify-center bg-cutie-blue-300">
      <Image src={shine} className="absolute w-full inset-0 z-0" />
      <div className="flex z-10 justify-center h-fit items-stretch w-10/12 sm:w-5/6 2xl:w-2/3">
        <div className="flex flex-col w-3/5 items-start">
          <Image
            src={logo}
            className="w-9/12 sm:w-2/3 md:w-1/2 h-full object-contain"
          />
          <p className="w-fit text-2xl sm:text-4xl md:text-6xl 2xl:text-9xl text-white font-bold mb-1">
            COMING SOON
          </p>

          <p className="text-xl md:text-3xl text-cutie-orange font-bold">
            November 18th, 2023
          </p>
        </div>
        <div className="w-2/5 h-full mt-5 relative">
          <Image
            src={submarine}
            className="w-9/12 h-full animate-jiggle-5.5s"
          />
          <Image
            src={bubble}
            className="absolute animate-jiggle-3s right-[15%] top-[40%] w-[5%]"
          />
          <Image
            src={bubble}
            className="absolute animate-jiggle-4s right-[5%] top-[30%] w-[8%]"
          />
          <Image
            src={bubble}
            className="absolute animate-jiggle-5s right-0 top-[50%] w-[12%]"
          />
        </div>
      </div>
      <div className="z-10 flex w-5/6 2xl:w-2/3 justify-center md:justify-start">
        <div className="flex flex-col items-center w-fit">
          <CountDown />
          <Link text="Sponsor" link="https://www.google.com/" />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
