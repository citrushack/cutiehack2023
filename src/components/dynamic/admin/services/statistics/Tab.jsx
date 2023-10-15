const Tab = ({ title, value }) => {
  return (
    <div className="text-center w-full text-white">
      <div
        data-cy={`${title}-tab`}
        className="font-karla pr-[3%] text-white text-2xl font-medium"
      >
        {title}
      </div>
      <div
        data-cy={`${title}-value`}
        className="font-karla pr-[3%] text-white text-5xl font-extrabold"
      >
        {value}
      </div>
    </div>
  );
};

export default Tab;
