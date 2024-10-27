import Avatar from "../Avatar";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <nav class="flex p-4 bg-white border-b-2 border-gray-200 place-content-between items-center">
      <img src="../Logo.png" alt="not found" />
      <Avatar title="Kategori"></Avatar>
      <Menu></Menu>
    </nav>
  );
};

export default Navbar;
