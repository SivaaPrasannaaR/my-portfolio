import React, { useState } from "react"
import { useAppDispatch } from "../../../global/redux/redux-hooks"
import { Players } from "../components/Players"
import ShowNumbers from "../components/ShowNumbers"
import { shooterAction } from "../redux/shooterSlice"
import style from "../shooter.module.scss"

const minPlayer = 2
const maxPlayer = 6

const ShooterIndex: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const [playerCount, setPlayerCount] = useState<number>(minPlayer)
  const dispatch = useAppDispatch()

  const addPlayerCount = () => {
    setPlayerCount((prevState) => {
      return prevState < maxPlayer ? prevState + 1 : prevState
    })
  }
  const subPlayerCount = () => {
    setPlayerCount((prevState) => {
      return prevState > minPlayer ? prevState - 1 : prevState
    })
  }
  const handleSubmit = () => {
    setDisplay(true)
  }

  React.useEffect(() => {
    dispatch(shooterAction.setPlayer(playerCount))
  }, [dispatch, playerCount])

  return (
    <React.Fragment>
      {display ? (
        <div className={style.headContainer}>
          <div className={style.displayNumbers}>
            <ShowNumbers />
          </div>
          <Players playerCount={playerCount} />
        </div>
      ) : (
        <div>
          <h1>Player Count: {playerCount}</h1>
          <div>
            <button onClick={addPlayerCount} className={style.rollDiceButton}>
              +
            </button>
            <button onClick={subPlayerCount} className={style.rollDiceButton}>
              -
            </button>
          </div>
          <button onClick={handleSubmit} className={style.rollDiceButton}>
            Submit
          </button>
        </div>
      )}
    </React.Fragment>
  )
}
export default ShooterIndex
