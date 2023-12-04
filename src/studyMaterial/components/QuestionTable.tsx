import { useMemo } from "react"
import { Table } from "../../common-components/table/Table"
import { NotesType } from "./SmRepo"

type QuestionTableType = {
  onRowClick: (row: any) => any
  tableData: NotesType[]
}

const QuestionTable: React.FC<QuestionTableType> = (props) => {
  const { onRowClick, tableData } = props

  tableData.sort((a, b) => b.faqRate - a.faqRate)

  // const [selectedRow, setSelectedRow] = useState(null)
  // const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false)

  // const notesRepo = new SmRepo()

  // const handleViewClick = (row: any) => {
  //   // navigate(`/store/viewstore/${row.id}`)
  // }
  // const handleEditClick = (row: any) => {
  //   // navigate(`/store/updatestore/${row.id}`)
  // }
  // const handleDeleteClick = (row: any) => {
  //   setSelectedRow(row)
  //   toggleConfirmationModal()
  // }
  // const toggleConfirmationModal = () => {
  //   setConfirmationModalOpen(!isConfirmationModalOpen)
  // }

  const columns = useMemo(
    () => [
      {
        Header: "Sl No",
        accessor: "slNo",
        width: 1,
      },
      {
        Header: "Questions",
        accessor: "question",
        width: 200,
      },
      {
        Header: "FAQ Rate",
        accessor: "faqRate",
        width: 1,
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
