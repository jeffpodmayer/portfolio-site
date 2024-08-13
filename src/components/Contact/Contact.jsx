import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:jeff.podmayer@gmail.com">jeff.podmayer@gmail.com</a>
        </li>
        <li>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="https://github.com/jeffpodmayer">github.com/jeffpodmayer</a>
        </li>
        <li>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jeffpodmayer/">
            linkedin.com/jeffpodmayer
          </a>
        </li>
      </ul>
    </footer>
  );
};
