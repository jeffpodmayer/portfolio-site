import React, { useEffect, useState, useRef } from "react";
import styles from "./TypingEffect.module.css"; // Your CSS file

const TypingEffect = () => {
  const phrases = [
    "Java",
    "React",
    "JavaScript",
    "Spring",
    "Hibernate",
    "MySQL",
    "Leadership",
    "Teamwork",
    "Communication",
  ]; // List of programming languages
  const [currentPhrase, setCurrentPhrase] = useState(""); // Current phrase being typed
  const [index, setIndex] = useState(0); // Index for phrases
  const [isDeleting, setIsDeleting] = useState(false); // Track if we are deleting or typing
  const [color, setColor] = useState("");
  const typingSpeed = 150; // Speed of typing
  const deletingSpeed = 100; // Speed of deleting
  const pauseTime = 1000; // Time to wait before typing next phrase
  const [words, setWords] = useState([]);

  const containerRef = useRef(null);

  // Function to generate random positions within the container
  const getRandomPosition = (containerWidth, containerHeight) => {
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;

    return {
      left: `${randomX}px`,
      top: `${randomY}px`,
    };
  };

  function getRandomColor() {
    const colors = ["#ff7eb3", "#57cff0", "#9b51e0", "#ff9e3f", "#d74b47"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]; // Return the color at that index
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Ensure the container exists before proceeding

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let timer;

    if (!isDeleting && currentPhrase === "") {
      setColor(getRandomColor()); // Assign new color when starting to type a new phrase
    }

    if (isDeleting) {
      // Deleting the current phrase
      if (currentPhrase.length > 0) {
        timer = setTimeout(() => {
          setCurrentPhrase(currentPhrase.slice(0, -1)); // Remove last character
        }, deletingSpeed);
      } else {
        // After deletion, move to the next phrase
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Loop through phrases
        setIsDeleting(false); // Start typing again
        // setWordPosition(getRandomPosition(containerWidth, containerHeight)); // Set random position within container
      }
    } else {
      // Typing the current phrase
      if (currentPhrase.length < phrases[index].length) {
        timer = setTimeout(() => {
          setCurrentPhrase(phrases[index].slice(0, currentPhrase.length + 1)); // Add next character
        }, typingSpeed);
      } else {
        // Once typing is done, store the word and its position
        setWords((prevWords) => [
          ...prevWords,
          {
            text: phrases[index],
            position: getRandomPosition(containerWidth, containerHeight),
            color: getRandomColor(),
          },
        ]);
        // Wait before deleting the phrase
        setTimeout(() => {
          setIsDeleting(true); // Start deleting after full phrase is typed
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer); // Cleanup the timeout when component unmounts
  }, [currentPhrase, isDeleting, index]);

  return (
    <div ref={containerRef} className={styles.content}>
      <h1 className={styles.title}>Hey, I'm Jeff</h1>
      <p className={styles.description}>
        I have experience in...
        {words.map((word, i) => (
          <span
            key={i}
            className={styles.typingText}
            style={{
              color: word.color,
              position: "absolute", // Position the word absolutely within the container
              left: word.position.left,
              top: word.position.top, // Apply random position for each word
            }}
          >
            {word.text}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TypingEffect;
