import Tab from "./Tab";

const ListTab = () => {
  return (
    <ul className="flex">
      <li>
        <Tab text="text-red-500" border="border-red-500" font="font-bold">
          Semua Kelas
        </Tab>
      </li>
      <li>
        <Tab
          border="border-transparent"
          hover="hover:text-gray-400 hover:border-gray-300"
        >
          Pemasaran
        </Tab>
      </li>
      <li>
        <Tab
          border="border-transparent"
          hover="hover:text-gray-400 hover:border-gray-300"
        >
          Desain
        </Tab>
      </li>
      <li>
        <Tab
          border="border-transparent"
          hover="hover:text-gray-400 hover:border-gray-300"
        >
          Pengembangan Diri
        </Tab>
      </li>
      <li>
        <Tab
          border="border-transparent"
          hover="hover:text-gray-400 hover:border-gray-300"
        >
          Bisnis
        </Tab>
      </li>
    </ul>
  );
};

export default ListTab;
