import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollButton) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="primary"
      size="md"
      className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg" // İsteğe bağlı özel stiller
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default ScrollToTopButton;
