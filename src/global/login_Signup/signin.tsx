import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { urlPath } from "../router/urlPath"
import styles from "./login_signup.module.scss"

const Signin = () => {
  const emailRef: any = useRef()
  const psdRef: any = useRef()

  const {
    user,
    socialMediaAuth,
    googleProvider,
    signInUser,
    forgotPassword,
  }: any = useUserContext()
  const navigate = useNavigate()

  if (user) {
    navigate(urlPath.home)
  }

  const handleSocialMediaOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider)
    console.log(res)
  }

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = psdRef.current.value
    if (email && password) signInUser(email, password)
  }

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = ""
      })
  }

  return (
    <div className={styles.auth_parent_container}>
      <div className={styles.authContainer}>
        <div className={styles.form}>
          <h2> Login </h2>
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" ref={emailRef} />
            <input placeholder="Password" type="password" ref={psdRef} />
            <button type="submit" className={styles.formButton}>
              Sign In
            </button>
            <p onClick={forgotPasswordHandler}>Forgot Password?</p>
            <p onClick={() => navigate(urlPath.signUp)}>
              {"New user? Click here"}
            </p>
            <button
              onClick={() => handleSocialMediaOnClick(googleProvider)}
              className={styles.loginWithGoogleBtn}
            >
              Sign in with Google
            </button>
            <button
              onClick={() => navigate(urlPath.portfolio)}
              className={styles.checkProfile}
            >
              Check My Profile Without Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
