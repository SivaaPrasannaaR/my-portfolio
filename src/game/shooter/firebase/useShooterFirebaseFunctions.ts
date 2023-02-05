import { onValue, ref, remove, set, update } from "firebase/database"
import { useAppSelector } from "../../../global/redux/redux-hooks"
import { realTimeDb } from "../../../global/utils/firebase/firebase_config"

const useShooterFirebaseFunctions = () => {
  const shooterState = useAppSelector((state) => state.shooter)

  const writeToDb = async () => {
    const path = `room/${shooterState.roomId}`
    const roomRef = ref(realTimeDb, path)

    await set(roomRef, shooterState)
  }

  const getDataFromDb = async () => {
    const path = `room/${shooterState.roomId}`
    const roomRef = ref(realTimeDb, path)
    onValue(roomRef, async (snapshot) => {
      const data = await snapshot.val()
      return data
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

  return { writeToDb, getDataFromDb, updateShooterStateToDb, deleteFromDb }
}
export default useShooterFirebaseFunctions
