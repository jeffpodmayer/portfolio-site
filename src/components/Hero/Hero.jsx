import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import TypingEffect from "../TypingEffect/TypingEffect";

export const Hero = () => {
  const phrases = [
    "Java",
    "React",
    "JavaScript",
    "Spring",
    "Hibernate",
    "MySQL",
    "AWS",
    "TypeScript",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Jeff</h1>
        <p className={styles.description}>I have experience in...</p>
        <div className={styles.typingEffect}>
          <TypingEffect phrases={phrases} />
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero"
        className={styles.heroImg}
      />
    </section>
  );
};
