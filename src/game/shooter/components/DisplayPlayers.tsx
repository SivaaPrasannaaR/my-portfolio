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
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const { currentPlayer, changeCurrentPlayer, isTimeToPlay, player } = props
  const currentPlayerData = useAppSelector(
    (state) => state.shooter.playersScore[getPlayerName(currentPlayer)]
  )
  const dispatch = useAppDispatch()

  const [diceNumber, setDiceNumber] = React.useState<number>(
    generateRandomNum()
  )

  const isCurrentPlayerLockedToShoot: boolean = boxNameArr.some(
    (boxNum: BoxCountType) =>
      currentPlayerData[getBoxName(boxNum)].lockedToShootBox
  )

  const handleRandomNum = React.useCallback(() => {
    const random_number: BoxCountType = generateRandomNum() as BoxCountType
    setDiceNumber(random_number)

    /* used to update the img count in state value */
    dispatch(
      shooterAction.incrementBoxStage({
        player: currentPlayer,
        box: random_number,
      })
    )

    /* used to update the ready to shoot in state value */
    dispatch(
      shooterAction.readyToShootCheck({
        player: currentPlayer,
        box: random_number,
      })
    )

    changeCurrentPlayer()
  }, [changeCurrentPlayer, currentPlayer, dispatch])

  React.useEffect(() => {
    Array.from(new Array(13)).forEach(() =>
      setTimeout(() => handleRandomNum(), 500)
    )
  }, [])

  return (
    <div>
      <div className={style.imgDiv}>
        <button
          onClick={handleRandomNum}
          className={style.rollDiceButton}
          disabled={!isTimeToPlay}
          style={
            isTimeToPlay
              ? { backgroundColor: "teal" }
              : { backgroundColor: "grey", cursor: "default" }
          }
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
            isCurrentPlayerLockedToShoot={isCurrentPlayerLockedToShoot}
          />
        )
      })}
    </div>
  )
}
export default DisplayPlayers
