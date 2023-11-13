"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../../public/svg/logo.svg";
import shine from "../../../../../public/svg/shine.svg";
import submarine from "../../../../../public/svg/submarine.svg";
import bubble from "../../../../../public/svg/bubble.svg";
import Countdown from "../../Countdown";
import Apply from "../Apply";
import { signIn, useSession } from "next-auth/react";
import Link from "../../Link";

const Landing = () => {
  const { data: session } = useSession();
  return (
    <div className="relative font-karla w-full text-white flex flex-col items-center justify-center bg-cutie-blue-300 mb-[8vh]">
      <Image src={shine} alt="shine" className="absolute w-full inset-0 z-0" />

      <div className="mt-[10vh] flex flex-col md:flex-row z-10 justify-center h-fit items-center md:items-stretch w-10/12 sm:w-5/6 2xl:w-2/3">
        <div className="flex flex-col w-3/5 items-center md:items-start">
          <Image
            src={logo}
            alt="logo"
            className="w-9/12 sm:w-2/3 md:w-1/2 h-full object-contain"
          />
          <p className="text-base md:text-3xl text-cutie-orange font-bold my-1 md:my-3">
            November 18th, 2023
          </p>
        </div>
        <div className="hidden md:block w-2/5 h-full relative">
          <Image
            src={submarine}
            alt="submarine"
            className="w-9/12 h-full animate-jiggle-5.5s"
          />
          <Image
            src={bubble}
            alt="bubble"
            className="absolute animate-jiggle-3s right-[15%] top-[40%] w-[5%]"
          />
          <Image
            src={bubble}
            alt="bubble"
            className="absolute animate-jiggle-4s right-[5%] top-[30%] w-[8%]"
          />
          <Image
            src={bubble}
            alt="bubble"
            className="absolute animate-jiggle-5s right-0 top-[50%] w-[12%]"
          />
        </div>
      </div>
      <div className="z-10 mt-4 mb-2 flex w-5/6 2xl:w-2/3 justify-center md:justify-start">
        <Countdown />
      </div>
      <div className="z-10 mb-4 flex w-5/6 2xl:w-2/3 justify-center md:justify-start">
        <div className="flex flex-col items-center gap-2 md:gap-3 w-fit">
          {session &&
          Object.keys(session.user.roles).includes("participants") ? (
            <Link text="dashbaord" link="/user" />
          ) : (
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <Link
                text="login"
                onClick={() => {
                  signIn("google");
                }}
              />
              <Apply text="Participate" link="/form/participant" />
            </div>
          )}
          <div className="flex items-center gap-3 w-fit">
            <Apply text="Mentor" link="/form/mentor" />
            <Apply text="Volunteer" link="/form/volunteer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
