import SkillsDetail from "../../../Skills/SkillsDetail"
import styles from "./showData.module.scss"

type ShowDataType = {
  title: any
  skills: any
  isSkillType?: boolean
}

const ShowData = (props: ShowDataType) => {
  const { title, skills, isSkillType } = props
  return (
    <div className={styles.showData__container}>
      <div className={styles.skill__title}>
        <h3>{title}</h3>
      </div>
      <div
        className={`${styles.skills__content} ${
          isSkillType === false ? "" : styles.skills__content__column_2
        }`}
      >
        {skills.map((item: any) => {
          return (
            <SkillsDetail
              key={item.skill}
              item={item}
              isSkillType={isSkillType ?? true}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShowData
