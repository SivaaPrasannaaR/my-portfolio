import React from "react"
import DisplayImage from "./DisplayImage"
import style from "../shooter.module.scss"
import { generateRandomNum } from "../functions/generateRandomNum"
import { useAppDispatch } from "../../../global/redux/redux-hooks"
import { shooterAction } from "../redux/shooterSlice"
// import { currentPlayer } from '../functions/AllShooterValue'

type displayPlayersProps = {
  currentPlayer: number
  changeCurrentPlayer: () => void
  isTimeToPlay: boolean | undefined
}

type BoxCount = {
  [K in string]: number
}

const DisplayPlayers: React.FC<displayPlayersProps> = (props) => {
  const hardCode = {
    add: "add",
    subtract: "subtract",
  }
  const dispatch = useAppDispatch()

  const [diceNumber, setDiceNumber] = React.useState<number>(
    generateRandomNum()
  )
  const [boxCount, setBoxCount] = React.useState<BoxCount>({
    box1Count: 0,
    box3Count: 0,
    box5Count: 0,
    box7Count: 0,
    box9Count: 0,
  })

  const updateBoxCount = (random_number: number) => {
    const handleBoxCount = (box: number, doCalc: string) => {
      const calcValue = doCalc === hardCode.add ? box + 1 : box - 1
      const boxValue = box > 8 ? box - 8 : calcValue
      return boxValue
    }

    dispatch(
      shooterAction.incrementBox({
        player: props.currentPlayer,
        box: random_number,
      })
    )

    if (random_number === 1) {
      setBoxCount({
        ...boxCount,
        box1Count: handleBoxCount(boxCount.box1Count, hardCode.add),
      })
    } else if (random_number === 3) {
      setBoxCount({
        ...boxCount,
        box3Count: handleBoxCount(boxCount.box3Count, hardCode.add),
      })
    } else if (random_number === 5) {
      setBoxCount({
        ...boxCount,
        box5Count: handleBoxCount(boxCount.box5Count, hardCode.add),
      })
    } else if (random_number === 7) {
      setBoxCount({
        ...boxCount,
        box7Count: handleBoxCount(boxCount.box7Count, hardCode.add),
      })
    } else if (random_number === 9) {
      setBoxCount({
        ...boxCount,
        box9Count: handleBoxCount(boxCount.box9Count, hardCode.add),
      })
    }
  }

  const handleRandomNum = () => {
    const random_number = generateRandomNum()
    setDiceNumber(random_number)

    updateBoxCount(random_number) // used to update the img count in state value

    props.changeCurrentPlayer()
  }

  return (
    <div>
      <div className={style.imgDiv}>
        <button
          onClick={handleRandomNum}
          className="rollDiceButton"
          disabled={props.isTimeToPlay}
          style={
            props.isTimeToPlay
              ? { backgroundColor: "red" }
              : { backgroundColor: "teal" }
          }
        >
          {diceNumber}
        </button>
      </div>
      <div className={style.imgDiv}>
        <DisplayImage count={boxCount.box1Count} />
      </div>
      <div className={style.imgDiv}>
        <DisplayImage count={boxCount.box3Count} />
      </div>
      <div className={style.imgDiv}>
        <DisplayImage count={boxCount.box5Count} />
      </div>
      <div className={style.imgDiv}>
        <DisplayImage count={boxCount.box7Count} />
      </div>
      <div className={style.imgDiv}>
        <DisplayImage count={boxCount.box9Count} />
      </div>
    </div>
  )
}
export default DisplayPlayers
