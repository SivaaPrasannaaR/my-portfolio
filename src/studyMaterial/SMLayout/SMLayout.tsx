import { Box, Stack } from "@mui/material"
import styles from "../SMLayout.module.scss"
import QuestionTable from "../components/QuestionTable"
import NotesComponent from "../components/NotesComponent"
import { useEffect, useState } from "react"
import { NotesType, SmRepo } from "../components/SmRepo"
import SubjectMenu from "../components/SubjectMenu"
import SearchBar from "../../common-components/searchBar/SearchBar"

const emptyContent = {} as NotesType

const SMLayout = () => {
  const [tableData, setTableData] = useState([] as NotesType[])
  const [tabledataCopy, setTabledataCopy] = useState([] as NotesType[])
  // the content that will be displayed in notes
  const [content, setContent] = useState<NotesType>(emptyContent)

  const [subject, setSubject] = useState<string>("")
  const [subjectList, setSubjectList] = useState<string[]>([])

  const [editable, setEditable] = useState<boolean>(false)

  const notesRepo = new SmRepo()

  function fetchNotes(subject: string, noteId?: string) {
    notesRepo.getAllNotes(subject).then((notesData: NotesType[]) => {
      if (notesData.length) {
        setTableData(notesData)
        setTabledataCopy(notesData)

        notesData.sort((a, b) => b.faqRate - a.faqRate)

        if (noteId) {
          const note = noteId
            ? notesData.find((note) => note.id === noteId)
            : null
          note && setContent(note)
        } else {
          setContent(notesData[0])
        }
      } else {
        setTableData([])
        setContent(emptyContent)
      }
      setEditable(false)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onRowClick = async (row: any) => {
    setContent(row)
    setEditable(false)
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
    fetchNotes(subject, row.id || "newNote")
  }

  function onSubjectClick(sub: string) {
    setSubject(sub)
    fetchNotes(sub)
  }
  async function createNewNote() {
    setContent(emptyContent)
    setEditable(true)
  }
  async function createNewSubject() {}

  function handleSearch(search: string) {
    if (search) {
      const filteredQuestion = tabledataCopy.filter((data) =>
        data.question.toLowerCase().includes(search.toLowerCase())
      )
      const filteredAnswer = tabledataCopy.filter((data) => {
        const isSearchedAnswer = data.answer
          ?.toLowerCase()
          .includes(search.toLowerCase())
        const isSearchedQuestion = data.question
          ?.toLowerCase()
          .includes(search.toLowerCase())
        return isSearchedAnswer && !isSearchedQuestion
      })

      const filteredData = [...filteredQuestion, ...filteredAnswer]

      setTableData(filteredData)
    } else {
      setTableData(tabledataCopy)
    }
  }

  return (
    <div className={styles.smLayoutWrapper}>
      <SubjectMenu
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
        <Box minWidth="600px">
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
