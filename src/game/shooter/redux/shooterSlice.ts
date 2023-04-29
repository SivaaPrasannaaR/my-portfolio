import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./shooterInitialState"
import shooterReducerFunction from "./shooterReducerFunction"

export const shooterSlice = createSlice({
  name: "shooter",
  initialState: initialState,
  reducers: shooterReducerFunction,
})

export const { actions: shooterAction, reducer: shooterReducer } = shooterSlice
/**
 * The store is declared at src\global\redux\store.ts
 */
