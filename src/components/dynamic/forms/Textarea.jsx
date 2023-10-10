import { useState } from "react";
import { FaPencil, FaCheck } from "react-icons/fa6";

const Textarea = ({
  name,
  rows,
  title,
  placeholder,
  value,
  user,
  setUser,
  maxLength,
  editable = false,
}) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">{title}</p>
      {editable && !edit && (
        <FaPencil className="hover:cursor-pointer" onClick={handleEdit} />
      )}
      {editable && edit && (
        <FaCheck className="hover:cursor-pointer" onClick={handleSave} />
      )}
      <textarea
        data-cy={`${title}-textarea`}
        disabled={editable && !edit}
        className="border-[1px] mt-2 border-white bg-transparent rounded-lg px-3 py-2 w-full focus:outline-none placeholder:text-hackathon-gray-200 resize-none"
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
