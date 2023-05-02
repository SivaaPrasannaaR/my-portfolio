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
          isSkillType={false}
        />

        <div className={styles.about__myContent}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5 className={styles.textColor_white}>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5 className={styles.textColor_white}>
                Oracle Certified Associate
              </h5>
              <small>Java SE 8 Programmer</small>
            </article>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icons} />
              <h5 className={styles.textColor_white}>Infosys Certified</h5>
              <small>as Software Programmer</small>
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
