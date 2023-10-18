import React from "react";

const Error = ({ code, error, message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl font-extrabold text-cutie-blue-100 m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-white m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-cutie-blue-100/80 m-0">
        {message}
      </p>
    </div>
  );
};

export default Error;
