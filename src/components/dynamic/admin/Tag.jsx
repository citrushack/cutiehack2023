const Tag = ({ color, text, onClick, classes, statuses, wrap }) => {
  return (
    <div
      data-cy={`${text}-tag`}
      className={`${classes} ${color.background} ${color.text} ${
        onClick && `hover:cursor-pointer ${color.hover}`
      } ${
        !wrap && "whitespace-nowrap"
      } px-2 py-0.5 rounded text-xs md:text-sm w-fit m-0 font-bold`}
      onClick={onClick}
    >
      {isNaN(text) || !statuses ? text : statuses[text]}
    </div>
  );
};

export default Tag;
