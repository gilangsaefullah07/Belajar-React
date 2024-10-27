import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const users = [
    {
      username: "admin@gmail.com",
      password: "password123",
    },
    {
      username: "user1@gmail.com",
      password: "password123",
    },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    console.log(username, password);
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      navigate("/home");
    } else {
      setErrorMassage("Username atau Password salah");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputForm
        title="Email"
        type="email"
        id="email"
        placeholder="example@gmail.com"
        onChange={(e) => setUsername(e.target.value)}
      ></InputForm>
      <InputForm
        title="Password"
        type="password"
        id="password"
        placeholder=""
        onChange={(e) => setPassword(e.target.value)}
      ></InputForm>
      {errorMassage && <p style={{ color: "red" }}>{errorMassage}</p>}
      <Button background="bg-green-500" text="text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
