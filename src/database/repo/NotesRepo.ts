import { NotesType } from "../../studyMaterial/model/SmRepo"
import NotesModel from "../models/Notes"

export class NotesRepo {
  constructor() {}

  async getAllNotes(): Promise<any[]> {
    try {
      const result = await NotesModel.find({})
      return result
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async createNotes(newNote: NotesType): Promise<any> {
    try {
      const result = await NotesModel.create(newNote)
      return result
    } catch (err) {
      console.log(err)
      return
    }
  }
}
