const Tab = ({ title, value }) => {
  return (
    <div className="text-center w-full text-white font-karla">
      <div data-cy={`${title}-tab`} className="text-2xl font-medium">
        {title}
      </div>
      <div data-cy={`${title}-value`} className="text-5xl font-extrabold">
        {value}
      </div>
    </div>
  );
};

export default Tab;
