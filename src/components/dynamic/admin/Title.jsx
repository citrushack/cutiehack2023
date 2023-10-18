const Title = ({ title }) => {
  return (
    <div data-cy={`${title}-title`} className="text-2xl font-karla pr-5">
      {title}
    </div>
  );
};

export default Title;
