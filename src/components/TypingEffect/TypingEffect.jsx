import React, { useEffect, useState } from "react";
import styles from "./TypingEffect.module.css"; // Your CSS file

const TypingEffect = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [words, setWords] = useState([]);
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseTime = 500;

  const getRandomColor = () => {
    const colors = ["#ff7eb3", "#57cff0", "#9b51e0", "#ff9e3f", "#d74b47"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    let timer;

    if (isDeleting) {
      // Deleting one character at a time
      if (currentPhrase.length > 0) {
        timer = setTimeout(() => {
          setCurrentPhrase((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to the next word after deleting
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    } else {
      // Typing one character at a time
      if (currentPhrase.length < phrases[index].length) {
        timer = setTimeout(() => {
          setCurrentPhrase((prev) => phrases[index].slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        // Add word with random color to the list and pause before deleting
        setWords((prevWords) => [
          ...prevWords,
          { text: phrases[index], color: getRandomColor() },
        ]);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, index, phrases]);

  return (
    <div className={styles.content}>
      <span className={styles.typingText} style={{ color: getRandomColor() }}>
        {currentPhrase}
      </span>
    </div>
  );
};

export default TypingEffect;
