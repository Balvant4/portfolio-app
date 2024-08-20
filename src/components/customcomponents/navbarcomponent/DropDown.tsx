import React from "react";
import Link from "next/link";

function DropdownMenu({
  dropdownOpen,
  toggleDropdown,
  closeMenu,
  isActive,
}: any) {
  return (
    <li className="relative">
      <button
        id="dropdownButton"
        className={`flex items-center justify-between w-full py-2 px-3 rounded ${
          isActive
            ? "text-white bg-textcolor md:bg-transparent md:text-textcolor md:border-b-2 md:border-textcolor"
            : "text-gray-900 md:text-textcolor md:hover:text-textcolor"
        }`}
        onClick={toggleDropdown}
      >
        Projects
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownMenu"
        className={`z-10 ${
          dropdownOpen ? "block" : "hidden"
        } font-normal bg-[#000] text-[#fff] divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link
              href="/projects/allprojects"
              className="block px-4 py-2 text-gray-100 hover:bg-slate-400"
              onClick={closeMenu}
            >
              All Projects
            </Link>
          </li>
          <li>
            <Link
              href="/projects/frontendprojects"
              className="block px-4 py-2 text-gray-100 hover:bg-slate-400"
              onClick={closeMenu}
            >
              Frontend Projects
            </Link>
          </li>
          <li>
            <Link
              href="/projects/backendprojects"
              className="block px-4 py-2 text-gray-100 hover:bg-slate-400"
              onClick={closeMenu}
            >
              Backend Projects
            </Link>
          </li>
          <li>
            <Link
              href="/projects/mernprojects"
              className="block px-4 py-2 text-gray-100 hover:bg-slate-400"
              onClick={closeMenu}
            >
              MERN Projects
            </Link>
          </li>
          <li>
            <Link
              href="/projects/nextjsprojects"
              className="block px-4 py-2 text-gray-100 hover:bg-slate-400"
              onClick={closeMenu}
            >
              Nextjs Projects
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default DropdownMenu;
