import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-h-[80px]">
      <ul className="flex gap-2.5 items-center">
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          New & Notable
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Skin Care
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Hand & Body
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Home
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Hair
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Fragrance
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Kits & Travel
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Gifts
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Read
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Stores
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Facial Appointments
        </li>
        <li className="w-[36px] h-[38px] mt-[1px] flex items-center justify-center">
          <SearchIcon className="text-[26px]" />
        </li>
      </ul>
      <ul className="flex gap-2.5">
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Log in
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Cabinet
        </li>
        <li className="p-1 py-8 text-sm text-Suisse-Medium text-[#333333]">
          Cart
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
