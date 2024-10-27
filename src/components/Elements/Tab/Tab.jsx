const Tab = (props) => {
  const { children, text, border, font, hover } = props;
  return (
    <a
      href="#"
      class={`whitespace-nowrap inline-block p-4 ${text} ${border} border-b-2 ${font} ${hover}`}
    >
      {children}
    </a>
  );
};

export default Tab;
