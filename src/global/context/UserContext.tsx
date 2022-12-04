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
} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase/firebase_config"
import Firestore from "../utils/firebase/firebase"
import { routingUrl } from "../router/urlPath"

export const UserContext = createContext({})

export const useUserContext = () => {
  return useContext(UserContext)
}

export type userContextProps = {
  user: any
  loading: boolean
  error?: string
  signInUser?: (email: string, password: string) => void
  registerUser?: (email: string, password: string, name: any) => Promise<void>
  logoutUser?: () => void
  forgotPassword?: (email: string) => Promise<any>
  socialMediaAuth: (provider: AuthProvider) => void
  googleProvider?: GoogleAuthProvider
}

const UserContextProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res)
        navigate(routingUrl.home.path)
      } else {
        setUser(null)
        navigate(routingUrl.signIn.path)
      }
      setError("")
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const registerUser = async (email: string, password: string, name: any) => {
    setLoading(true)
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const newUser = {
      email,
      displayName: name,
    }

    setUser(newUser)
    setError("")

    updateProfile(userCredential.user, {
      displayName: name,
    })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const signInUser = (email: string, password: string) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false))
  }

  const logoutUser = () => {
    signOut(auth)
    navigate(routingUrl.signIn.path)
  }

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email)
  }

  //To sign in with Social Media
  //to Signin with google
  const googleProvider = new GoogleAuthProvider()

  const socialMediaAuth = (provider: AuthProvider) => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const socialMediaUser = result.user
        setUser(socialMediaUser)
        const userData = {
          uid: socialMediaUser.uid,
          name: socialMediaUser.displayName,
          email: socialMediaUser.email,
          phoneNumber: socialMediaUser.phoneNumber,
          photoURL: socialMediaUser.photoURL,
        }
        await Firestore.setData("users", userData.uid, userData)
        navigate(routingUrl.home.path)
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        // const email = error.email
        console.log("socialMediaAuth", error)
      })
  }

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
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
export default UserContextProvider
