import React from "react"
import { stageImage } from "../functions/stageImage"
import style from "../shooter.module.scss"
import { EachPlayerBoxType } from "../redux/shooterInitialState"
import { useAppDispatch } from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
import { PlayersCountType } from "../enum/enum"

type DisplayImageType = {
  box: EachPlayerBoxType
  currentPlayer: PlayersCountType
  isTimeToPlay: boolean
}

const DisplayImage: React.FC<DisplayImageType> = (props) => {
  const { box, isTimeToPlay, currentPlayer } = props
  const dispatch = useAppDispatch()

  const handleOnClickShoot = () => {
    if (isTimeToPlay && box.readyToShoot) {
      dispatch(
        shooterAction.setLockedToShoot({
          player: currentPlayer,
          box: box.boxNum,
        })
      )
    }
  }

  React.useEffect(() => {
    if (!box.readyToShoot && box.stage < 6) {
      dispatch(
        shooterAction.unSetLockedToShoot({
          player: currentPlayer,
        })
      )
    }
  }, [box.readyToShoot, box.stage, currentPlayer, dispatch])

  return (
    <div
      className={`
      ${style.imgDiv} 
      ${box.readyToShoot ? style.readyToShoot : ""} 
      ${!isTimeToPlay ? style.otherPlayerStage : ""} 
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
