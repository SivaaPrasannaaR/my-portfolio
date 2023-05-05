import {
  Paper,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material"
import { useState } from "react"

type ExpenseType = { title: string; amount: string }
enum EntryType {
  income = "income",
  expense = "expense",
  investment = "investment",
}

type EntryTypeKeys = keyof typeof EntryType
type EntryStateType = (typeof EntryType)[EntryTypeKeys]

const textDesc = {
  income: "Enter Income",
  expense: "Enter Expense",
  investment: "Enter Investment",
}

// This project is made using material UI
const Entry: React.FC = () => {
  const [expense, setExpense] = useState<ExpenseType>({ title: "", amount: "" })
  const [totalExpense, setTotalExpense] = useState<ExpenseType[]>([])
  const [entryType, setEntryType] = useState<EntryStateType>(EntryType.expense)

  return (
    <Paper sx={style.entryHeader}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="expense"
          name="radio-buttons-group"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value as EntryStateType)}
          sx={style.colorWhite}
        >
          <FormControlLabel value="income" control={<Radio />} label="Income" />
          <FormControlLabel
            value="expense"
            control={<Radio />}
            label="Expense"
          />
          <FormControlLabel
            value="investment"
            control={<Radio />}
            label="Investment"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="expense-desc"
        label={textDesc[entryType]}
        sx={style.colorWhite}
        focused
      />
      <TextField id="expense-amt" label="Enter Amount" focused />

      <Button
        variant="contained"
        onClick={() =>
          setTotalExpense((s) => {
            return [...s, expense].flat()
          })
        }
      >
        Add
      </Button>
    </Paper>
  )
}

export default Entry

const style: { [key: string]: React.CSSProperties } = {
  entryHeader: {
    // backgroundColor: "black",
    // color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    margin: "16px",
    padding: "16px",
  },
  colorWhite: {
    // color: "white",
  },
}
