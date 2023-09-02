import { createContext, FC, useContext, useEffect, useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  AuthProvider,
  UserCredential,
} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase/firebase_config"
import Firestore from "../utils/firebase/firebase"
import { routingUrl } from "../router/urlPath"
import LocalStorage, {
  LocalStorageKey,
} from "../utils/local-storage/local-storage"
import firebaseCollectionNames from "../utils/firebase/firebaseCollection"

// Create a context to manage user-related data and actions
export const UserContext = createContext({})

// Custom hook to access the UserContext
export const useUserContext = () => {
  return useContext(UserContext)
}

export type userContextProps = {
  // Define the shape of the user-related data and actions
  user: any // User data
  loading: boolean // Loading indicator
  error?: string // Error message, if any
  signInUser?: (email: string, password: string) => void // Function to sign in
  registerUser?: (email: string, password: string, name: any) => Promise<void> // Function to register
  logoutUser?: () => void // Function to log out
  forgotPassword?: (email: string) => Promise<any> // Function to reset password
  socialMediaAuth: (provider: AuthProvider) => void // Function for social media sign-in
  googleProvider?: GoogleAuthProvider
}

type UserDataType = {
  uid: string
  name: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
}

// UserContextProvider component
const UserContextProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    // Check the user's authentication status on component mount
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        // User is authenticated
        setUser(res)
        navigate(routingUrl.home.path) // Redirect to the home page
      } else {
        // User is not authenticated
        setUser(null)
        navigate(routingUrl.signIn.path) // Redirect to the sign-in page
      }
      setError("") // Clear any previous error messages
      setLoading(false) // Set loading to false when done
    })

    // Unsubscribe from the authentication state change when the component unmounts
    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Function to register a new user
  const registerUser = async (email: string, password: string, name: any) => {
    setLoading(true) // Set loading to true while registering
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const newUser = {
      email,
      displayName: name,
    }

    setUser(newUser) // Update the user data
    setError("") // Clear any previous error messages

    // Update user profile information
    updateProfile(userCredential.user, {
      displayName: name,
    })
      .then((res) => console.log(res)) // Log success
      .catch((err) => setError(err.message)) // Handle errors
      .finally(() => setLoading(false)) // Set loading to false when done
  }

  // Function to update user information in Firestore
  const updateUserInfoInFirestore = async (userData: UserDataType) => {
    LocalStorage.set(LocalStorageKey.USERID, userData.uid)
    await Firestore.setData(
      firebaseCollectionNames.users,
      userData.uid,
      userData
    )
  }

  // Function to sign in a user
  const signInUser = (email: string, password: string) => {
    setLoading(true) // Set loading to true while signing in
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res: UserCredential) => {
        const userData: UserDataType = {
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          phoneNumber: res.user.phoneNumber,
          photoURL: res.user.photoURL,
        }
        await updateUserInfoInFirestore(userData)
      })
      .catch((err) => setError(err.code)) // Handle errors
      .finally(() => setLoading(false)) // Set loading to false when done
  }

  // Function to log out a user
  const logoutUser = () => {
    signOut(auth) // Sign out the user
    navigate(routingUrl.signIn.path) // Redirect to the sign-in page
  }

  // Function to reset a user's password
  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email) // Send password reset email
  }

  // To sign in with Social Media (Google in this case)
  const googleProvider = new GoogleAuthProvider()

  const socialMediaAuth = (provider: AuthProvider) => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const socialMediaUser = result.user
        setUser(socialMediaUser) // Update user data
        const userData: UserDataType = {
          uid: socialMediaUser.uid,
          name: socialMediaUser.displayName,
          email: socialMediaUser.email,
          phoneNumber: socialMediaUser.phoneNumber,
          photoURL: socialMediaUser.photoURL,
        }
        await updateUserInfoInFirestore(userData)
        navigate(routingUrl.home.path) // Redirect to the home page
      })
      .catch((error) => {
        // Handle social media sign-in errors here
        // const errorCode = error.code
        // const errorMessage = error.message
        // const email = error.email
        console.log("socialMediaAuth", error)
      })
  }

  // Define the context value to provide to children components
  const contextValue: userContextProps = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    socialMediaAuth,
    googleProvider,
  }

  // Provide the context value to children components
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
export default UserContextProvider
