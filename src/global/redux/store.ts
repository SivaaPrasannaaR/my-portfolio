import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import { shooterReducer } from "../../game/shooter/redux/shooterSlice"
import counterReducer from "./CounterSlice"

/**
 * createLogger is the library which create log and it need to be
 * given in getDefaultMiddleware inbuilt method
 */
export const store = configureStore({
  reducer: { counter: counterReducer, shooter: shooterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger()),
})

/** type of store dispatch and store root state */
export type RootStateType = ReturnType<typeof store.getState>
export type StoreDispatchType = typeof store.dispatch
