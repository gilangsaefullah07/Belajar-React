import Label from "./Label";
import SelectPhone from "./SelectPhone";

const Phone = (props) => {
  const { title, type, id, placeholder } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{title}</Label>
      <SelectPhone type={type} placeholder={placeholder} id={id}></SelectPhone>
    </div>
  );
};

export default Phone;
