import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img
        className={`${styles.image} ${
          title === "Rendezvous Reminder" ? styles.hutImage : ""
        }`}
        src={imageSrc}
        alt={title}
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
          <a
            className={`${styles.link} ${!demo ? styles.disabled : ""}`}
            href={demo}
            target="_blank"
          >
            {" "}
            {demo ? "Live Site" : "Not Live Yet!"}
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

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
