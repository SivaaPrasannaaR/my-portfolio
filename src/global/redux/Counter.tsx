import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "./CounterSlice"

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      Counter:<p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter
