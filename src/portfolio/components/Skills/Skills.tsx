import React from "react"
import ShowData from "../common/contactMe/showData/ShowData"
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
        <ShowData title={"Front-end Development"} skills={frontendSkills} />

        {/* Backend Development */}
        <ShowData title={"Back-end Development"} skills={backendSkills} />

        {/* Programing Language */}
        <ShowData title={"Programing Language"} skills={programingSkills} />

        {/* Development Tools */}
        <ShowData title={"Development Tools"} skills={devToolsSkills} />
      </div>
    </section>
  )
}

export default Skills
