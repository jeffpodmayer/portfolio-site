import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Jeff</h1>
        <p className={styles.description}>
          I’m a full-stack developer with experience in Java, JavaScript, React,
          Spring, Hibernate and MySQL databases.
        </p>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero"
        className={styles.heroImg}
      /> */}
    </section>
  );
};
