const Title = ({
  title,
  classes = "text-2xl font-extrabold pr-[3%] text-white",
}) => {
  return (
    <div data-cy={`${title}-title`} className={`${classes} `}>
      {title}
    </div>
  );
};

export default Title;
