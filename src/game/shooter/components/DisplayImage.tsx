import React from "react"
import { getImage } from "../functions/getImage"
import img_0 from "../assets/img_0.png"
import style from "../shooter.module.scss"

const DisplayImage: React.FC<{ count: number }> = (props) => {
  const { count } = props

  return (
    <div>
      <img
        src={count < 9 ? getImage(count) : img_0}
        alt={""}
        className={style.displayImg}
      />
    </div>
  )
}
export default DisplayImage
