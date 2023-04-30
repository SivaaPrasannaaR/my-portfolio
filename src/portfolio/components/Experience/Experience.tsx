import styles from "./Experience.module.scss"
import TimeLineBox from "./timeline/TimeLineBox"
import { VakenExperience } from "./myExperience"
import vaken from "../../assets/vaken.png"

const Experience = () => {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className={styles.experience__container}>
        <div>
          <div className={styles.companyName}>
            <img src={vaken} alt="logo" className={styles.companyLogo} />
            <h2>Vaken Technology</h2>
          </div>
          <div className={styles.timeLineBox_container}>
            {VakenExperience.map((exp) => {
              return (
                <TimeLineBox
                  summary={exp.summary}
                  technologyUsed={exp.technologyUsed}
                  myRole={exp.myRole}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
