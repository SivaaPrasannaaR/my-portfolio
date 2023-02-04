import React from "react"
import { stageImage } from "../functions/stageImage"
import style from "../shooter.module.scss"
import { EachPlayerBoxType } from "../redux/shooterInitialState"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
import { BoxCountType } from "../enum/enum"

type DisplayImageType = {
  box: EachPlayerBoxType
  isTimeToPlay: boolean
  currentPlayerBoxNumber: BoxCountType | undefined
  isCurrentPlayerLockedToShoot: boolean
  lost: boolean
}

const DisplayImage: React.FC<DisplayImageType> = (props) => {
  const {
    box,
    isTimeToPlay,
    isCurrentPlayerLockedToShoot,
    currentPlayerBoxNumber,
    lost,
  } = props
  const dispatch = useAppDispatch()
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)

  /** Check whether current player can shoot opponent box */
  const canShootOpponentBox: boolean =
    !isTimeToPlay && isCurrentPlayerLockedToShoot && box.stage > 0

  const handleOnClickShoot = React.useCallback(() => {
    if (lost) return

    if (isTimeToPlay && box.readyToShoot) {
      dispatch(
        shooterAction.setLockedToShoot({
          player: box.boxInfo.playerNum,
          box: box.boxInfo.boxNum,
        })
      )
    }

    if (canShootOpponentBox) {
      console.log("###box.boxInfo", box.boxInfo)
      /** Shoot opponent player */
      dispatch(
        shooterAction.shootOpponent({
          opponentBox: box.boxInfo,
        })
      )
      dispatch(shooterAction.checkGameLosser())
    }
  }, [
    box.boxInfo,
    box.readyToShoot,
    canShootOpponentBox,
    dispatch,
    isTimeToPlay,
    lost,
  ])

  React.useEffect(() => {
    if (!box.readyToShoot && box.stage < 6) {
      dispatch(
        shooterAction.unSetLockedToShoot({
          player: box.boxInfo.playerNum,
        })
      )
    }

    /** update ready to shoot state */
    if (currentPlayerBoxNumber) {
      dispatch(
        shooterAction.updateReadyToShoot({
          player: currentPlayer,
          box: currentPlayerBoxNumber,
        })
      )
    }
  }, [
    box.boxInfo.playerNum,
    box.readyToShoot,
    box.stage,
    currentPlayer,
    currentPlayerBoxNumber,
    dispatch,
  ])

  return (
    <div
      className={`
      ${style.imgDiv} 
      ${box.readyToShoot ? style.readyToShoot : ""} 
      ${
        box.readyToShoot && isTimeToPlay ? style.currentPlayerReadyToShoot : ""
      } 
      ${canShootOpponentBox ? style.otherPlayerStage : ""} 
      ${box.lockedToShootBox ? style.lockedBox : ""}
      ${lost ? style.playerLost : ""}
      `}
      onClick={handleOnClickShoot}
    >
      <img
        src={stageImage[box.stage]}
        alt={""}
        className={`${style.displayImg} ${style.displayImg}`}
      />
    </div>
  )
}
export default DisplayImage
