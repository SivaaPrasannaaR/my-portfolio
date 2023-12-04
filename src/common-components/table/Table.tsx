import { Column, useTable } from "react-table"
import React, { useState } from "react"
import styles from "./table.module.scss"

type TableType = {
  data: any[]
  columns: Column<any>[]
  onRowClick: (event: any) => any
}

export const Table: React.FC<TableType> = (props) => {
  const { data, columns, onRowClick } = props

  const [highlightRow, setHighlightRow] = useState<number>(0)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  function handleRowClick(value: any, index: number) {
    onRowClick(value)
    setHighlightRow(index)
  }

  return (
    <div
      style={{ overflow: "auto", maxHeight: "85vh", border: "1px solid black" }}
    >
      <table
        {...getTableProps()}
        style={{
          borderSpacing: "0",
          width: "100%",
          border: "1px solid black",
          tableLayout: "fixed",
        }}
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
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width:
                      column.id === "slNo" || column.id === "faqRate"
                        ? "24px"
                        : "175px",
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
                className={`${styles.tableTr} ${
                  highlightRow === index ? styles.tableTrBg : ""
                }`}
                onClick={() => handleRowClick(row.original, index)}
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
                    {cell.column.id === "slNo"
                      ? index + 1
                      : cell.render("Cell")}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
