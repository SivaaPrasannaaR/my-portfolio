import { PayloadAction } from "@reduxjs/toolkit"
import {
  BoxCountType,
  boxNameArr,
  playerNameArr,
  PlayersCountType,
} from "../enum/enum"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"
import { BoxInfoType, PlayerBoxType, StateType } from "./shooterInitialState"

export type BasicActionPayloadType = {
  player: PlayersCountType
  box: BoxCountType
}

/** To set the number of players in the game */
const setPlayer = (
  state: StateType,
  action: PayloadAction<PlayersCountType>
) => {
  state.playerCount = action.payload
}

/* To update player number in boxInfo */
const updateInitialState = (state: StateType) => {
  playerNameArr.forEach((playerNum) => {
    const playerName = getPlayerName(playerNum)

    boxNameArr.forEach((boxNumber: BoxCountType) => {
      const boxName = getBoxName(boxNumber)
      state.playersScore[playerName][boxName].boxInfo.playerNum = playerNum
    })
  })
}

/** To update the current player */
const setCurrentPlayer = (state: StateType) => {
  const previousPlayer = state.currentPlayer
  const currentPlayer: PlayersCountType =
    previousPlayer > state.playerCount - 1
      ? ((previousPlayer - state.playerCount + 1) as PlayersCountType)
      : ((previousPlayer + 1) as PlayersCountType)

  state.currentPlayer = currentPlayer
}

/** To increase the each player box stage to next stage */
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

/** To decrease the each player box stage to next stage */
const degradeBoxStage = (
  state: StateType,
  player: PlayersCountType,
  box: BoxCountType
) => {
  const playerName = getPlayerName(player)
  const boxName = getBoxName(box)

  if (state.playersScore[playerName][boxName].stage > 0) {
    state.playersScore[playerName][boxName].stage -= 1
  }
}
const decrementBoxStage = (
  state: StateType,
  action: PayloadAction<BasicActionPayloadType>
) => {
  degradeBoxStage(state, action.payload.player, action.payload.box)
}

/** To check whether the player is ready to shoot */
const updateReadyToShoot = (
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

/** when box stage is 8 and player locked the box to make action (shoot) */
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

/** To revert the locked box or to unlock the locked box */
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

const shootOpponent = (
  state: StateType,
  action: PayloadAction<{ opponentBox: BoxInfoType }>
) => {
  const currentPlayer = state.currentPlayer
  const currentPlayerBoxNumber: BoxCountType | undefined = boxNameArr.find(
    (boxNumber: BoxCountType) =>
      state.playersScore[getPlayerName(currentPlayer)][getBoxName(boxNumber)]
        .lockedToShootBox
  )
  if (currentPlayerBoxNumber) {
    const currentPlayerBox =
      state.playersScore[getPlayerName(currentPlayer)][
        getBoxName(currentPlayerBoxNumber)
      ]

    if (currentPlayerBox.readyToShoot) {
      /** decrease current player box stage */
      degradeBoxStage(state, currentPlayer, currentPlayerBoxNumber)
      /** decrease opponent player box stage */
      degradeBoxStage(
        state,
        action.payload.opponentBox.playerNum,
        action.payload.opponentBox.boxNum
      )
    }
  }
}

const shooterReducerFunction = {
  setPlayer,
  updateInitialState,
  setCurrentPlayer,
  incrementBoxStage,
  decrementBoxStage,
  readyToShootCheck: updateReadyToShoot,
  setLockedToShoot,
  unSetLockedToShoot,
  shootOpponent,
}

export default shooterReducerFunction
