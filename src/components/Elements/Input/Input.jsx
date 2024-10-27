const Input = (props) => {
  const { type, placeholder, id, name, onChange } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full h-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={id}
      onChange={onChange}
    ></input>
  );
};

export default Input;
