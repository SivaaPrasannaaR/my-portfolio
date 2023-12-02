import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { NotesType } from "../../smRepo/SmRepo"

type NotesComponentType = {
  content: NotesType
  // setContent: React.Dispatch<React.SetStateAction<NotesType>>
  handleContentOnChange: (value: string) => void
  saveContent: (row: any) => Promise<void>
}

const NotesComponent: React.FC<NotesComponentType> = (props) => {
  const { content, handleContentOnChange, saveContent } = props
  const [editable, setEditable] = useState<boolean>(false)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ]

  async function handleSaveContent() {
    await saveContent(content)
    setEditable(!editable)
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{content.question}</h2>
        {editable ? (
          <div style={{ display: "flex", gap: "4px" }}>
            <button
              style={{
                padding: "8px",
              }}
              onClick={() => handleSaveContent()}
            >
              {"Save"}
            </button>
            <button
              style={{
                padding: "8px",
              }}
              onClick={() => setEditable(!editable)}
            >
              {"Cancel"}
            </button>
          </div>
        ) : (
          <button
            style={{
              padding: "8px",
            }}
            onClick={() => setEditable(!editable)}
          >
            {"Edit"}
          </button>
        )}
      </div>
      <div
        style={{
          pointerEvents: editable ? "auto" : "none",
        }}
      >
        <ReactQuill
          theme="snow"
          value={content.answer}
          onChange={handleContentOnChange}
          modules={modules}
          formats={formats}
          readOnly={!editable}
          style={{
            flex: 1,
            overflowY: "auto",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  )
}

export default NotesComponent
