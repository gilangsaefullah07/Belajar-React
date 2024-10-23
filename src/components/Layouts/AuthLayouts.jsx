const AuthLayouts = (props) => {
  const { title, subtitle, children } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col gap-4 w-full max-w-xs border p-4 m-12 rounded-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
          <p className="font-medium text-slate-500">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
