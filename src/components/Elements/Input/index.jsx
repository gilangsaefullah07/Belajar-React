import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, type, id, placeholder, onChange } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      ></Input>
    </div>
  );
};

export default InputForm;
