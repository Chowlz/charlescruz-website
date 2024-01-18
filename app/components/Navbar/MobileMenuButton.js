import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const MobileMenuButton = (navbarOpen, setNavbarOpen) => {
  return (
    <div className="mobile-menu block md:hidden">
      {!navbarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="hover:text-secondary-600 text-primary-50 flex items-center rounded px-3 py-2"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="hover:text-secondary-600 text-secondary-400 flex items-center rounded px-3 py-2"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default MobileMenuButton;
