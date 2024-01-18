import React from "react";
import NavbarLink from "./NavbarLink";

const MobileMenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavbarLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuOverlay;
