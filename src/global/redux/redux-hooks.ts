import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootStateType, StoreDispatchType } from "./store"

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch = () => useDispatch<StoreDispatchType>()
