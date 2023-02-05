import React from "react"
import DisplayPlayers from "./DisplayPlayers"
import style from "../shooter.module.scss"
import { useAppSelector } from "../../../global/redux/redux-hooks"
import { PlayersCountType } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"

export const Players: React.FC = () => {
  const player = useAppSelector((state) => state.shooter.playersScore)
  const playerCount = useAppSelector((state) => state.shooter.playerCount)
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)
  const playerStatus = useAppSelector((state) => state.shooter.playersStatus)

  return (
    <div>
      <div className={style.displayMultiPlayer}>
        <div
          className={style.shooterWrapper}
          style={{ gridTemplateColumns: `repeat(${playerCount - 1}, auto)` }}
        >
          {Array.from(new Array(playerCount)).map((_, index) => {
            if (index === 0) {
              return <></>
            }
            const key =
              getPlayerName((index + 1) as PlayersCountType) +
              playerStatus[getPlayerName((index + 1) as PlayersCountType)].pId

            return (
              <DisplayPlayers
                key={key}
                player={player[getPlayerName((index + 1) as PlayersCountType)]}
                isTimeToPlay={index + 1 === currentPlayer}
                playerStatus={
                  playerStatus[getPlayerName((index + 1) as PlayersCountType)]
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
