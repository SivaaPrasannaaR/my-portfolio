import React from "react"
import style from "../shooter.module.scss"
import useDisplayPlayers from "./useDisplayPlayers"
import dice from "../assets/dice.gif"

const ShowNumbers: React.FC = () => {
  const { handleRandomNum } = useDisplayPlayers()

  return (
    <div className={style.displayGridNumbers}>
      <div className={style.roolDiceDiv} onClick={handleRandomNum}>
        <img src={dice} alt={""} className={style.displayDiceImg} />
      </div>
      <div className={style.numbersDiv}>1</div>
      <div className={style.numbersDiv}>3</div>
      <div className={style.numbersDiv}>5</div>
      <div className={style.numbersDiv}>7</div>
      <div className={style.numbersDiv}>9</div>
    </div>
  )
}
export default ShowNumbers
