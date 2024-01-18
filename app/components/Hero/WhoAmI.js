"use client";

import { TypeAnimation } from "react-type-animation";
import React from "react";

const WhoAmI = ({ className }) => {
  return (
    <TypeAnimation
      className={className}
      sequence={[
        "Clojurist",
        1000,
        "Frontend Developer",
        1000,
        "Automation Engineer",
        1000,
        "Backend Developer",
        1000,
        "DevOps Engineer",
        1000,
        "Software Engineer",
        1000,
      ]}
      wrapper="h1"
      speed={25}
      repeat={Infinity}
    />
  );
};

export default WhoAmI;
