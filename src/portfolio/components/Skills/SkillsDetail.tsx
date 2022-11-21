import React from "react"
import styles from "./Skills.module.scss"
import { BsPatchCheckFill } from "react-icons/bs"

type itemTypes = {
  item: any
}

const SkillsDetail = (props: itemTypes) => {
  const { item } = props
  return (
    <>
      <article className={styles.skills__details}>
        <BsPatchCheckFill className={styles.skills__details_icon} />
        <div>
          <h5 className={styles.textColor_white}>{item.skill}</h5>
          <small className={styles.text_light}>
            {item.level ? item.level : ""}
          </small>
        </div>
      </article>
    </>
  )
}

export default SkillsDetail
