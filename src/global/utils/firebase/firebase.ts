import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  getDocs,
  CollectionReference,
  onSnapshot,
} from "firebase/firestore"
import { db } from "./firebase_config"

// export const getSnapshot = (refs: CollectionReference) => {
//   return onSnapshot(refs, (snapshot) => {
//     return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//   })
// }

export default class Firestore {
  // used to access the firestore collection
  public static collectionRef = (collectionName: string) =>
    collection(db, collectionName)

  // To add data in firestore
  public static createData = async (
    refs: CollectionReference,
    data: Object
  ) => {
    await addDoc(refs, data)
      .then(() => console.log("Data created in Firestore"))
      .catch((error) => console.error(error))
  }

  // To update only the existed data in firestore
  public static updateData = async (
    collectionName: string,
    id: string,
    data: Object
  ) => {
    const docRef = doc(db, collectionName, id)
    await updateDoc(docRef, { data })
      .then(() => console.log("Data updated in Firestore"))
      .catch((error) => console.error(error))
  }

  // To update or create data in firestore
  public static setData = async (
    collectionName: string,
    id: string,
    data: Object
  ) => {
    const docRef = doc(db, collectionName, id)
    await setDoc(docRef, data)
      .then(() => console.log("Data updated in Firestore"))
      .catch((error) => console.error(error))
  }

  // To get all data from main collection
  public static getAllData = async (collectionName: string) => {
    const firestoreCollection = this.collectionRef(collectionName)
    const collectionSnapshot = await getDocs(firestoreCollection)
    const dataList = collectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    return dataList
  }

  // To get all data from main collection
  public static getSnapshot = async (refs: CollectionReference) => {
    const unsubscribe = onSnapshot(refs, (snapshot) => {
      return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    })

    return () => unsubscribe()
  }
}
