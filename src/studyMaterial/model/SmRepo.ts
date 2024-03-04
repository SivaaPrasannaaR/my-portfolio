import Firestore from "../../global/utils/firebase/firebase"
import firebaseCollectionNames from "../../global/utils/firebase/firebaseCollection"
import { collection, query, where } from "firebase/firestore"

export type NotesType = {
  id: string
  subject: string
  question: string
  faqRate: number
  answer: string
}

export type SubjectType = {
  title: string
  rank: number
}

export class SmRepo {
  private collectionRef(subjectName: string) {
    const collName = subjectName
      ? `${firebaseCollectionNames.interviewNotes}/subject/${subjectName}`
      : firebaseCollectionNames.interviewNotes

    const collRef = Firestore.collectionRef(collName)
    return collRef
  }

  private subCollectionRef(subjectName: string) {
    const documentRef = Firestore.documentRef(
      firebaseCollectionNames.interviewNotes,
      "subject"
    )

    const collRef = collection(documentRef, subjectName)
    return collRef
  }

  private documentRef(subjectName: string, docId: string) {
    const collRef = Firestore.subDocRef(
      firebaseCollectionNames.interviewNotes,
      "subject",
      subjectName,
      docId
    )
    return collRef
  }

  async updateSubjectList(subjecList: SubjectType[]) {
    try {
      const documentRef = Firestore.documentRef(
        firebaseCollectionNames.interviewNotes,
        "subject"
      )

      await Firestore.setData(
        firebaseCollectionNames.interviewNotes,
        "subject",
        { subjecList: subjecList },
        documentRef
      )
    } catch (err) {
      console.log(err)
      return
    }
  }

  async getSubjectList(): Promise<SubjectType[]> {
    try {
      const data = await Firestore.getData(
        firebaseCollectionNames.interviewNotes,
        "subject"
      )
      return data.subjecList
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async createNotes(subjectName: string, newNote: NotesType) {
    try {
      const collectionRef = this.subCollectionRef(subjectName)

      await Firestore.createData(
        firebaseCollectionNames.interviewNotes,
        newNote,
        collectionRef
      )
    } catch (err) {
      console.log(err)
      return
    }
  }

  async getNoteById(subjectName: string, noteId: string): Promise<any> {
    try {
      const documentRef = this.documentRef(subjectName, noteId)

      const data: any = await Firestore.getData(
        firebaseCollectionNames.interviewNotes,
        noteId,
        documentRef
      )
      return data
    } catch (err) {
      console.log(err)
      return
    }
  }
  async getAllNotes(subjectName: string): Promise<any[]> {
    try {
      const collectionRef = this.subCollectionRef(subjectName)

      const data: any[] = await Firestore.getAllData(
        firebaseCollectionNames.interviewNotes,
        collectionRef
      )
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async getSearchNotes(subjectName: string, search: string): Promise<any[]> {
    try {
      const collectionRef = this.subCollectionRef(subjectName)
      const qu = query(
        collectionRef,
        where("question", ">=", search), // StartAt the beginning of the term
        where("question", "<=", search + "\uf8ff") // EndAt the end of the term
      )

      const data: any[] = await Firestore.getAllData(
        firebaseCollectionNames.interviewNotes,
        collectionRef,
        qu
      )
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async updateNotes(
    subjectName: string,
    noteId: string,
    updatedNote: NotesType
  ) {
    try {
      const documentRef = this.documentRef(subjectName, noteId)

      await Firestore.setData(
        firebaseCollectionNames.interviewNotes,
        noteId,
        updatedNote,
        documentRef
      )
    } catch (err) {
      console.log(err)
      return
    }
  }
}
