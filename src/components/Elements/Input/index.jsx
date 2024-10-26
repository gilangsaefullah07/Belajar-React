import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, type, id, placeholder } = props;
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{title}</Label>
      <Input type={type} placeholder={placeholder} id={id}></Input>
    </div>
  );
};

export default InputForm;
