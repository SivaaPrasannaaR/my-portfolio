import React from "react"
import DisplayPlayers from "./DisplayPlayers"
import style from "../shooter.module.scss"

type PlayersType = {
  playerCount: number
}

export const Players: React.FC<PlayersType> = (props) => {
  const { playerCount } = props
  const [currentPlayer, setCurrentPlayer] = React.useState<number>(1)

  const changeCurrentPlayer = () => {
    setCurrentPlayer((prevState) =>
      prevState > playerCount - 1 ? prevState - playerCount + 1 : prevState + 1
    )
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
                isTimeToPlay={index + 1 !== currentPlayer}
                changeCurrentPlayer={changeCurrentPlayer}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
