import React, { useEffect, useState } from "react";
import styles from "./TypingEffect.module.css"; // Your CSS file

const TypingEffect = () => {
  const phrases = [
    "Java",
    "React",
    "JavaScript",
    "Spring",
    "Hibernate",
    "MySQL",
  ]; // List of programming languages
  const [currentPhrase, setCurrentPhrase] = useState(""); // Current phrase being typed
  const [index, setIndex] = useState(0); // Index for phrases
  const [isDeleting, setIsDeleting] = useState(false); // Track if we are deleting or typing
  const [color, setColor] = useState("");
  const typingSpeed = 150; // Speed of typing
  const deletingSpeed = 100; // Speed of deleting
  const pauseTime = 1000; // Time to wait before typing next phrase

  function getRandomColor() {
    const colors = ["#ff7eb3", "#57cff0", "#9b51e0", "#ff9e3f", "#d74b47"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]; // Return the color at that index
  }

  useEffect(() => {
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
      }
    } else {
      // Typing the current phrase
      if (currentPhrase.length < phrases[index].length) {
        timer = setTimeout(() => {
          setCurrentPhrase(phrases[index].slice(0, currentPhrase.length + 1)); // Add next character
        }, typingSpeed);
      } else {
        // Wait before deleting the phrase
        setTimeout(() => {
          setIsDeleting(true); // Start deleting after full phrase is typed
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer); // Cleanup the timeout when component unmounts
  }, [currentPhrase, isDeleting, index]);

  return (
    <p className={styles.description}>
      <span
        className={styles.typingText}
        style={{
          color: color, // Apply the random color here
        }}
      >
        {currentPhrase}
      </span>
    </p>
  );
};

export default TypingEffect;
