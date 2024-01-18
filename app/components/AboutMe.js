"use client";

import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./AboutMe/TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Clojure</li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Amazon Web Services</li>
        <li>Kubernetes</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of California, San Diego</li>
        <li>Bachelor{"'"}s degree, Computer Science</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [_, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-primary-50 my-0 lg:my-24" id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/desk.png"
          className="self-start rounded-3xl"
          alt="Desk"
          width={500}
          height={500}
        />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="text-secondary-300 mb-4 text-4xl font-bold">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            As a full-stack software engineer, my expertise lies in crafting
            efficient, scalable solutions. My skill set spans a diverse range of
            technologies, including AWS, Github Actions, and Kubernetes. While
            Clojure is my primary language, I{"'"}m also well-versed in
            Javascript, Typescript, and Python. Known for my rapid learning
            ability, I{"'"}m continually expanding my technical repertoire. I
            excel in both independent work and collaborative projects, bringing
            enthusiasm and innovation to the creation of standout applications
            and services.
          </p>
          <div className="mt-8 flex flex-row items-start justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
