const Title = ({ title }) => {
  return (
    <div
      data-cy={`${title}-title`}
      className="text-2xl font-extrabold pr-5 text-white hidden lg:block"
    >
      {title}
    </div>
  );
};

export default Title;
