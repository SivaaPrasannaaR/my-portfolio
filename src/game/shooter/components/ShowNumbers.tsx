import React from "react"
import style from "../shooter.module.scss"

const ShowNumbers: React.FC = () => {
  return (
    <div className={style.displayGridNumbers}>
      <div className={style.numbersDiv}>Roll Dice</div>
      <div className={style.numbersDiv}>1</div>
      <div className={style.numbersDiv}>3</div>
      <div className={style.numbersDiv}>5</div>
      <div className={style.numbersDiv}>7</div>
      <div className={style.numbersDiv}>9</div>
    </div>
  )
}
export default ShowNumbers
