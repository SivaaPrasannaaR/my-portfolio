import React from "react"
import { stageImage } from "../functions/stageImage"
import style from "../shooter.module.scss"
import { EachPlayerBoxType } from "../redux/shooterInitialState"
import { useAppDispatch } from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"

type DisplayImageType = {
  box: EachPlayerBoxType
  isTimeToPlay: boolean
  isCurrentPlayerLockedToShoot: boolean
}

const DisplayImage: React.FC<DisplayImageType> = (props) => {
  const { box, isTimeToPlay, isCurrentPlayerLockedToShoot } = props
  const dispatch = useAppDispatch()

  const handleOnClickShoot = React.useCallback(() => {
    if (isTimeToPlay && box.readyToShoot) {
      dispatch(
        shooterAction.setLockedToShoot({
          player: box.boxInfo.playerNum,
          box: box.boxInfo.boxNum,
        })
      )
    }
    if (!isTimeToPlay && isCurrentPlayerLockedToShoot) {
      console.log("###box.boxInfo", box.boxInfo)
      dispatch(
        shooterAction.shootOpponent({
          opponentBox: box.boxInfo,
        })
      )
    }
  }, [
    box.boxInfo,
    box.readyToShoot,
    dispatch,
    isCurrentPlayerLockedToShoot,
    isTimeToPlay,
  ])

  React.useEffect(() => {
    if (!box.readyToShoot && box.stage < 6) {
      dispatch(
        shooterAction.unSetLockedToShoot({
          player: box.boxInfo.playerNum,
        })
      )
    }
  }, [box.boxInfo.playerNum, box.readyToShoot, box.stage, dispatch])

  return (
    <div
      className={`
      ${style.imgDiv} 
      ${box.readyToShoot ? style.readyToShoot : ""} 
      ${
        !isTimeToPlay && isCurrentPlayerLockedToShoot
          ? style.otherPlayerStage
          : ""
      } 
      ${box.lockedToShootBox ? style.lockedBox : ""}
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
