import { PayloadAction } from "@reduxjs/toolkit"
import { BoxCountType, boxNameArr, PlayersCountType } from "../enum/enum"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"
import { StateType } from "./shooterInitialState"

export type BasicActionPayloadType = {
  player: PlayersCountType
  box: BoxCountType
}

const incrementBoxStage = (
  state: StateType,
  action: PayloadAction<BasicActionPayloadType>
) => {
  const playerName = getPlayerName(action.payload.player)
  const boxName = getBoxName(action.payload.box)

  if (state.playersScore[playerName][boxName].stage < 8) {
    state.playersScore[playerName][boxName].stage += 1
  } else {
    state.playersScore[playerName][boxName].stage = 0
  }
}

const setPlayer = (state: StateType, action: PayloadAction<number>) => {
  state.playerCount = action.payload
}

const readyToShootCheck = (
  state: StateType,
  action: PayloadAction<BasicActionPayloadType>
) => {
  const playerName = getPlayerName(action.payload.player)
  boxNameArr.forEach((boxNumber: BoxCountType) => {
    const boxName = getBoxName(boxNumber)

    if (state.playersScore[playerName][boxName].stage === 8) {
      state.playersScore[playerName][boxName].readyToShoot = true
    }
    if (
      state.playersScore[playerName][boxName].stage < 6 &&
      state.playersScore[playerName][boxName].readyToShoot
    ) {
      state.playersScore[playerName][boxName].readyToShoot = false
    }
  })
}

const setLockedToShoot = (
  state: StateType,
  action: PayloadAction<BasicActionPayloadType>
) => {
  const playerName = getPlayerName(action.payload.player)
  const onClickedBoxName = getBoxName(action.payload.box)
  boxNameArr.forEach((boxNumber: BoxCountType) => {
    const boxName = getBoxName(boxNumber)

    if (
      boxName === onClickedBoxName &&
      state.playersScore[playerName][onClickedBoxName].readyToShoot
    ) {
      state.playersScore[playerName][onClickedBoxName].lockedToShootBox =
        !state.playersScore[playerName][onClickedBoxName].lockedToShootBox
    } else {
      state.playersScore[playerName][boxName].lockedToShootBox = false
    }
  })
}

const unSetLockedToShoot = (
  state: StateType,
  action: PayloadAction<{ player: PlayersCountType }>
) => {
  const playerName = getPlayerName(action.payload.player)
  boxNameArr.forEach((boxNumber: BoxCountType) => {
    const boxName = getBoxName(boxNumber)

    if (
      !state.playersScore[playerName][boxName].readyToShoot &&
      state.playersScore[playerName][boxName].stage < 6
    ) {
      state.playersScore[playerName][boxName].lockedToShootBox = false
    }
  })
}

const shooterReducerFunction = {
  incrementBoxStage,
  setPlayer,
  readyToShootCheck,
  setLockedToShoot,
  unSetLockedToShoot,
}

export default shooterReducerFunction
