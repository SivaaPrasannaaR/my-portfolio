import React from "react"
import DisplayImage from "./DisplayImage"
import style from "../shooter.module.scss"
import { generateRandomNum } from "../functions/generateRandomNum"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
import { BoxCountType, boxNameArr, PlayersCountType } from "../enum/enum"
import { PlayerBoxType, PlayerStatusType } from "../redux/shooterInitialState"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"

type displayPlayersProps = {
  currentPlayer: PlayersCountType
  player: PlayerBoxType
  isTimeToPlay: boolean
  playerStatus: PlayerStatusType
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const {
    currentPlayer,

    isTimeToPlay,
    player,
    playerStatus,
  } = props
  const playerData = useAppSelector((state) => state.shooter.playersScore)
  const dispatch = useAppDispatch()

  const isCurrentPlayerBox: {
    box: BoxCountType | undefined
    lockedToShoot: boolean
  } = {
    box: boxNameArr.find(
      (boxNum: BoxCountType) =>
        playerData[getPlayerName(currentPlayer)][getBoxName(boxNum)]
          .lockedToShootBox
    ),
    lockedToShoot: boxNameArr.some(
      (boxNum: BoxCountType) =>
        playerData[getPlayerName(currentPlayer)][getBoxName(boxNum)]
          .lockedToShootBox
    ),
  }

  const handleRandomNum = React.useCallback(() => {
    const random_number: BoxCountType = generateRandomNum() as BoxCountType
    /* update current player dice number */
    dispatch(
      shooterAction.setDiceNumber({
        player: currentPlayer,
        box: random_number,
      })
    )

    /* used to update the box stage count in state value */
    dispatch(
      shooterAction.incrementBoxStage({
        player: currentPlayer,
        box: random_number,
      })
    )

    /* used to update the ready to shoot in state value */
    dispatch(
      shooterAction.updateReadyToShoot({
        player: currentPlayer,
        box: random_number,
      })
    )

    /* to change next player */
    dispatch(shooterAction.changeCurrentPlayer())

    if (isCurrentPlayerBox.lockedToShoot) {
      dispatch(
        shooterAction.resetPreviousPlayerReadyToShoot({ player: currentPlayer })
      )
    }
  }, [currentPlayer, dispatch, isCurrentPlayerBox.lockedToShoot])

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
