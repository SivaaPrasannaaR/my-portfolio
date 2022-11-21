import React from "react"
import ShowData from "../common/contactMe/showData/ShowData"
import {
  backendSkills,
  databaseSkills,
  devToolsSkills,
  frontendSkills,
  programingSkills,
  testingFramework,
} from "./mySkills"
import styles from "./Skills.module.scss"

const Skills = () => {
  return (
    <section id="skills">
      <h2>Development Skills</h2>
      <div className={styles.skills__container}>
        {/* Front-end Development */}
        <ShowData title={"Front-end Development"} skills={frontendSkills} />

        {/* Backend Development */}
        <ShowData title={"Back-end Development"} skills={backendSkills} />

        {/* Database */}
        <ShowData title={"Database"} skills={databaseSkills} />

        {/* Testing Framework */}
        <ShowData title={"Testing Framework"} skills={testingFramework} />

        {/* Programing Language */}
        <ShowData title={"Programing Language"} skills={programingSkills} />

        {/* Tools */}
        <ShowData title={"Tools"} skills={devToolsSkills} />
      </div>
    </section>
  )
}

export default Skills
