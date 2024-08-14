import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage2.jpeg")}
          alt="me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I have been building full stack web applications for the last
                year using Java, JavaScript, React, Spring, Hibernate and MySQL.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            { <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a front edn developer using lots of tech that is techy.
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Program Director</h3>
              <p>
                Experience managing a team of 4 people and 15 staff in a remote
                setting. I was the main point of a accountability for the
                programs successes and failures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
