import { PayloadAction } from "@reduxjs/toolkit"
import { ShooterStateType } from "./shooterInitialState"

const setLoading = (
  state: ShooterStateType,
  action: PayloadAction<boolean>
) => {
  state.loading = action.payload
}
const setRoomId = (state: ShooterStateType, action: PayloadAction<string>) => {
  state.roomId = action.payload
}

const setDataFromDb = (
  state: ShooterStateType,
  action: PayloadAction<{ state: ShooterStateType }>
) => {
  state.playerCount = action.payload.state.playerCount
  state.currentPlayer = action.payload.state.currentPlayer
  state.gameStarted = action.payload.state.gameStarted
  state.loading = action.payload.state.loading
  //   state.playersRank = action.payload.state.playersRank || []
  state.playersScore = action.payload.state.playersScore
  state.playersStatus = action.payload.state.playersStatus
  state.roomId = action.payload.state.roomId
}

export const realRimeDbReducerFunctions = {
  setLoading,
  setRoomId,
  setDataFromDb,
}
