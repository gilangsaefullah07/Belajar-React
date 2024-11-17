const Information = (props) => {
  const { title, children } = props;
  return (
    <div className="flex flex-col gap-2 hidden md:inline-flex">
      <p className="font-bold">{title}</p>
      {children}
    </div>
  );
};

export default Information;
