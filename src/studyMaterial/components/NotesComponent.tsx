import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { NotesType } from "./SmRepo"
import { useMediaQuery } from "@mui/material"
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

  const isMobile = useMediaQuery("(max-width: 600px)")

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
    syntax: true,
  }

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
  async function handleFAQRateChange(value: string) {
    setContent((prevState) => ({
      ...prevState,
      faqRate: parseInt(value),
    }))
  }

  async function handleSaveContent() {
    await saveContent(content)
    setEditable(!editable)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: isMobile ? "92vw" : "100%",
        maxHeight: isMobile ? "62vh" : "100%",
        marginLeft: isMobile ? "0rem" : "1rem",
        marginTop: isMobile ? "1rem" : "-3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!editable ? (
          <h2
            style={{
              marginBottom: "0px",
            }}
            onClick={() => setEditable(!editable)}
          >
            {content.question}
          </h2>
        ) : (
          <TextField
            variant="outlined"
            fullWidth
            placeholder="What is your question?"
            value={content?.question}
            onChange={(e) => handleQuestionChange(e.target.value)}
            InputProps={{
              style: {
                border: "1px solid #000",
              },
            }}
          />
        )}
        {editable && (
          <TextField
            label="FAQ Rate"
            type="number"
            value={content?.faqRate}
            onChange={(e) => handleFAQRateChange(e.target.value)}
            inputProps={{
              maxLength: 2,
              style: { width: "60px" }, // Adjust the width as needed
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
          overflowY: "auto",
          flex: 1,
        }}
      >
        <ReactQuill
          theme="snow"
          placeholder="Type your answer here!!!"
          value={content.answer}
          onChange={handleAnswerChange}
          modules={modules}
          readOnly={!editable}
          style={{
            flex: 1,
            height: "88vh",
            overflowY: "auto",
            marginTop: "8px",
            border: "1px solid #000",
          }}
        />
      </div>
    </div>
  )
}

export default NotesComponent
