import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <div className={styles.socials}>
          <a href="https://github.com/DanDev1004">
          <img
            src={getImageUrl("hero/github.png")}
            alt="github"
            className={styles.social}
          />
          </a>
          <a href="https://www.linkedin.com/in/dante-luque/">
          <img
            src={getImageUrl("hero/linkedin.png")}
            alt="linkedin"
            className={styles.social}
          />
          </a>
        </div>

        <h1 className={styles.title}>Hola, soy Dante</h1>
        <p className={styles.description}>
          +2 años de experiencia. Ingeniero de Software y Analista de Datos. Especializado en el desarrollo de aplicaciones web y móviles.
        </p>
        <div className={styles.Buttons}>
          <a href="mailto:dandeveloper1004@gmail.com"  className={styles.contactBtn}>
            Contáctame
          </a>
          <a href="" target="_blank" className={styles.cvBtn}>
            ver mi CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/hero.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/*
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      */}
    </section>
  );
};
