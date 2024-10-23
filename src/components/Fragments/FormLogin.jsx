import InputForm from "../Elements/input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="" method="" className="flex flex-col gap-4">
      <InputForm
        title="Email"
        type="email"
        id="email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        title="Password"
        type="password"
        id="password"
        placeholder="****"
      ></InputForm>
      <Button background="bg-blue-600" text="text-white">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
