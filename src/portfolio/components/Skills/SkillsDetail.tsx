import styles from "./Skills.module.scss"
import { BsPatchCheckFill } from "react-icons/bs"
import { SkillLevelValueType, skillLevel } from "../../constants/mySkills"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

type ItemTypes = {
  item: any
  isSkillType: boolean
}

const getStarLevel = (level: SkillLevelValueType) => {
  const fSize = 16
  switch (level) {
    case skillLevel.level_1:
      return (
        <div>
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
          <StarBorderIcon sx={{ fontSize: fSize }} />
          <StarBorderIcon sx={{ fontSize: fSize }} />
        </div>
      )
    case skillLevel.level_2:
      return (
        <div>
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
          <StarBorderIcon sx={{ fontSize: fSize }} />
        </div>
      )
    case skillLevel.level_3:
      return (
        <div>
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
          <StarIcon sx={{ color: "orange", fontSize: fSize }} />
        </div>
      )
  }
}

const SkillsDetail = (props: ItemTypes) => {
  const { item, isSkillType } = props
  return (
    <>
      <article className={styles.skills__details}>
        <BsPatchCheckFill className={styles.skills__details_icon} />
        <div>
          <h5 className={styles.textColor_white}>{item.skill}</h5>
          <small className={styles.text_light}>
            {isSkillType && item.level ? getStarLevel(item.level) : ""}
            {!isSkillType && item.level ? item.level : ""}
          </small>
        </div>
      </article>
    </>
  )
}

export default SkillsDetail
