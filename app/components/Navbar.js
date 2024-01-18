"use client";

import Logo from "./Navbar/Logo";
import MobileMenuButton from "./Navbar/MobileMenuButton";
import MobileMenuOverlay from "./Navbar/MobileMenuOverlay";
import NavbarLink from "./Navbar/NavbarLink";
import React, { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 mx-auto border-b-2 border-primary-900 bg-primary-950 bg-opacity-100">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Logo />
        {MobileMenuButton(navbarOpen, setNavbarOpen)}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenuOverlay links={links} /> : null}
    </nav>
  );
};

export default Navbar;
