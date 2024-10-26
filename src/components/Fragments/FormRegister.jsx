import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import Phone from "../Elements/Input/Phone";

const FormRegister = () => {
  return (
    <form action="" method="" className="flex flex-col gap-4">
      <InputForm
        title="Nama Lengkap"
        type="text"
        id="fullname"
        placeholder="example@gmail.com"
      ></InputForm>
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
      <Phone
        title="No. Hp"
        type="number"
        id="phone"
        placeholder="081xxxxx"
      ></Phone>
      <InputForm
        title="Konfirmasi Password"
        type="password"
        id="confirmpassword"
        placeholder="****"
      ></InputForm>
      <Button background="bg-blue-600" text="text-white">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
