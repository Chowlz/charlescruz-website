import Link from "next/link";
import React from "react";

const FooterLink = ({ children, href }) => {
  return (
    <Link
      className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 p-1"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
