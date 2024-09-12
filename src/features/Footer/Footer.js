import React from "react";
import FooterMenu from "./components/FooterMenu";
import NewsletterSection from "./components/NewsletterSection";
import CopyrightBar from "./components/CopyrightBar";

const Footer = () => {
  return (
    <>
      <NewsletterSection />
      <FooterMenu />
      <CopyrightBar />
    </>
  );
};

export default Footer;
