import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Jeff Podmayer. All rights reserved.
        </p>
      </div>
      <div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a
              className={styles.mailToLogo}
              href="mailto:jeff.podmayer@gmail.com"
            >
              <img src="/assets/contact/emailIcon.png" alt="email icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a
              className={styles.githubLogo}
              href="https://github.com/jeffpodmayer"
            >
              <img src="../../../assets/nav/githubLogo.png" alt="GitHub icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a
              className={styles.linkedInLogo}
              href="https://www.linkedin.com/in/jeffpodmayer/"
            >
              <img
                src="../../../assets/nav/linkedInLogo.png"
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
