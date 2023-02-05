import React, { useState } from "react"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import DisplayPlayers from "../components/DisplayPlayers"
import { Players } from "../components/Players"
import ShowNumbers from "../components/ShowNumbers"
import { PlayersCountType } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"
import { shooterAction } from "../redux/shooterSlice"
import style from "../shooter.module.scss"

const minPlayer = 2
const maxPlayer = 6

const ShooterIndex: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false)
  const [playerCount, setPlayerCount] = useState<PlayersCountType>(minPlayer)
  const dispatch = useAppDispatch()

  const player = useAppSelector((state) => state.shooter.playersScore)
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)
  const playerStatus = useAppSelector((state) => state.shooter.playersStatus)

  const addPlayerCount = () => {
    setPlayerCount((prevState) => {
      return prevState < maxPlayer
        ? ((prevState + 1) as PlayersCountType)
        : (prevState as PlayersCountType)
    })
  }
  const subPlayerCount = () => {
    setPlayerCount((prevState) => {
      return prevState > minPlayer
        ? ((prevState - 1) as PlayersCountType)
        : (prevState as PlayersCountType)
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
          <ShowNumbers />
          <div className={style.displayFirstPlayer}>
            <DisplayPlayers
              player={player[getPlayerName(1 as PlayersCountType)]}
              isTimeToPlay={currentPlayer === 1}
              playerStatus={playerStatus[getPlayerName(1 as PlayersCountType)]}
            />
          </div>
          <Players playerCount={playerCount} />
        </div>
      ) : (
        <div className={style.playerCountContainer}>
          <div>
            <h1>Player Count: {playerCount}</h1>
            <div>
              <button onClick={addPlayerCount} className={style.playerCount}>
                +
              </button>
              <button onClick={subPlayerCount} className={style.playerCount}>
                -
              </button>
            </div>
            <button onClick={handleSubmit} className={style.playerCount}>
              Submit
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}
export default ShooterIndex
