import React from "react"
import DisplayImage from "./DisplayImage"
import style from "../shooter.module.scss"
import { generateRandomNum } from "../functions/generateRandomNum"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
import { BoxCountType, PlayersCountType } from "../enum/enum"
import { PlayerInitialScoreType } from "../redux/shooterInitialState"

type displayPlayersProps = {
  currentPlayer: PlayersCountType
  player: PlayerInitialScoreType
  changeCurrentPlayer: () => void
  isTimeToPlay: boolean | undefined
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const { currentPlayer, changeCurrentPlayer, isTimeToPlay, player } = props
  const playerCount = useAppSelector((state) => state.shooter.playerCount)
  const dispatch = useAppDispatch()

  const [diceNumber, setDiceNumber] = React.useState<number>(
    generateRandomNum()
  )

  const handleRandomNum = () => {
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
  }

  return (
    <div>
      <div className={style.imgDiv}>
        <button
          onClick={handleRandomNum}
          className={style.rollDiceButton}
          disabled={isTimeToPlay}
          style={
            isTimeToPlay
              ? { backgroundColor: "grey", cursor: "default" }
              : { backgroundColor: "teal" }
          }
        >
          {diceNumber}
        </button>
      </div>
      <div
        className={`${style.imgDiv} ${
          player.box1.readyToShoot ? style.readyToShoot : ""
        }`}
      >
        <DisplayImage stage={player.box1.stage} />
      </div>
      <div
        className={`${style.imgDiv} ${
          player.box3.readyToShoot ? style.readyToShoot : ""
        }`}
      >
        <DisplayImage stage={player.box3.stage} />
      </div>
      <div
        className={`${style.imgDiv} ${
          player.box5.readyToShoot ? style.readyToShoot : ""
        }`}
      >
        <DisplayImage stage={player.box5.stage} />
      </div>
      <div
        className={`${style.imgDiv} ${
          player.box7.readyToShoot ? style.readyToShoot : ""
        }`}
      >
        <DisplayImage stage={player.box7.stage} />
      </div>
      <div
        className={`${style.imgDiv} ${
          player.box9.readyToShoot ? style.readyToShoot : ""
        }`}
      >
        <DisplayImage stage={player.box9.stage} />
      </div>
    </div>
  )
}
export default DisplayPlayers
