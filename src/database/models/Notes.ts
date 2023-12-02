import mongoose, { Schema, Document } from "mongoose"

export interface INotes extends Document {
  title: string
  question: string
  faqRate: number
  answer: string
}

const NotesSchema: Schema = new Schema({
  title: { type: String, required: false },
  question: { type: String, required: false },
  faqRate: { type: Number, required: false },
  answer: { type: String, required: false },
})

const NotesModel = mongoose.model<INotes>(
  "Notes",
  NotesSchema,
  "interviewNotes"
)

export default NotesModel
