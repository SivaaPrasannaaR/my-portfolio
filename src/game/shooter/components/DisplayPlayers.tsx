import React from "react"
import DisplayImage from "./DisplayImage"
import style from "../shooter.module.scss"
import { boxNameArr } from "../enum/enum"
import { PlayerBoxType, PlayerStatusType } from "../redux/shooterInitialState"
import { getBoxName } from "../functions/AllShooterValue"
import useDisplayPlayers from "./useDisplayPlayers"

type displayPlayersProps = {
  player: PlayerBoxType
  isTimeToPlay: boolean
  playerStatus: PlayerStatusType
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const { isTimeToPlay, player, playerStatus } = props

  const { isCurrentPlayerBox, handleRandomNum } = useDisplayPlayers()

  return (
    <div>
      <div
        onClick={handleRandomNum}
        className={`
          ${style.imgDiv} 
          ${playerStatus.lost ? style.disabled : ""}
          `}
      >
        {!playerStatus.lost ? (
          <button
            className={`
          ${style.rollDiceButton} 
          ${isTimeToPlay ? style.timeToPlay : style.notTimeToPlay} 
          `}
            disabled={!isTimeToPlay || playerStatus.lost}
          >
            {playerStatus.diceValue}
          </button>
        ) : (
          <p className={style.out}>OUT</p>
        )}
      </div>
      {boxNameArr.map((boxNum) => {
        const boxName = getBoxName(boxNum)
        return (
          <DisplayImage
            key={boxName}
            box={player[boxName]}
            isTimeToPlay={isTimeToPlay}
            isCurrentPlayerLockedToShoot={isCurrentPlayerBox.lockedToShoot}
            currentPlayerBoxNumber={isCurrentPlayerBox.box}
            lost={playerStatus.lost}
          />
        )
      })}
    </div>
  )
}
export default DisplayPlayers
