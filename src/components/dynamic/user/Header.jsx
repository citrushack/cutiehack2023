import Image from "next/image.js";
import { useSession } from "next-auth/react";
import Tag from "../admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";

const Header = ({ horizontal = true }) => {
  const { data: session } = useSession();

  const color =
    session.user.roles.participants === 1
      ? "green"
      : session.user.roles.participants === -1
      ? "red"
      : "yellow";

  const text =
    session.user.roles.participants === 1
      ? "accepted"
      : session.user.roles.participants === -1
      ? "rejected"
      : "pending";

  return (
    <div
      className={`flex ${
        horizontal ? "flex-row" : "flex-col"
      } items-center justify-center w-fit`}
    >
      <div className="border-[1px] border-white rounded-full p-1 w-fit mr-4">
        <Image
          src={session.user.image}
          width={125}
          height={125}
          alt="Picture of user's profile"
          className="rounded-full overflow-hidden border-2 border-white"
        />
      </div>
      <div className="align-left text-white font-karla">
        <p className="text-2xl mb-0">{session.user.name}</p>
        <p className="text-base mb-1">{session.user.email}</p>
        <Tag color={COLORS[color]} text={text} />
      </div>
    </div>
  );
};
export default Header;
