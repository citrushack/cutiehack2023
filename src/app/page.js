"use client";
// import LoginButton from "@/components/LoginButton";
import Release from "@/components/Release";
import ComingSoon from "@/components/live/ComingSoon";
import { RELEASES } from "@/data/Release";

const Home = () => {
  return (
    <div className="bg-cutie-blue-300 w-full">
      <Release release={RELEASES.comingsoon}>
        <ComingSoon />
      </Release>
      {/* <LoginButton /> */}
    </div>
  );
};

export default Home;
