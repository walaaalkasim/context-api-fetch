import { useContext } from "react";

import MyContext from "../context/MyContext";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";

const Header = () => {
  const context = useContext(MyContext);
  const { headerLogo } = context;

  return (
    <header>
      <h2>{headerLogo}</h2>
      <SearchInput />
      <DropDown />
    </header>
  );
};

export default Header;
