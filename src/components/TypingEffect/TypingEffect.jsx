import React, { useEffect, useState, useRef } from "react";
import styles from "./TypingEffect.module.css"; // Your CSS file

const TypingEffect = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [words, setWords] = useState([]);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 1000;

  const containerRef = useRef(null);

  const getRandomPosition = (containerWidth, containerHeight) => {
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;

    return {
      left: `${randomX}px`,
      top: `${randomY}px`,
    };
  };

  const getRandomColor = () => {
    const colors = ["#ff7eb3", "#57cff0", "#9b51e0", "#ff9e3f", "#d74b47"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let timer;

    if (isDeleting) {
      if (currentPhrase.length > 0) {
        timer = setTimeout(() => {
          setCurrentPhrase(currentPhrase.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsDeleting(false);
      }
    } else {
      if (currentPhrase.length < phrases[index].length) {
        timer = setTimeout(() => {
          setCurrentPhrase(phrases[index].slice(0, currentPhrase.length + 1));
        }, typingSpeed);
      } else {
        setWords((prevWords) => [
          ...prevWords,
          {
            text: phrases[index],
            position: getRandomPosition(containerWidth, containerHeight),
            color: getRandomColor(),
          },
        ]);
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, index]);

  return (
    <div className={styles.content}>
      {words.map((word, i) => (
        <span
          key={i}
          className={styles.typingText}
          style={{ color: word.color }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
