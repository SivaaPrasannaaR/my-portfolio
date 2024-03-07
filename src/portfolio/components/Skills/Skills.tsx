import ShowData from "../common/contactMe/showData/ShowData"
import {
  backendSkills,
  databaseSkills,
  devToolsSkills,
  frontendSkills,
  libraryKnown,
  programingSkills,
  testingFramework,
} from "../../constants/mySkills"
import styles from "./Skills.module.scss"

const Skills = () => {
  return (
    <section id="skills">
      <h2>Development Skills</h2>
      <div className={styles.skills__container}>
        {/* Front-end Development */}
        <ShowData title={"Front-end Development"} skills={frontendSkills} />

        {/* React and JS library Known */}
        <ShowData title={"Library"} skills={libraryKnown} />

        {/* Programing Language */}
        <ShowData title={"Programing Language"} skills={programingSkills} />

        {/* Backend Development */}
        <ShowData title={"Back-end Development"} skills={backendSkills} />

        {/* Database */}
        <ShowData title={"Database"} skills={databaseSkills} />

        {/* Testing Framework */}
        <ShowData title={"Testing Framework"} skills={testingFramework} />

        {/* Tools */}
        <ShowData title={"Tools"} skills={devToolsSkills} />

        {/* Tech that are not in touch */}
        {/* <ShowData title={"Tech That are not in Touch"} skills={notInTouch} /> */}
      </div>
    </section>
  )
}

export default Skills
