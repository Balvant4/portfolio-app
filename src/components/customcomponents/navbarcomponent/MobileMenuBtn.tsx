import React from "react";

function MobileMenuButton({ menuOpen, toggleMenu }: any) {
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-headertext rounded-lg md:hidden hover:headerback focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-sticky"
      aria-expanded={menuOpen ? "true" : "false"}
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}

export default MobileMenuButton;
