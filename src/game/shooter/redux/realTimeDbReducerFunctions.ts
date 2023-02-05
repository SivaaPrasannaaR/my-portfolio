import { PayloadAction } from "@reduxjs/toolkit"
import { ShooterStateType } from "./shooterInitialState"

const setRoomId = (state: ShooterStateType, action: PayloadAction<string>) => {
  state.roomId = action.payload
}

export const realRimeDbReducerFunctions = { setRoomId }
