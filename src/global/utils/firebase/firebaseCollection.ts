export const firebaseCollectionNames = {
  users: "users",
  expenseTracker: "expenseTracker",
}

type FirebaseRefsKey = keyof typeof firebaseCollectionNames
export type FirebaseRefsValue =
  (typeof firebaseCollectionNames)[FirebaseRefsKey]

export default firebaseCollectionNames
