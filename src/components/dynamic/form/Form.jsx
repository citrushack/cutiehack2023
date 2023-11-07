"use client";

import { useState } from "react";
import logo from "../../../../public/svg/logo.svg";
import Image from "next/image";
import Status from "./Status";
import Questions from "./Questions";
import Confirmation from "./Confirmation";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses,
  bypass = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1
  );

  return (
    <div className="w-full h-full overflow-scroll flex flex-col items-center font-poppins">
      <div className="w-10/12 md:w-1/3 my-5 flex flex-col items-center justify-cente">
        <Image src={logo} alt="Hackathon Logo" className="w-2/5" />
        <p className="text-xl bg-cutie-blue-100/20 text-white font-semibold px-4 py-3 rounded-t-xl m-0 w-full mt-3 font-karla">
          {header}
        </p>
        <div className="rounded-b-xl bg-cutie-gray-300/20 p-3 text-white font-karla">
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
              />
            ) : (
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
