import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore"
import { db } from "./firebase_config"
import { FirebaseRefsValue } from "./firebaseCollection"

// export const getSnapshot = (refs: CollectionReference) => {
//   return onSnapshot(refs, (snapshot) => {
//     return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//   })
// }

export default class Firestore {
  // used to access the firestore collection
  public static collectionRef = (collectionName: FirebaseRefsValue) =>
    collection(db, collectionName)

  // To add data in firestore
  public static createData = async (
    collectionName: FirebaseRefsValue,
    data: Object
  ) => {
    /**
     * addDoc have 1st arg as ref to firestore and collection
     * 2nd arg as data
     */
    await addDoc(Firestore.collectionRef(collectionName), data)
      .then(() => console.log("Data created in Firestore"))
      .catch((error) => console.error(error))
  }

  // To update only the existed data in firestore
  public static updateData = async (
    collectionName: FirebaseRefsValue,
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
    collectionName: FirebaseRefsValue,
    id: string,
    data: Object
  ) => {
    const docRef = doc(db, collectionName, id)
    await setDoc(docRef, data)
      .then(() => console.log("Data updated in Firestore"))
      .catch((error) => console.error(error))
  }

  // To get all data from main collection
  public static getAllData = async (collectionName: FirebaseRefsValue) => {
    const firestoreCollectionRef = this.collectionRef(collectionName)
    const collectionSnapshot = await getDocs(firestoreCollectionRef)
    const dataList = collectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    return dataList
  }

  // To get all data from main collection
  public static getSnapshot = async (collectionName: FirebaseRefsValue) => {
    const refs = Firestore.collectionRef(collectionName)
    const unsubscribe = onSnapshot(refs, (snapshot) => {
      return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    })

    return () => unsubscribe()
  }
}
