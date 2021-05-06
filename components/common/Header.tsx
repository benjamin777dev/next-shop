import React from "react";
import Link from "next/link";
import SearchDrawer from "components/common/SearchDrawer";
import MenuList from "components/common/MenuList";
import MenuButton from "components/common/MenuButton";
import { bagIcon } from "components/common/Icon";
import { Collapse } from "@material-ui/core";

const Header: React.FC = () => {
  const [opened, setOpened] = React.useState(false);

  const toggleAccordion = (opened: boolean) => {
    setOpened(opened);
  };

  return (
    <header className="header border-b border-gray-200">
      <div className="header__inner container items-center flex justify-between md:grid md:grid-cols-3 xl:max-w-none xl:px-14">
        <div className="header__logo text-left mt-3 md:mt-6 mb-3 md:mb-6 ">
          <Link href="/">
            <a className="font-semibold text-lg md:text-xl text-gray-800 hover:text-opacity-70 tracking-widest">
              SAMPLE-KUMA-STORE1
            </a>
          </Link>
        </div>

        <MenuList visibility="hidden md:block" />

        <div className="header__icons flex items-center justify-end">
          <SearchDrawer />

          <Link href="/cart">
            <a className="bag inline-block p-2 text-gray-700">{bagIcon}</a>
          </Link>
          <MenuButton opened={opened} toggleAccordion={toggleAccordion} />
        </div>
      </div>

      <Collapse in={opened}>
        <MenuList visibility="md:hidden block" />
      </Collapse>
    </header>
  );
};

export default Header;
