import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImg.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.imgIcon} src={getImageUrl("about/rocket.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Inicios</h3>
              <p>
                Soy Dante Luque, empecé a programar en el 2020 usando el lenguaje C++.
                Desde entonces, amo el mundo de la programación y el avance de la tecnologia desde mi primera lección. <span className={styles.highlight}>'Si puedes imaginarlo, puedes programarlo' <a href="https://www.youtube.com/c/Programaci%C3%B3nATS" target="_blank" className={styles.references}>(aut: ATS )</a></span>
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img className={styles.imgIcon} src={getImageUrl("about/code.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Habilidad</h3>
              <p>
                Actualmente soy desarrollador Full Stack con experiencia en aplicaciones web responsivas, sistemas escalables, <span className={styles.highlight} >arquitecturas limpias y DDD</span>, integración de APIs, bases de datos relacionales y no relacionales.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img className={styles.imgIcon} src={getImageUrl("about/agile.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cooperación</h3>
              <p>
                He adquirido experiencia en trabajos colaborativos aplicando <span className={styles.highlight}>metodologias agiles como Scrum</span>.
              </p>
            </div>
          </li>


        </ul>
      </div>
    </section>
  );
};
