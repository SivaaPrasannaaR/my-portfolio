import Firestore from "../../global/utils/firebase/firebase"
import firebaseCollectionNames from "../../global/utils/firebase/firebaseCollection"

export type NotesType = {
  id: string
  title: string
  question: string
  faqRate: number
  answer: string
}

export class SmRepo {
  constructor() {}

  async createNotes(newNote: NotesType) {
    try {
      await Firestore.createData(
        firebaseCollectionNames.interviewNotes,
        newNote
      )
    } catch (err) {
      console.log(err)
      return
    }
  }

  async getNoteById(noteId: string): Promise<any> {
    try {
      const data: any = await Firestore.getData(
        firebaseCollectionNames.interviewNotes,
        noteId
      )
      return data
    } catch (err) {
      console.log(err)
      return
    }
  }
  async getAllNotes(): Promise<any[]> {
    try {
      const data: any[] = await Firestore.getAllData(
        firebaseCollectionNames.interviewNotes
      )
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async updateNotes(noteId: string, updatedNote: NotesType) {
    try {
      await Firestore.setData(
        firebaseCollectionNames.interviewNotes,
        noteId,
        updatedNote
      )
    } catch (err) {
      console.log(err)
      return
    }
  }
}
