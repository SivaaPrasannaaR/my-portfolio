import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getBoxName, getPlayerName } from "../functions/AllShooterValue"
import { StateType, initialState } from "./shooterInitialState"

const reducerFunction = {
  incrementBox: (
    state: StateType,
    action: PayloadAction<{ player: number; box: number }>
  ) => {
    state.playersScore[getPlayerName(action.payload.player)][
      getBoxName(action.payload.box)
    ].stage += 1
  },
  setPlayer: (state: StateType, action: PayloadAction<number>) => {
    state.playerCount = action.payload
  },
}

export const shooterSlice = createSlice({
  name: "shooter",
  initialState: initialState,
  reducers: reducerFunction,
})

export const { actions: shooterAction, reducer: shooterReducer } = shooterSlice
