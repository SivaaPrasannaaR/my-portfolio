import TaskTable from "./components/TaskTable"
import { Box, Heading } from "@chakra-ui/react"

type TableType = {
  data: any[]
  columns: any[]
  onRowClick: (row: any) => any
}

export const Table: React.FC<TableType> = (props) => {
  const { data, columns, onRowClick } = props

  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>TanStack Table</Heading>
      <TaskTable />
    </Box>
  )
}
