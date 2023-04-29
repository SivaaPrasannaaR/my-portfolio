import {
  Input,
  Paper,
  Button,
  InputLabel,
  Card,
  Stack,
  CardContent,
  Typography,
} from "@mui/material"
import { useState } from "react"

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
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

type ExpenseType = { title: string; amount: string }

// This project is made using material UI
const ExpenseTrackerLayout = () => {
  const [expense, setExpense] = useState<ExpenseType>({ title: "", amount: "" })
  const [totalExpense, setTotalExpense] = useState<ExpenseType[]>([])
  return (
    <Stack>
      <Stack>
        <Paper sx={{ ...style.root, ...style.someSpace }}>
          <InputLabel htmlFor="title">
            <Typography variant="h5">Title</Typography>
          </InputLabel>
          <Input
            aria-label="title"
            id="title"
            value={expense.title}
            onChange={(e) =>
              setExpense((s) => ({ ...s, title: e.target.value }))
            }
          />
          <InputLabel htmlFor="amount">
            <Typography variant="h5">Amount</Typography>
          </InputLabel>
          <Input
            aria-label="amount"
            id="amount"
            value={expense.amount}
            onChange={(e) =>
              setExpense((s) => ({ ...s, amount: e.target.value }))
            }
          />
          <Button
            onClick={() =>
              setTotalExpense((s) => {
                return [...s, expense].flat()
              })
            }
          >
            Add
          </Button>
        </Paper>
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
