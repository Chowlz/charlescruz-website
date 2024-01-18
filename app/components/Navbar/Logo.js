import Link from "next/link";
import React from "react";

const logo = "( )";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-primary-50 text-2xl font-semibold md:text-5xl"
    >
      {logo}
    </Link>
  );
};

export default Logo;
