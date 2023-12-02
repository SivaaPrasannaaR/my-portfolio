export const firebaseCollectionNames = {
  users: "users",
  expenseTracker: "expenseTracker",
  interviewNotes: "interviewNotes",
}

type FirebaseRefsKey = keyof typeof firebaseCollectionNames
export type FirebaseRefsValue =
  (typeof firebaseCollectionNames)[FirebaseRefsKey]

export default firebaseCollectionNames
