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

type EntryPropsType = {
  title: any
  amount: any
  handleAddButton: (event: any) => Promise<void>
}

// This project is made using material UI
const Entry: React.FC<EntryPropsType> = (props) => {
  const { title, amount, handleAddButton } = props

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
        inputRef={title}
        focused
      />
      <TextField
        id="expense-amt"
        inputRef={amount}
        label="Enter Amount"
        focused
      />

      <Button variant="contained" onClick={handleAddButton}>
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
