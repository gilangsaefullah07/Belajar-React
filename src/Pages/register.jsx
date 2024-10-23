import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Login" subtitle="Welcome Please Enter Your Details">
      <FormRegister></FormRegister>
      <div className="flex flex-row gap-1 justify-center">
        <p className="text-sm text-center">Sudah punya akun?</p>
        <Link to="/Login" className=" text-sm font-bold text-blue-600">
          Masuk Disini
        </Link>
      </div>
    </AuthLayouts>
  );
};

export default RegisterPage;
