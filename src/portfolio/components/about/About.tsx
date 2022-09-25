import React from "react"
import styles from "./about.module.scss"

import { FaAward } from "react-icons/fa"
import ContactMe from "../common/contactMe/ContactMe"
import ShowData from "../common/contactMe/showData/ShowData"
import { personalDetails } from "./personalDetails"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className={styles.aboutMe__textColor}>About Me</h2>

      <div className={styles.about__container}>
        <ShowData
          title={"Personal Details"}
          skills={personalDetails}
          isOneColumn={true}
        />

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
            To work in a challenging atmosphere by exhibiting my skills with
            utmost sincerity and dedicated smart work for the growth of your
            esteemed organisation along with mine.
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
