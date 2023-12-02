import {
  collection,
  addDoc,
  doc,
  updateDoc,
  setDoc,
  getDocs,
  getDoc,
  onSnapshot,
  CollectionReference,
  DocumentData,
  DocumentReference,
  Query,
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
  public static collectionRef = (
    collectionName: FirebaseRefsValue
  ): CollectionReference<DocumentData> => {
    return collection(db, collectionName)
  }

  public static documentRef = (
    collectionName: FirebaseRefsValue,
    id: string
  ): DocumentReference<DocumentData> => {
    return doc(db, collectionName, id)
  }

  public static subDocRef = (
    collectionName: FirebaseRefsValue,
    id: string,
    subCollectionName: FirebaseRefsValue,
    subDocId: string
  ): DocumentReference<DocumentData> => {
    return doc(db, collectionName, id, subCollectionName, subDocId)
  }

  // To add data in firestore
  public static createData = async (
    collectionName: FirebaseRefsValue,
    data: Object,
    collectionRef?: CollectionReference<DocumentData>
  ) => {
    const colRef = collectionRef
      ? collectionRef
      : Firestore.collectionRef(collectionName)
    /**
     * addDoc have 1st arg as ref to firestore and collection
     * 2nd arg as data
     */
    await addDoc(colRef, data).catch((error) => console.error(error))
    console.log("Data created in Firestore")
  }

  // To update only the existed data in firestore
  public static updateData = async (
    collectionName: FirebaseRefsValue,
    id: string,
    data: Object,
    documentRef?: DocumentReference<DocumentData>
  ) => {
    const docRef = documentRef
      ? documentRef
      : Firestore.documentRef(collectionName, id)
    await updateDoc(docRef, { data })
      .then(() => console.log("Data updated in Firestore"))
      .catch((error) => console.error(error))
  }

  // To update or create data in firestore
  public static setData = async (
    collectionName: FirebaseRefsValue,
    id: string,
    data: Object,
    documentRef?: DocumentReference<DocumentData>
  ) => {
    const docRef = documentRef
      ? documentRef
      : Firestore.documentRef(collectionName, id)

    const new_date = new Date()
    const dataWithTimeStamp = {
      ...data,
      updatedAt: { date: new_date, timestamp: new_date.getTime() },
    }
    console.log({ dataWithTimeStamp })
    await setDoc(docRef, dataWithTimeStamp)
      .then(() => console.log("Data updated in Firestore", dataWithTimeStamp))
      .catch((error) => console.error(error))
  }

  // To get all data from main collection
  public static getData = async (
    collectionName: FirebaseRefsValue,
    id: string,
    documentRef?: DocumentReference<DocumentData>
  ) => {
    const docRef = documentRef
      ? documentRef
      : Firestore.documentRef(collectionName, id)

    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
      // Document exists, you can access the data
      const data = docSnapshot.data()
      return data
    }
    return {}
  }

  // To get all data from main collection
  public static getAllData = async (
    collectionName: FirebaseRefsValue,
    collectionRef?: CollectionReference<DocumentData>,
    query?: Query<DocumentData>
  ) => {
    const colRef = collectionRef
      ? collectionRef
      : Firestore.collectionRef(collectionName)

    const collectionSnapshot = await getDocs(query ? query : colRef)
    const dataList = collectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    return dataList
  }

  // To get all data from main collection
  public static getSnapshot = async (
    collectionName: FirebaseRefsValue,
    collectionRef?: CollectionReference<DocumentData>
  ) => {
    const colRef = collectionRef
      ? collectionRef
      : Firestore.collectionRef(collectionName)
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    })

    return () => unsubscribe()
  }
}
