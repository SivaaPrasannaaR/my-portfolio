import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BoxCountType, boxNameArr, PlayersCountType } from "../enum/enum"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"
import { StateType, initialState } from "./shooterInitialState"

const reducerFunction = {
  incrementBoxStage: (
    state: StateType,
    action: PayloadAction<{ player: PlayersCountType; box: BoxCountType }>
  ) => {
    const playerName = getPlayerName(action.payload.player)
    const boxName = getBoxName(action.payload.box)

    if (state.playersScore[playerName][boxName].stage < 9) {
      state.playersScore[playerName][boxName].stage += 1
    } else {
      state.playersScore[playerName][boxName].stage = 0
    }
  },
  setPlayer: (state: StateType, action: PayloadAction<number>) => {
    state.playerCount = action.payload
  },
  readyToShootCheck: (
    state: StateType,
    action: PayloadAction<{ player: PlayersCountType; box: BoxCountType }>
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
  },
}

export const shooterSlice = createSlice({
  name: "shooter",
  initialState: initialState,
  reducers: reducerFunction,
})

export const { actions: shooterAction, reducer: shooterReducer } = shooterSlice
