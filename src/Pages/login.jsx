import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" subtitle="Welcome Please Enter Your Details">
      <FormLogin></FormLogin>
      {/* <div>{products.description}</div> */}
      <div className="flex flex-row gap-1 justify-center">
        <p className="text-sm text-center">Tidak punya akun?</p>
        <Link to="/Register" className=" text-sm font-bold text-green-500">
          Daftar Disini
        </Link>
      </div>
    </AuthLayouts>
  );
};

export default LoginPage;
