import React from "react"
import styles from "./TimeLineBox.module.scss"
export type TimeLineBoxType = {
  summary: string
  technologyUsed: string
  myRole: string
}

const TimeLineBox: React.FC<TimeLineBoxType> = (props) => {
  const { summary, technologyUsed, myRole } = props
  return (
    // <div className={styles.timeLineBox_container}>
    <div className={styles.timeLine_box}>
      <p className={styles.commonContent}>Nov 2020 - Present</p>
      <div className={styles.commonContent}>
        <label>{"Summary: "}</label>
        <p>{summary}</p>
      </div>
      <div className={styles.commonContent}>
        <label>{"Technology Used: "}</label>
        <p>{technologyUsed}</p>
      </div>
      <div className={styles.commonContent}>
        <label>{"My Role: "}</label>
        <p>{myRole}</p>
      </div>
    </div>
    // </div>
  )
}

export default TimeLineBox
