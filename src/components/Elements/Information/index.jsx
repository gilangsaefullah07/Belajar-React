const Information = (props) => {
  const { title, children } = props;
  return (
    <div class="flex flex-col gap-2 hidden md:inline-flex">
      <p class="font-bold">{title}</p>
      {children}
    </div>
  );
};

export default Information;
