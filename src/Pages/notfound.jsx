import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col gap-2 justify-center min-h-screen items-center">
      <h1 className="font-bold text-xl">Oops!</h1>
      <p>Sorry, halaman yang kamu cari tidak ditemukan</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
