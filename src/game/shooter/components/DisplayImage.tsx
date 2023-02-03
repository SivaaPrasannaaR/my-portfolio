import React from "react"
import { stageImage } from "../functions/getImage"
import style from "../shooter.module.scss"
import { StageType } from "../enum/enum"

type DisplayImageType = {
  stage: StageType
}

const DisplayImage: React.FC<DisplayImageType> = (props) => {
  const { stage } = props

  return (
    <div>
      <img
        src={stageImage[stage]}
        alt={""}
        className={`${style.displayImg} ${style.displayImg}`}
      />
    </div>
  )
}
export default DisplayImage
