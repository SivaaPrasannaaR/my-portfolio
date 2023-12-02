import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { NotesType } from "./SmRepo"
import TextField from "@mui/material/TextField"

type NotesComponentType = {
  content: NotesType
  setContent: React.Dispatch<React.SetStateAction<NotesType>>
  editable: boolean
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
  saveContent: (row: any) => Promise<void>
}

const NotesComponent: React.FC<NotesComponentType> = (props) => {
  const { content, setContent, editable, setEditable, saveContent } = props

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

  async function handleQuestionChange(value: string) {
    setContent((prevState) => ({
      ...prevState,
      question: value,
    }))
  }

  async function handleAnswerChange(value: string) {
    setContent((prevState) => ({
      ...prevState,
      answer: value,
    }))
  }

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
        {!editable ? (
          <h2 onClick={() => setEditable(!editable)}>{content.question}</h2>
        ) : (
          <TextField
            variant="outlined"
            fullWidth
            value={content?.question}
            onChange={(e) => handleQuestionChange(e.target.value)}
            InputProps={{
              style: {
                border: "1px solid #000",
              },
            }}
          />
        )}
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
          onChange={handleAnswerChange}
          modules={modules}
          formats={formats}
          readOnly={!editable}
          style={{
            flex: 1,
            height: "85vh",
            overflowY: "auto",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  )
}

export default NotesComponent
