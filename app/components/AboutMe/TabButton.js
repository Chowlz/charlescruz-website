import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-secondary-300" : "text-secondary-50";

  return (
    <button onClick={selectTab}>
      <h5
        className={`hover:text-secondary-600 mr-3 font-semibold ${buttonClasses}`}
      >
        {children}
      </h5>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="bg-secondary-600 mr-3 mt-2 h-1"
      ></motion.div>
    </button>
  );
};

export default TabButton;
