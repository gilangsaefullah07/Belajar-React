import Label from "./label";
import Input from "./input";

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
