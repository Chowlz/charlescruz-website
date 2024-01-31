import GitHubIcon from "@mui/icons-material/GitHub";
import FooterLink from "./Footer/FooterLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-20 border-t-2 border-l-transparent border-r-transparent border-t-primary-900 bg-primary-950/30 text-primary-50">
      <div className="container mx-auto flex place-items-end items-center justify-between px-6 py-4">
        <p>© 2024 Charles Cruz</p>
        <div className="flex">
          <FooterLink href="https://www.linkedin.com/in/charlesmejiacruz/">
            <LinkedInIcon className="scale-75" />
          </FooterLink>
          <FooterLink href="https://github.com/Chowlz">
            <GitHubIcon className="scale-75" />
          </FooterLink>
          <FooterLink href="mailto:mail@charlescruz.dev">
            <MailIcon className="scale-75" />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
