import { Box, Stack } from "@mui/material"
import styles from "../SMLayout.module.scss"
import SubjectTitle from "../components/SubjectTitle"
import QuestionTable from "../components/questionTable/QuestionTable"
import NotesComponent from "../components/answer/NotesComponent"
import { useState } from "react"
import { NotesType, SmRepo } from "../smRepo/SmRepo"

const SMLayout = () => {
  const [content, setContent] = useState<NotesType>({} as NotesType)

  const notesRepo = new SmRepo()

  const handleContentOnChange = (value: string) => {
    setContent((prevState) => ({
      ...prevState,
      answer: value,
    }))
  }

  const onRowClick = async (row: any) => {
    console.log(row)
    const data = await notesRepo.getNoteById(row.id)
    setContent(data)
  }

  async function saveContent(row: any) {
    await notesRepo.updateNotes(row.id, row)
  }

  return (
    <div>
      <SubjectTitle />
      <div className={styles.smLayout_container}>
        <Box minWidth="500px">
          <Stack>
            <QuestionTable onRowClick={onRowClick} />
          </Stack>
        </Box>
        <Box minWidth="600px" style={{ marginLeft: "1rem" }}>
          <Stack>
            <NotesComponent
              content={content}
              handleContentOnChange={handleContentOnChange}
              saveContent={saveContent}
            />
          </Stack>
        </Box>
      </div>
    </div>
  )
}

export default SMLayout
