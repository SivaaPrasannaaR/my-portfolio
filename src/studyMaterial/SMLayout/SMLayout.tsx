import { Box, Stack } from "@mui/material"
import styles from "../SMLayout.module.scss"
import QuestionTable from "../components/QuestionTable"
import NotesComponent from "../components/NotesComponent"
import { useEffect, useState } from "react"
import { NotesType, SmRepo } from "../components/SmRepo"
import SubjectTitle from "../components/SubjectTitle"
import SearchBar from "../../common-components/searchBar/SearchBar"

const emptyContent = {} as NotesType

const SMLayout = () => {
  const [tableData, setTableData] = useState([] as any[])
  const [content, setContent] = useState<NotesType>(emptyContent)
  const [subject, setSubject] = useState<string>("")
  const [subjectList, setSubjectList] = useState<string[]>([])

  const [editable, setEditable] = useState<boolean>(false)

  const notesRepo = new SmRepo()

  function fetchNotes(subject: string) {
    notesRepo.getAllNotes(subject).then((notesData) => {
      if (notesData.length) {
        setTableData(notesData)
        setContent(notesData[0])
      } else {
        setTableData([])
        setContent(emptyContent)
      }
    })
  }

  const fetchData = async () => {
    try {
      console.log("fetching")
      const subjectDataList = await notesRepo.getSubjectList()
      if (subjectDataList.length) {
        setSubjectList(subjectDataList)
        setSubject(subjectDataList[0])
      } else {
        setSubjectList([])
      }

      fetchNotes(subjectDataList[0])
    } catch (error) {
      console.error("🚀 ~ file:~ fetchData ~ error:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onRowClick = async (row: any) => {
    setContent(row)
  }

  async function saveContent(row: any) {
    if (row.id) {
      await notesRepo.updateNotes(subject, row.id, row)
    } else {
      const newNote: NotesType = {
        subject: subject,
        faqRate: 0,
        ...row,
      }
      await notesRepo.createNotes(subject, newNote)
    }
    fetchData()
  }

  function onSubjectClick(sub: string) {
    setSubject(sub)
    fetchNotes(sub)
  }
  async function createNewNote() {
    setContent({
      ...emptyContent,
      question: "What is your question?",
      answer: "Your Answer",
    })
    setEditable(true)
  }
  async function createNewSubject() {}

  function handleSearch(search: string) {
    notesRepo.getSearchNotes(subject, search).then((notesData) => {
      if (notesData.length) {
        setTableData(notesData)
        setContent(notesData[0])
      } else {
        setTableData([])
        setContent(emptyContent)
      }
    })
  }

  return (
    <div>
      <SubjectTitle
        subjectList={subjectList}
        subject={subject}
        onSubjectClick={onSubjectClick}
        createNewNote={createNewNote}
        createNewSubject={createNewSubject}
      />
      <div className={styles.smLayout_container}>
        <Box minWidth="500px">
          <Stack>
            <SearchBar onSearch={handleSearch} />
            <QuestionTable onRowClick={onRowClick} tableData={tableData} />
          </Stack>
        </Box>
        <Box minWidth="600px" style={{ marginLeft: "1rem" }}>
          <Stack>
            <NotesComponent
              content={content}
              setContent={setContent}
              saveContent={saveContent}
              editable={editable}
              setEditable={setEditable}
            />
          </Stack>
        </Box>
      </div>
    </div>
  )
}

export default SMLayout
