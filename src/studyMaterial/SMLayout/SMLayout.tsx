import { Box, Stack, TextField } from "@mui/material"
import styles from "../SMLayout.module.scss"
import { useState } from "react"
import SideIndex from "../components/SideIndex"

const SMLayout = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <SideIndex />
      <div className={styles.smLayout_container}>
        <Stack>
          <Box>
            <TextField id="title" label="Title" variant="outlined" />
            <TextField
              id="content"
              label="content"
              multiline
              maxRows={8}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* <ReactMarkdown >{value}</ReactMarkdown> */}
          </Box>
        </Stack>
      </div>
    </div>
  )
}

export default SMLayout
