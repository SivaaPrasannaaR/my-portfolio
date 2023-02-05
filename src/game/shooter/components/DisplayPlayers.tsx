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
    <div
      className={isTimeToPlay ? style.displayReadyToPlay : style.displayPlayer}
    >
      <div
        onClick={() => !playerStatus.lost && isTimeToPlay && handleRandomNum()}
        className={`
          ${style.diceDiv} 
          ${isTimeToPlay ? style.timeToPlay : style.notTimeToPlay} 
          ${playerStatus.lost ? style.disabled : ""}
          `}
      >
        <button
          className={`
          ${style.rollDiceButton} 
          ${!isTimeToPlay || playerStatus.lost ? style.disabled : ""} 
          ${isTimeToPlay ? style.timeToPlay : style.notTimeToPlay} 
          `}
          disabled={!isTimeToPlay || playerStatus.lost}
        >
          {playerStatus.lost ? "OUT" : playerStatus.diceValue}
        </button>
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
