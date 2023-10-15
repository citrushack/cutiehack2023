"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import Title from "../admin/Title.jsx";
import Team from "./Team";
import User from "./User";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(session.user);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const data = {};
    user.diet.forEach((option) => {
      data[option] = true;
    });
    setUser({ ...user, diet: data });
  }, []);
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3">
      <Title title="Dashboard" />
      <Header email={user.email} name={user.name} />
      <div className="grid grid-cols-2 h-full gap-3 justify-center">
        <User user={user} setUser={setUser} edit={edit} setEdit={setEdit} />
        {user.roles.participants === 1 && (
          <Team user={user} team={user.team} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
