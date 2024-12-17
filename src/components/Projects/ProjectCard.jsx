import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <div className={styles.details}>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li className={styles.skill} key={id}>
                {skill}
              </li>
            );
          })}
        </ul>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          <a className={styles.link} href={demo} target="_blank">
            {" "}
            Live Site
          </a>
          <a className={styles.link} href={source} target="_blank">
            {" "}
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};
