"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MotionDiv from "./Hero/MotionDiv";
import React from "react";
import WhoAmI from "./Hero/WhoAmI";

const Hero = () => {
  return (
    <section className="my-0 lg:my-48">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <MotionDiv className="col-span-8 place-self-center justify-self-start text-left">
          <h4 className="bg-gradient-to-r from-secondary-200 to-secondary-900 bg-clip-text text-2xl font-extrabold text-transparent lg:text-4xl">
            Hi there!
          </h4>
          <h1 className="mt-2 text-4xl font-extrabold text-secondary-300 lg:mt-6 lg:text-6xl">
            I{"'"}m Charles Cruz
          </h1>
          <WhoAmI className="mt-2 text-4xl font-extrabold text-primary-50 lg:mt-6 lg:text-6xl" />
          <p className="extra-bold mt-2 text-2xl text-primary-100 lg:mt-6 lg:pr-10 lg:text-4xl">
            with a profound expertise in automation infrastructure and cloud
            technologies
          </p>
          <div className="mt-2 lg:mt-6">
            <Link
              className="my-2 inline-block w-full rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 px-6 py-3 text-center font-bold text-primary-50 lg:mx-5 lg:my-6 lg:w-fit"
              href="https://www.linkedin.com/in/charlesmejiacruz/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon /> Linkedin
            </Link>
            <Link
              className="my-2 inline-block w-full rounded-full border-2 border-secondary-500 bg-transparent px-6 py-3 text-center font-bold text-primary-50 hover:bg-primary-900 lg:my-6 lg:w-fit"
              href="https://drive.google.com/file/d/1Vej-R57mvd-QfnSB711dyyx32856ZSDZ"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Link>
          </div>
        </MotionDiv>
        <MotionDiv className="col-span-4 mt-6 place-self-center lg:mt-8">
          <Image
            src="/profile.png"
            alt="profile image"
            className="rounded-full"
            width={400}
            height={400}
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
