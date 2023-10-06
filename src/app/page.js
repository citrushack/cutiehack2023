import Release from "@/components/Release";
import ComingSoon from "@/components/static/upcoming/Upcoming";
import { RELEASES } from "@/data/Release";

const Home = () => {
  return (
    <div className="bg-cutie-blue-300 w-full">
      <Release release={RELEASES.comingsoon}>
        <ComingSoon />
      </Release>
    </div>
  );
};

export default Home;
