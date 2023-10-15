const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="font-karla text-2xl pr-[3%] text-white"
    >
      {title}
    </div>
  );
};

export default Title;
