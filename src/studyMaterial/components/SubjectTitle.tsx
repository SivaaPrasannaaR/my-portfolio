import React from "react"
import { Box, Button, Divider } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import styles from "../SMLayout.module.scss"

interface SubjectTitleProps {
  subjectList: string[] // Assuming subjectList is an array of string subjects
  subject: string // Assuming subjectList is an array of string subjects
  onSubjectClick: (subject: string) => void
  createNewNote: () => void
  createNewSubject: () => void
}

const SubjectTitle: React.FC<SubjectTitleProps> = ({
  subjectList,
  subject,
  onSubjectClick,
  createNewNote,
  createNewSubject,
}) => {
  return (
    <Box className={styles.sideIndex_container}>
      <div className={styles.subjectTitle_header}>
        <Button
          fullWidth
          size="small"
          variant="contained"
          color="primary"
          style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
          startIcon={<AddIcon />}
          onClick={() => createNewSubject()}
        >
          {"Subject"}
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
          startIcon={<AddIcon />}
          onClick={() => createNewNote()}
        >
          {"Note"}
        </Button>
      </div>
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <div className={styles.subjectList_container}>
        {subjectList.map((subj) => (
          <Button
            key={subj}
            fullWidth
            variant={subject === subj ? "contained" : "text"}
            onClick={() => onSubjectClick(subj)}
          >
            {subj}
          </Button>
        ))}
      </div>
    </Box>
  )
}

export default SubjectTitle
