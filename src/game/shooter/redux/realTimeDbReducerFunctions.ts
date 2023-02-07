import { PayloadAction } from "@reduxjs/toolkit"
import { playerNameArr } from "../enum/enum"
import { getPlayerName } from "../functions/AllShooterValue"
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

const setPlayerId = (
  state: ShooterStateType,
  action: PayloadAction<string>
) => {
  let alreadyPlayer: boolean = false
  playerNameArr.forEach((playerNum) => {
    const playerName = getPlayerName(playerNum)
    if (state.playersStatus[playerName].pId === action.payload) {
      alreadyPlayer = true
    }
    if (!alreadyPlayer && state.playersStatus[playerName].pId === "") {
      state.playersStatus[playerName].pId = action.payload
      alreadyPlayer = true
    }
  })
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
  setPlayerId,
  setDataFromDb,
}
