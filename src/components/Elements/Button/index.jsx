const Button = (props) => {
  const { children, background, text, type = "button" } = props;
  return (
    <button
      className={`w-full h-10 px-6 font-semibold rounded-md ${background} ${text}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
