import Link from "next/link";
import React from "react";

const NavbarLink = ({ href, title }) => {
  return (
    <Link
      className="text-primary-50 hover:text-secondary-600 block rounded py-2 pl-3 pr-4 sm:text-xl md:p-0"
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
