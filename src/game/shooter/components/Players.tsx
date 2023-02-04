import React from "react"
import DisplayPlayers from "./DisplayPlayers"
import style from "../shooter.module.scss"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { PlayersCountType } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"
import { shooterAction } from "../redux/shooterSlice"

type PlayersType = {
  playerCount: number
}

export const Players: React.FC<PlayersType> = (props) => {
  const { playerCount } = props
  const player = useAppSelector((state) => state.shooter.playersScore)
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)
  const playerStatus = useAppSelector((state) => state.shooter.playersStatus)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(shooterAction.updateInitialState())
  }, [dispatch])

  const changeCurrentPlayer = () => {
    dispatch(shooterAction.setCurrentPlayer())
  }

  return (
    <div>
      <div className={style.displayMultiPlayer}>
        <div
          className={style.shooterWrapper}
          style={{ gridTemplateColumns: `repeat(${playerCount}, auto)` }}
        >
          {Array.from(new Array(playerCount)).map((_, index) => {
            return (
              <DisplayPlayers
                key={getPlayerName((index + 1) as PlayersCountType)}
                currentPlayer={currentPlayer}
                player={player[getPlayerName((index + 1) as PlayersCountType)]}
                isTimeToPlay={index + 1 === currentPlayer}
                changeCurrentPlayer={changeCurrentPlayer}
                lost={
                  playerStatus[getPlayerName((index + 1) as PlayersCountType)]
                    .lost
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
