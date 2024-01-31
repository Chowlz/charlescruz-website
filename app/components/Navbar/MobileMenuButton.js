import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const MobileMenuButton = (navbarOpen, setNavbarOpen) => {
  const handler = navbarOpen
    ? () => setNavbarOpen(false)
    : () => setNavbarOpen(true);

  const className = navbarOpen
    ? "flex items-center rounded px-3 py-2 text-secondary-400 hover:text-secondary-600"
    : "flex items-center rounded px-3 py-2 text-primary-50 hover:text-secondary-600";

  return (
    <div className="mobile-menu block md:hidden">
      <button onClick={handler} className={className}>
        <MenuIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MobileMenuButton;
