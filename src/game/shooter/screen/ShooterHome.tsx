import React, { useState } from "react"
import { useAppDispatch } from "../../../global/redux/redux-hooks"
import { PlayersCountType } from "../enum/enum"
import { uid } from "uid"
import { shooterAction } from "../redux/shooterSlice"
import style from "../shooter.module.scss"
import useShooterFirebaseFunctions from "../firebase/useShooterFirebaseFunctions"

const minPlayer = 2
const maxPlayer = 6

type ShooterHomeType = {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

const ShooterHome: React.FC<ShooterHomeType> = (props) => {
  const { setDisplay } = props

  const [playerCount, setPlayerCount] = useState<PlayersCountType>(minPlayer)
  const [room, setRoom] = useState<{ newRoom: boolean; existingRoom: boolean }>(
    { newRoom: false, existingRoom: false }
  )
  const [roomId, setRoomId] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()

  const { writeToDb } = useShooterFirebaseFunctions()

  const addPlayerCount = async () => {
    setPlayerCount((prevState) => {
      return prevState < maxPlayer
        ? ((prevState + 1) as PlayersCountType)
        : (prevState as PlayersCountType)
    })
  }
  const subPlayerCount = async () => {
    setPlayerCount((prevState) => {
      return prevState > minPlayer
        ? ((prevState - 1) as PlayersCountType)
        : (prevState as PlayersCountType)
    })
  }

  const handleCreateNewRoom = async () => {
    const uuid = uid()
    setRoomId(uuid)

    dispatch(shooterAction.setRoomId(uuid))
    dispatch(shooterAction.setPlayer(playerCount))
    dispatch(shooterAction.updateInitialState())
  }
  const handleJoinExistingRoom = () => {
    dispatch(shooterAction.setRoomId(roomId))
    dispatch(shooterAction.setPlayer(playerCount))
    dispatch(shooterAction.updateInitialState())
  }

  const goToGame = async () => {
    setLoading(true)
    await writeToDb()
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        setDisplay(true)
        setLoading(false)
      })
  }

  return (
    <div className={style.playerCountContainer}>
      {!room.newRoom && !room.existingRoom && (
        <div>
          <div>
            <button
              onClick={() => setRoom({ newRoom: true, existingRoom: false })}
              className={style.playerCount}
            >
              Create New Room
            </button>
          </div>
          <div>
            <button
              onClick={() => setRoom({ newRoom: false, existingRoom: true })}
              className={style.playerCount}
            >
              Join Existing Room
            </button>
          </div>
        </div>
      )}

      {room.newRoom && (
        <div>
          <h1>Player Count: {playerCount}</h1>
          <div>
            <button onClick={addPlayerCount} className={style.playerCount}>
              +
            </button>
            <button onClick={subPlayerCount} className={style.playerCount}>
              -
            </button>
          </div>
          <button onClick={handleCreateNewRoom} className={style.playerCount}>
            Submit
          </button>
          {roomId && (
            <>
              <h1>Room Id: {roomId}</h1>
              <button onClick={goToGame} className={style.playerCount}>
                Go To game
              </button>
            </>
          )}
        </div>
      )}

      {room.existingRoom && (
        <div className={style.displayFlexCenter}>
          <div>
            <input
              value={roomId}
              onChange={(event) => setRoomId(event.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleJoinExistingRoom}
              className={loading ? style.disabled : style.playerCount}
            >
              Join Room
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default ShooterHome
