import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import UserSection from "./ShowUserName";
import MobileMenuButton from "./MobileMenuBtn";
import NavItem from "./NavItem";
import DropdownMenu from "./DropDown";
import Image from "next/image";
import logo from "../../../../public/logo.png";

function NavbarContainer() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-headerback text-headertext fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-[10vh]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo} // Path to the image
            alt="Description of the image" // Alt text for accessibility
            width={100} // Desired width
            height={100} // Desired height
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <UserSection session={session} closeMenu={closeMenu} />
          <MobileMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <div
          className={`items-center justify-between ${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className=" bg-headerback flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  text-headertext">
            <NavItem
              href="/"
              label="Home"
              isActive={isActive("/")}
              closeMenu={closeMenu}
            />
            <NavItem
              href="/about"
              label="About"
              isActive={isActive("/about")}
              closeMenu={closeMenu}
            />
            <DropdownMenu
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
              closeMenu={closeMenu}
              isActive={isActive("/projects")}
            />
            <NavItem
              href="/blog"
              label="Blog"
              isActive={isActive("/blog")}
              closeMenu={closeMenu}
            />
            <NavItem
              href="/contact"
              label="Contact"
              isActive={isActive("/contact")}
              closeMenu={closeMenu}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarContainer;
