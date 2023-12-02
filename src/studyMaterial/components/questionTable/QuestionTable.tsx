import { useEffect, useMemo, useState } from "react"
import { Table } from "../../../common-components/table/Table"
import { NotesType, SmRepo } from "../../smRepo/SmRepo"

type QuestionTableType = {
  onRowClick: (row: any) => any
}

const QuestionTable: React.FC<QuestionTableType> = (props) => {
  const { onRowClick } = props
  const [tableData, setTableData] = useState([] as any[])
  const [selectedRow, setSelectedRow] = useState(null)
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false)

  const notesRepo = new SmRepo()

  const handleViewClick = (row: any) => {
    // navigate(`/store/viewstore/${row.id}`)
  }
  const handleEditClick = (row: any) => {
    // navigate(`/store/updatestore/${row.id}`)
  }
  const handleDeleteClick = (row: any) => {
    setSelectedRow(row)
    toggleConfirmationModal()
  }
  const toggleConfirmationModal = () => {
    setConfirmationModalOpen(!isConfirmationModalOpen)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Create a new note
  const newNote: NotesType = {
    id: "id",
    title: "Sample Note",
    question: "What is your question?",
    faqRate: 5,
    answer: "This is the answer.",
  }

  const fetchData = async () => {
    try {
      console.log("fetching")
      //   await notesRepo.createNotes(newNote)
      const data = await notesRepo.getAllNotes()
      if (data.length) {
        setTableData(data)
      } else {
        setTableData([])
      }
    } catch (error) {
      console.error("🚀 ~ file:~ fetchData ~ error:", error)
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: "Sl No",
        accessor: "slNo",
        width: 5,
      },
      {
        Header: "Questions",
        accessor: "question",
        width: 200,
      },
      {
        Header: "FAQ Rate",
        accessor: "faqRate",
        width: 5,
      },

      // {
      //   Header: "Action",
      //   accessor: renderActionsColumn(
      //     handleViewClick,
      //     handleEditClick,
      //     handleDeleteClick
      //   ),
      //   id: "action",
      // },
    ],
    []
  )

  return <Table data={tableData} columns={columns} onRowClick={onRowClick} />
}

export default QuestionTable
