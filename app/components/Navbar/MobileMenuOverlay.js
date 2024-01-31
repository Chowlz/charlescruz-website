import { AnimatePresence, motion } from "framer-motion";
import NavbarLink from "./NavbarLink";
import React from "react";

const menuVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "100vh",
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileMenuOverlay = ({ links, open, handler }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 z-30 h-screen w-full bg-primary-950"
        >
          <div className="flex h-full flex-col items-center justify-center gap-4">
            {links.map((link, index) => (
              <div
                key={index}
                className="overflow-hidden"
                onClick={() => handler(false)}
              >
                <NavbarLink href={link.path} title={link.title} />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuOverlay;
