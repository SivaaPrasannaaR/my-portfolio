import Firestore from "./firebase"

const firebaseRefs = {
  usersRef: Firestore.collectionRef("users"),
}

export default firebaseRefs
