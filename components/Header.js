import { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/rick_and_morty_logo.svg";

const menuLinks = [
  {
    text: "Início",
    path: "/",
    marginRight: "mr-20",
  },
  {
    text: "Pesquisa",
    path: "/pesquisa",
    marginRight: "mr-20",
  },
  {
    text: "Favoritos",
    path: "/favoritos",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="py-2 sm:py-4 px-4 bg-cyan-900 text-white md:px-0">
      <div className="container flex justify-between">
        <Link href="/">
          <a className="flex">
            <Image src={logo} alt="Rick and morty in green text" />
          </a>
        </Link>
        <nav className="flex">
          <ol
            className={`absolute z-10 bg-cyan-900 top-14 right-0 sm:flex sm:static sm:w-auto ${
              open ? "w-fit" : "w-0"
            }`}
          >
            {menuLinks.map((item, index) => (
              <li key={index} className="pr-20 sm:pr-0">
                <NavLink
                  text={item.text}
                  path={item.path}
                  marginRight={item.marginRight}
                />
              </li>
            ))}
          </ol>
          <button
            onClick={handleMenu}
            className="block relative z-2 sm:hidden p-2"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
