import React from "react";
import Link from "next/link";

function NavItem({ href, label, isActive, closeMenu }: any) {
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 px-3 rounded ${
          isActive
            ? "text-white bg-textcolor md:bg-transparent md:text-textcolor md:border-b-2 md:border-textcolor"
            : "text-headertext md:text-textcolor md:hover:text-textcolor"
        }`}
        onClick={closeMenu}
      >
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
