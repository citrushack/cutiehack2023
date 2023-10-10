const Input = ({
  name,
  type,
  title,
  placeholder,
  value,
  user,
  setUser,
  editable = true,
  maxLength,
  required,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-1 font-semibold">
        {title}
        <span className="text-red-500">{required && " *"}</span>
      </p>
      <input
        disabled={!editable}
        className="truncate disabled:border-0 border-b-2 border-white pl-3 pb-1 w-full focus:outline-none placeholder:text-hackathon-gray-200 bg-transparent"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        data-cy={`${name}-input`}
      />
    </div>
  );
};

export default Input;
