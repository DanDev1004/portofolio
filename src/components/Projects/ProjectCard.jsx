import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, code, frontend, backend },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
                <img
                  src={getImageUrl("skills/" + skill.toLowerCase() + ".png")}
                  alt="skill"
                  className={styles.SkillImage}
                />
                {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>

        {demo && (
          <a href={demo} target="_blank" className={styles.link}>
            Demo
          </a>
        )}

        {code && (
          <a href={code} target="_blank" className={styles.link}>
            code
          </a>
        )}

        {frontend && (
          <a href={frontend} target="_blank" className={styles.link}>
            frontend
          </a>
        )}

        {backend && (
          <a href={backend} target="_blank" className={styles.link}>
            backend
          </a>
        )}

      </div>
    </div>
  );
};
