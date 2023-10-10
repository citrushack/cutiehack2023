import Dropdown from "react-bootstrap/Dropdown";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
const Toggle = ({ onClick, show, user, field, placeholder }) => {
  return (
    <button
      onClick={onClick}
      id="dropdown-toggle"
      className={`!bg-transparent ${
        user[field] ? "text-white" : "!text-hackathon-gray-200"
      } w-full !text-left !border-x-0 !border-t-0 !border-b-[1px] !rounded-none !border-white py-1 justify-between flex items-center`}
    >
      {user[field] || placeholder}
      <RiArrowDownSLine
        className={`${show && "rotate-180"} duration-300`}
        data-cy="dropdown-arrow"
      />
    </button>
  );
};
const Select = ({
  options,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  required,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {title}
        <span className="text-hackathon-green-300">{required && " *"}</span>
      </p>
      <Dropdown onToggle={() => setShow(!show)} className="w-full m-0">
        {editable ? (
          <Dropdown.Toggle
            show={show}
            as={Toggle}
            user={user}
            placeholder={placeholder}
            field={field}
          />
        ) : (
          <div
            id="dropdown-toggle"
            className={`placeholder:text-hackathon-gray-200 ${
              user[field] ? "text-white" : "!text-hackathon-placeholder"
            } w-full pl-3 !border-x-0 !border-t-0 ${
              editable ? "!border-b-2" : "border-0"
            } !rounded-none !border-black`}
          >
            {user[field] || placeholder}
          </div>
        )}
        {editable && (
          <Dropdown.Menu className="w-full !bg-black/50 backdrop-blur-sm !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]">
            {options.map((option, index) => (
              <Dropdown.Item
                className=" hover:!bg-cutie-blue-200 !bg-gradient-to-r from-black/20 overflow-hidden !text-white"
                key={index}
                onClick={() => setUser({ ...user, [field]: option })}
              >
                {option}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default Select;
