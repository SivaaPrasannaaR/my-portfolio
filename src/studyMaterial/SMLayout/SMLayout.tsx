import { Box, Stack, useMediaQuery, Button } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import styles from "../SMLayout.module.scss"
import QuestionTable from "../components/QuestionTable"
import NotesComponent from "../components/NotesComponent"
import { useEffect, useState } from "react"
import { NotesType, SmRepo, SubjectType } from "../components/SmRepo"
import SubjectMenu from "../components/SubjectMenu"
import SearchBar from "../../common-components/searchBar/SearchBar"

const emptyContent = {} as NotesType

const SMLayout = () => {
  const [tableData, setTableData] = useState([] as NotesType[])
  const [tabledataCopy, setTabledataCopy] = useState([] as NotesType[])
  // the content that will be displayed in notes
  const [content, setContent] = useState<NotesType>(emptyContent)

  const [subject, setSubject] = useState<string>("")
  const [subjectList, setSubjectList] = useState<SubjectType[]>([])

  const [editable, setEditable] = useState<boolean>(false)
  const isMobile = useMediaQuery("(max-width: 600px)")
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
        subjectDataList.sort((a, b) => a.rank - b.rank)
        setSubjectList(subjectDataList)
        setSubject(subjectDataList[0].title)
      } else {
        setSubjectList([])
      }

      fetchNotes(subjectDataList[0].title)
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
      await notesRepo.updateNotes(row.subject, row.id, row)
    } else {
      const newNote: NotesType = {
        subject: subject,
        faqRate: 0,
        ...row,
      }
      await notesRepo.createNotes(subject, newNote)
    }
    if (subject === "All Notes") {
      getAllNotes()
    } else {
      fetchNotes(subject, row.id || "newNote")
    }
  }

  function onSubjectClick(sub: string) {
    setSubject(sub)
    fetchNotes(sub)
  }

  async function getAllNotes() {
    const promises = subjectList.map(async (sub) => {
      const notesData = await notesRepo.getAllNotes(sub.title)
      return notesData.length ? notesData : []
    })

    const subDataList = await Promise.all(promises)

    const subData: NotesType[] = subDataList.flat()

    if (subData.length) {
      subData.sort((a, b) => b.faqRate - a.faqRate)

      setTableData(subData)
      setTabledataCopy(subData)

      setContent(subData[0])
    } else {
      setTableData([])
      setContent(emptyContent)
    }
    setEditable(false)
  }

  async function createNewNote() {
    if (subject === "All Notes") {
      return
    }
    setContent(emptyContent)
    setEditable(true)
  }
  async function updateSubjectList(subjList: SubjectType[]) {
    subjList.sort((a, b) => a.rank - b.rank)
    await notesRepo.updateSubjectList(subjList)
    await fetchData()
  }

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
      <div
        className={styles.smHeader}
        style={isMobile ? { maxWidth: "92vw" } : { maxWidth: "45vw" }}
      >
        <SubjectMenu
          subjectList={subjectList}
          subject={subject}
          onSubjectClick={onSubjectClick}
          getAllNotes={getAllNotes}
          createNewNote={createNewNote}
          updateSubjectList={updateSubjectList}
        />
        {!isMobile && (
          <Button
            style={{
              color: "black",
              minWidth: "175px",
              fontWeight: "bolder",
            }}
            onClick={createNewNote}
          >
            {subject}
          </Button>
        )}
        <SearchBar onSearch={handleSearch} />
        {!isMobile && (
          <Button
            style={{
              color: "black",
              minWidth: "50px",
              fontWeight: "bolder",
            }}
            onClick={fetchData}
          >
            <RefreshIcon fontSize="large" color="primary" />
          </Button>
        )}
      </div>
      <div className={styles.smLayout_container}>
        <Box maxWidth={isMobile ? "100%" : "45vw"}>
          <Stack>
            <QuestionTable onRowClick={onRowClick} tableData={tableData} />
          </Stack>
        </Box>
        <Box>
          <Stack>
            <NotesComponent
              content={content}
              setContent={setContent}
              handleSearch={handleSearch}
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
