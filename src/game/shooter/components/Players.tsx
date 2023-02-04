import React from "react"
import DisplayPlayers from "./DisplayPlayers"
import style from "../shooter.module.scss"
import { useAppSelector } from "../../../global/redux/redux-hooks"
import { PlayersCountType } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"

type PlayersType = {
  playerCount: number
}

export const Players: React.FC<PlayersType> = (props) => {
  const { playerCount } = props
  const player = useAppSelector((state) => state.shooter.playersScore)
  const [currentPlayer, setCurrentPlayer] = React.useState<PlayersCountType>(1)

  const changeCurrentPlayer = () => {
    setCurrentPlayer((prevState) => {
      const player: PlayersCountType =
        prevState > playerCount - 1
          ? ((prevState - playerCount + 1) as PlayersCountType)
          : ((prevState + 1) as PlayersCountType)

      return player
    })
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
                key={index + 1}
                currentPlayer={currentPlayer}
                player={player[getPlayerName((index + 1) as PlayersCountType)]}
                isTimeToPlay={index + 1 === currentPlayer}
                changeCurrentPlayer={changeCurrentPlayer}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
