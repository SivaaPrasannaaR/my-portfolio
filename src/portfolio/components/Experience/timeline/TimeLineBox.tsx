import React from "react"
import styles from "./TimeLineBox.module.scss"
export type TimeLineBoxType = {
  summary: string[]
  role: string
  technologyUsed: string
  duration: string
}

const TimeLineBox: React.FC<TimeLineBoxType> = (props) => {
  const { summary, technologyUsed, role, duration } = props
  return (
    // <div className={styles.timeLineBox_container}>
    <div className={styles.timeLine_box}>
      <h3
        className={styles.commonContent}
        style={{ marginBottom: "-4px", color: "orange" }}
      >
        {role}
      </h3>
      <p className={styles.commonContent}>{duration}</p>

      <div className={styles.commonContent}>
        <label>{"Summary: "}</label>
        <ul style={{ marginLeft: "16px", listStyleType: "square" }}>
          {summary.map((summaryData: string) => {
            return <li>{summaryData}</li>
          })}
        </ul>
      </div>
      <div className={styles.commonContent}>
        <label>{"Technology Used: "}</label>
        <p style={{ marginLeft: "16px" }}>{technologyUsed}</p>
      </div>
    </div>
    // </div>
  )
}

export default TimeLineBox
