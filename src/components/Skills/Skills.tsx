import React from "react"
import {
  backendSkills,
  devToolsSkills,
  frontendSkills,
  programingSkills,
} from "./mySkills"
import styles from "./Skills.module.scss"
import SkillsDetail from "./SkillsDetail"

const Skills = () => {
  return (
    <section id="skills">
      <h2>Development Skills</h2>
      <div className={styles.skills__container}>
        {/* Front-end Development */}
        <div>
          <div className={styles.skill__title}>
            <h3>Front-end Development</h3>
          </div>
          <div className={styles.skills__content}>
            {frontendSkills.map((item) => {
              return <SkillsDetail key={item.skill} item={item} />
            })}
          </div>
        </div>

        {/* Backend Development */}
        <div>
          <div className={styles.skill__title}>
            <h3>Back-end Development</h3>
          </div>
          <div className={styles.skills__content}>
            {backendSkills.map((item) => {
              return <SkillsDetail key={item.skill} item={item} />
            })}
          </div>
        </div>

        {/* Programing Language */}
        <div>
          <div className={styles.skill__title}>
            <h3>Programing Language</h3>
          </div>
          <div className={styles.skills__content}>
            {programingSkills.map((item) => {
              return <SkillsDetail key={item.skill} item={item} />
            })}
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <div className={styles.skill__title}>
            <h3>Development Tools</h3>
          </div>
          <div className={styles.skills__content}>
            {devToolsSkills.map((item) => {
              return <SkillsDetail key={item.skill} item={item} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
