const error = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed text-white">
      <p className="text-6xl font-bold">404</p>
      <p className="text-lg md:text-2xl font-bold m-0">Page Not Found</p>
      <p className="text-sm md:text-lg">
        The page you are looking for does not seem to exist.
      </p>
    </div>
  );
};

export default error;
