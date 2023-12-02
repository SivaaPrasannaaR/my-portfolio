type HandleMethod = (row: any) => any

export const renderActionsColumn =
  (
    handleViewClick: HandleMethod,
    handleEditClick: HandleMethod,
    handleDeleteClick: HandleMethod
  ) =>
  (row: any) =>
    (
      <div>
        <span
          style={{ marginRight: "20px", float: "right", color: "dodgerblue" }}
          onClick={() => handleViewClick(row)}
        >
          <i className="bi bi-eye-fill cursor-pointer"></i>
        </span>
        <span
          style={{ marginRight: "20px", float: "right", color: "seagreen" }}
          onClick={() => handleEditClick(row)}
        >
          <i className="bi bi-pencil-fill cursor-pointer"></i>
        </span>
        <span
          style={{ marginRight: "20px", float: "right", color: "tomato" }}
          onClick={() => handleDeleteClick(row)}
        >
          <i className="bi bi-trash-fill cursor-pointer"></i>
        </span>
      </div>
    )
