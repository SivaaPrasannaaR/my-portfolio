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
import { PlayerBoxType } from "../redux/shooterInitialState"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"

type displayPlayersProps = {
  currentPlayer: PlayersCountType
  player: PlayerBoxType
  changeCurrentPlayer: () => void
  isTimeToPlay: boolean
  lost: boolean
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const { currentPlayer, changeCurrentPlayer, isTimeToPlay, player, lost } =
    props
  const currentPlayerData = useAppSelector(
    (state) => state.shooter.playersScore[getPlayerName(currentPlayer)]
  )
  const dispatch = useAppDispatch()

  const [diceNumber, setDiceNumber] = React.useState<number>(
    generateRandomNum()
  )

  const isCurrentPlayerBox: {
    box: BoxCountType | undefined
    lockedToShoot: boolean
  } = {
    box: boxNameArr.find(
      (boxNum: BoxCountType) =>
        currentPlayerData[getBoxName(boxNum)].lockedToShootBox
    ),
    lockedToShoot: boxNameArr.some(
      (boxNum: BoxCountType) =>
        currentPlayerData[getBoxName(boxNum)].lockedToShootBox
    ),
  }

  const handleRandomNum = React.useCallback(() => {
    const random_number: BoxCountType = generateRandomNum() as BoxCountType
    setDiceNumber(random_number)

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

    changeCurrentPlayer()
  }, [changeCurrentPlayer, currentPlayer, dispatch])

  return (
    <div className={lost ? style.playerLost : ""}>
      <div
        className={`
          ${style.imgDiv} 
          ${lost ? style.playerLost : ""}
          `}
      >
        <button
          onClick={handleRandomNum}
          className={`
          ${style.rollDiceButton} 
          ${isTimeToPlay ? style.timeToPlay : style.notTimeToPlay} 
          ${lost ? style.playerLost : ""}
          `}
          disabled={!isTimeToPlay || lost}
        >
          {diceNumber}
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
            lost={lost}
          />
        )
      })}
    </div>
  )
}
export default DisplayPlayers
