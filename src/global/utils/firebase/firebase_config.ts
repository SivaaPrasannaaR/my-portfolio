import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"

// used the firebase/app import to initialize the firebase access
export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBQVCFYd6sLXBi_YGQKvciqlgv068AXWkQ",
  authDomain: "myexpensetracker-a46f2.firebaseapp.com",
  databaseURL: "https://myexpensetracker-a46f2-default-rtdb.firebaseio.com",
  projectId: "myexpensetracker-a46f2",
  storageBucket: "myexpensetracker-a46f2.appspot.com",
  messagingSenderId: "148066784519",
  appId: "1:148066784519:web:4c57d74e4cefe96bc261a2",
  measurementId: "G-NDVY21ECTC",
})

// used to get auth from the firebase
export const auth = getAuth(firebaseConfig)

// used to access the firestore (DB)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
export const realTimeDb = getDatabase(firebaseConfig)
