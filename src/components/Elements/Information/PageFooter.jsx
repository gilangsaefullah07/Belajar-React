const PageFooter = (props) => {
  const { children } = props;
  return (
    <a class="text-gray-400 hover:text-green-500" href>
      {children}
    </a>
  );
};

export default PageFooter;
