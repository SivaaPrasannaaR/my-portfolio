import React from "react"
import SkillsDetail from "../../../Skills/SkillsDetail"
import styles from "./showData.module.scss"

const ShowData = (props: any) => {
  const { title, skills, isOneColumn } = props
  return (
    <div className={styles.showData__container}>
      <div className={styles.skill__title}>
        <h3>{title}</h3>
      </div>
      <div
        className={`${styles.skills__content} ${
          isOneColumn ? "" : styles.skills__content__column_2
        }`}
      >
        {skills.map((item: any) => {
          return (
            <SkillsDetail
              key={item.skill}
              item={item}
              isOneColumn={isOneColumn}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShowData
