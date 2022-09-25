import React from "react"
import styles from "./Skills.module.scss"
import { BsPatchCheckFill } from "react-icons/bs"

type itemTypes = {
  item: any
  isOneColumn: boolean
}

const SkillsDetail = (props: itemTypes) => {
  const { item, isOneColumn } = props
  return (
    <>
      <article className={styles.skills__details}>
        <BsPatchCheckFill className={styles.skills__details_icon} />
        <div>
          <h5>{item.skill}</h5>
          <small className={styles.text_light}>
            {item.level ? item.level : ""}
          </small>
        </div>
      </article>
    </>
  )
}

export default SkillsDetail
