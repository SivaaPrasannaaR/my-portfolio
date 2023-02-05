import React, { useState } from "react"
import { useAppSelector } from "../../../global/redux/redux-hooks"
import DisplayPlayers from "../components/DisplayPlayers"
import { Players } from "../components/Players"
import ShowNumbers from "../components/ShowNumbers"
import { PlayersCountType } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"
import style from "../shooter.module.scss"
import ShooterHome from "./ShooterHome"

const ShooterIndex: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false)

  const player = useAppSelector((state) => state.shooter.playersScore)
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)
  const playerStatus = useAppSelector((state) => state.shooter.playersStatus)

  return (
    <React.Fragment>
      {display ? (
        <div className={style.headContainer}>
          <ShowNumbers />
          <div className={style.displayFirstPlayer}>
            <DisplayPlayers
              key={getPlayerName(1 as PlayersCountType)}
              player={player[getPlayerName(1 as PlayersCountType)]}
              isTimeToPlay={currentPlayer === 1}
              playerStatus={playerStatus[getPlayerName(1 as PlayersCountType)]}
            />
          </div>
          <Players />
        </div>
      ) : (
        <ShooterHome setDisplay={setDisplay} />
      )}
    </React.Fragment>
  )
}
export default ShooterIndex
