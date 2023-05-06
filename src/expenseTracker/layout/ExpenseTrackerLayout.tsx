import { Paper, Card, Stack, CardContent, Typography } from "@mui/material"
import { useEffect, useState, useRef } from "react"
import Entry from "../component/Entry"
import Firestore from "../../global/utils/firebase/firebase"
import firebaseCollectionNames from "../../global/utils/firebase/firebaseCollection"

export type ExpenseType = { id: string; title: string; amount: number }

// This project is made using material UI
const ExpenseTrackerLayout: React.FC = () => {
  const title = useRef<HTMLInputElement>(null)
  const amount = useRef<HTMLInputElement>(null)
  const [totalExpense, setTotalExpense] = useState<ExpenseType[]>([])

  const getData = async () => {
    const data: any[] = await Firestore.getAllData(
      firebaseCollectionNames.expenseTracker
    )
    console.log({ data })
    setTotalExpense(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAddButton = async (event: any) => {
    event.preventDefault()

    await Firestore.createData(firebaseCollectionNames.expenseTracker, {
      title: title.current?.value ?? "",
      amount: Number(amount.current?.value) ?? 0,
    })
    await getData()
  }

  return (
    <Stack>
      <Stack>
        <Entry
          title={title}
          amount={amount}
          handleAddButton={handleAddButton}
        />
      </Stack>
      <Stack>
        <Paper sx={{ ...style.root, ...style.someSpace }}>
          <Typography sx={style.showExpense}>
            {totalExpense.map((ex, index) => {
              return (
                <Card sx={style.cardSpace} key={index}>
                  <CardContent>
                    <Typography>title: {ex.title}</Typography>
                    <Typography>amount: {ex.amount}</Typography>
                  </CardContent>
                </Card>
              )
            })}
          </Typography>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default ExpenseTrackerLayout

const style: { [key: string]: React.CSSProperties } = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  someSpace: { margin: "16px", padding: "16px" },
  cardSpace: { margin: "16px", padding: "8px" },
  showExpense: {
    margin: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // display: "bl",
    // justifyContent: "center",
  },
}
