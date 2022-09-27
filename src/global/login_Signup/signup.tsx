import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import URLPATH from "../router/urlPath"
import styles from "./login_signup.module.scss"

const Signup = () => {
  const emailRef: any = useRef()
  const nameRef: any = useRef()
  const psdRef: any = useRef()
  const navigate = useNavigate()

  const { registerUser, socialMediaAuth, googleProvider }: any =
    useUserContext()

  const handleSocialMediaOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider)
    console.log(res)
  }

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const email = emailRef.current.value
    const name = nameRef.current.value
    const password = psdRef.current.value
    if (email && password && name) registerUser(email, password, name)
  }

  return (
    <div className={styles.auth_parent_container}>
      <div className={styles.authContainer}>
        <div className={styles.form}>
          <h2> New User Sign Up Form</h2>
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" ref={emailRef} />
            <input placeholder="Name" type="name" ref={nameRef} />
            <input placeholder="Password" type="password" ref={psdRef} />
            <button type="submit" className={styles.formButton}>
              Register
            </button>
            <p onClick={() => navigate(URLPATH.SIGNIN)}>
              {"Already have an acount?"}
            </p>
            <button
              onClick={() => handleSocialMediaOnClick(googleProvider)}
              className={styles.loginWithGoogleBtn}
            >
              Sign up with Google
            </button>
            <button
              onClick={() => navigate(URLPATH.PORTFOLIO)}
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

export default Signup
