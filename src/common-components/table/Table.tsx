import { Column, useTable } from "react-table"

type TableType = {
  data: any[]
  columns: Column<any>[]
  onRowClick: (event: any) => any
}

export const Table: React.FC<TableType> = (props) => {
  const { data, columns, onRowClick } = props

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table
      {...getTableProps()}
      style={{ borderSpacing: "0", width: "100%", border: "1px solid black" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "1px solid #ddd",
                  background: "#f2f2f2",
                  padding: "8px",
                  textAlign: "left",
                  border: "1px solid black",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <tr
              {...row.getRowProps()}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "4px",
                textAlign: "left",
                border: "1px solid black",
              }}
              onClick={() => onRowClick(row.original)}
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    width: cell.column.width,
                    padding: "2px",
                    border: "1px solid black",
                    textAlign: ["slNo", "faqRate"].includes(cell.column.id)
                      ? "center"
                      : "left",
                  }}
                >
                  {cell.column.id === "slNo" ? index + 1 : cell.render("Cell")}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
