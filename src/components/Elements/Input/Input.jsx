const Input = (props) => {
  const { type, placeholder, id, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      id={id}
    ></input>
  );
};

export default Input;
