const AuthLayouts = (props) => {
  const { title, subtitle, children } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex flex-col gap-4 w-full max-w-md border p-4 m-12 rounded-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm font-medium text-slate-500">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
