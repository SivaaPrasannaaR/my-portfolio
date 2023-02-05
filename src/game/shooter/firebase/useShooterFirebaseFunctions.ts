import {
  child,
  get,
  onValue,
  ref,
  remove,
  set,
  update,
} from "firebase/database"
import {
  useAppDispatch,
  useAppSelector,
} from "../../../global/redux/redux-hooks"
import { realTimeDb } from "../../../global/utils/firebase/firebase_config"
import { ShooterStateType } from "../redux/shooterInitialState"
import { shooterAction } from "../redux/shooterSlice"

const useShooterFirebaseFunctions = () => {
  const shooterState = useAppSelector((state) => state.shooter)
  const dispatch = useAppDispatch()

  const writeToDb = async () => {
    const path = `room/${shooterState.roomId}`
    const roomRef = ref(realTimeDb, path)

    await set(roomRef, shooterState)
  }

  const getDataFromDb = async (exRoomId: string) => {
    const roomId = exRoomId
    const path = `room/${roomId}`
    const dbRef = ref(realTimeDb)
    get(child(dbRef, path))
      .then((snapshot) => {
        const data = snapshot.val()
        const stateData = data as ShooterStateType

        if (snapshot.exists()) {
          dispatch(shooterAction.setDataFromDb({ state: stateData }))
        } else {
          console.warn("No data available")
        }
      })
      .catch((error) => {
        console.error(error)
      })

    dispatch(shooterAction.setLoading(false))
  }

  const listenToDb = async (exRoomId: string) => {
    const roomId = exRoomId
    const path = `room/${roomId}`
    const roomRef = ref(realTimeDb, path)
    onValue(roomRef, async (snapshot) => {
      const data = snapshot.val()
      const stateData = data as ShooterStateType

      if (snapshot.exists()) {
        dispatch(shooterAction.setDataFromDb({ state: stateData }))
      } else {
        console.warn("No data available")
      }
    })
  }

  const updateShooterStateToDb = async () => {
    const path = `room/${shooterState.roomId}`
    const roomRef = ref(realTimeDb, path)
    await update(roomRef, shooterState)
  }

  const deleteFromDb = async () => {
    const path = `room/${shooterState.roomId}`
    const roomRef = ref(realTimeDb, path)

    await remove(roomRef)
  }

  return {
    writeToDb,
    getDataFromDb,
    listenToDb,
    updateShooterStateToDb,
    deleteFromDb,
  }
}
export default useShooterFirebaseFunctions
