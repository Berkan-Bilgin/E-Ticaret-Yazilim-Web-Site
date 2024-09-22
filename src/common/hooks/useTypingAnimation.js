import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useTypingAnimation = (fullText, speed = 75, deleteSpeed = 30) => {
  const [animatedText, setAnimatedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    const resetAnimation = () => {
      setAnimatedText(fullText);
      setIsDeleting(false);
      setIndex(0);
    };

    resetAnimation();
  }, [isDesktopOrLaptop]);

  useEffect(() => {
    if (!isDesktopOrLaptop) return;

    const handleTyping = () => {
      setAnimatedText(fullText.substring(0, index));

      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // 1 saniye durma süresi
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }

      const newIndex = isDeleting ? index - 1 : index + 1;
      setIndex(newIndex);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting, typingSpeed, isDesktopOrLaptop, fullText]);

  useEffect(() => {
    if (isDeleting) {
      setTypingSpeed(deleteSpeed); // Silme hızı
    } else {
      setTypingSpeed(speed); // Yazma hızı
    }
  }, [isDeleting, speed, deleteSpeed]);

  return animatedText;
};
