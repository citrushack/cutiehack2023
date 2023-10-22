const Error = ({ code, error, message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-6xl font-extrabold text-white m-0">{code}</p>
      <p className="text-lg md:text-2xl font-bold text-white m-0">{error}</p>
      <p className="text-sm md:text-lg text-white m-0">{message}</p>
    </div>
  );
};

export default Error;
