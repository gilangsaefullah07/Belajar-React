const Avatar = (props) => {
  const { title } = props;
  return (
    <div className="flex items-center hidden md:inline-flex">
      <p class="block text-sm mr-2">{title}</p>
      <div class="py-2 px-2 rounded-md">
        <img src="../Avatar.png" alt="Not Found" />
      </div>
    </div>
  );
};

export default Avatar;
