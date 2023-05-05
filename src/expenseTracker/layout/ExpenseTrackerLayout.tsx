import { Paper, Card, Stack, CardContent, Typography } from "@mui/material"
import { useState } from "react"
import Entry from "../component/Entry"

type ExpenseType = { title: string; amount: string }

// This project is made using material UI
const ExpenseTrackerLayout: React.FC = () => {
  // const [expense, setExpense] = useState<ExpenseType>({ title: "", amount: "" })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalExpense, setTotalExpense] = useState<ExpenseType[]>([])
  return (
    <Stack>
      <Stack>
        <Entry />
      </Stack>
      <Stack>
        <Paper sx={{ ...style.root, ...style.someSpace }}>
          <Typography sx={style.showExpense}>
            {totalExpense.map((ex) => {
              return (
                <Card sx={style.cardSpace}>
                  <CardContent>
                    <div>title: {ex.title}</div>
                    <div>amount: {ex.amount}</div>
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
