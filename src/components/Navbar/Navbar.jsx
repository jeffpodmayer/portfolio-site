import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </div>
      <div className={styles.logosAndButton}>
        <a
          href="https://github.com/jeffpodmayer"
          target="_blank"
          className={styles.githubLogo}
        >
          <img
            className={styles.logo}
            src="/assets/nav/githubLogo.png"
            alt="Git Hub Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jeffpodmayer/"
          className={styles.linkedInLogo}
          alt="LinkedIn Logo"
          target="_blank"
        >
          <img className={styles.logo} src="/assets/nav/linkedInLogo.png" />
        </a>
        <a
          href="mailto:jeff.podmayer@gmail.com"
          className={styles.contactBtn}
          target="_blank"
        >
          {" "}
          Contact Me
        </a>
      </div>
    </nav>
  );
};
