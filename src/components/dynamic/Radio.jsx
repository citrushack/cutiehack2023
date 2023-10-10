const Radio = ({
  text,
  field,
  options,
  user,
  setUser,
  editable = true,
  required,
}) => {
  const handleClick = (option) => {
    setUser({ ...user, [field]: option });
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {text}
        <span className="text-hackathon-green-300">{required && " *"}</span>
      </p>
      {!editable && <div className="pl-3">{user[field]}</div>}
      {editable && (
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 w-full">
          {options.map((option, index) => (
            <div
              className="flex items-center whitespace-nowrap hover:cursor-pointer"
              key={index}
              onClick={() => handleClick(option)}
            >
              <div className="rounded-full w-4 border-white border-2 aspect-square bg-transparent p-[2px] mr-1">
                <div
                  className={`rounded-full w-full aspect-square duration-100 ${
                    option === user[field] ? "bg-white" : "bg-transparent"
                  }`}
                />
              </div>

              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radio;
