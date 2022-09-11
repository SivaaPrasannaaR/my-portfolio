import React from "react"
import styles from "./about.module.scss"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import ContactMe from "../common/contactMe/ContactMe"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className={styles.aboutMe__textColor}>About Me</h2>

      <div className={styles.about__container}>
        <div className={styles.about__myPhoto}>
          <div className={styles.about__myPhoto_image}>
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className={styles.about__myContent}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            voluptatem unde libero, ipsum quasi sunt reiciendis quos inventore
            delectus? Modi praesentium provident repudiandae magnam est,
            exercitationem reprehenderit facilis voluptas mollitia.
          </p>
          <div className={styles.about__contactMe}>
            <ContactMe />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
