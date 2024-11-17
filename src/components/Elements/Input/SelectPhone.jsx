import Input from "./Input";

const SelectPhone = (props) => {
  const { type, id, placeholder } = props;
  return (
    <div className="flex gap-3">
      <div className="flex border rounded-md">
        <div className="flex flex-shrink-0 p-2 bg-gray-200 border rounded-l-md tems-center">
          <img src="indonesia.svg" alt="not found"></img>
        </div>
        <select className="py-1 px-3 rounded-r-md">
          <option value="indonesia" className="text-sm">
            +62
          </option>
          <option value="malaysia" className="text-sm">
            +60
          </option>
          <option value="singapura" className="text-sm">
            +65
          </option>
        </select>
      </div>
      <div className="flex-1">
        <Input type={type} placeholder={placeholder} id={id}></Input>
      </div>
    </div>
  );
};

export default SelectPhone;
