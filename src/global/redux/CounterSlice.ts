import { createSlice } from "@reduxjs/toolkit"
import React from "react"

const initialState = { count: 0 }

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
  },
})

export const { increment } = counterSlice.actions

const counterReducer = counterSlice.reducer
export default counterReducer
