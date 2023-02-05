import React from "react"
import { generateRandomNum } from "../functions/generateRandomNum"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
import { BoxCountType, boxNameArr } from "../enum/enum"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"

const useDisplayPlayers = () => {
  const currentPlayer = useAppSelector((state) => state.shooter.currentPlayer)
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

  return { isCurrentPlayerBox, handleRandomNum }
}
export default useDisplayPlayers
