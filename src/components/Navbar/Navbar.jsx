import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { getImageURL } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/</nav>">
        Jeff Podmayer
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageURL("nav/menuIcon.png")}
          alt="menu-button"
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contactt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
