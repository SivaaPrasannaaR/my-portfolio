import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { urlPath } from "../../router/urlPath"
import styles from "../login_signup.module.scss"
import { SignUpType } from "../signup"

// This sign up component is based on
// Normal CSS UI
const RegisterB = (props: SignUpType) => {
  const { onSubmit, socialMediaOnClick } = props
  const emailRef: any = useRef()
  const nameRef: any = useRef()
  const psdRef: any = useRef()
  const navigate = useNavigate()

  const onClickSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const email = emailRef.current.value
    const name = nameRef.current.value
    const password = psdRef.current.value
    if (email && password && name) onSubmit(email, password, name)
  }
  return (
    <div className={styles.authContainer}>
      <div className={styles.form}>
        <h2> New User Sign Up Form</h2>
        <form onSubmit={onClickSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Name" type="name" ref={nameRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button type="submit" className={styles.formButton}>
            Register
          </button>
          <p onClick={() => navigate(urlPath.signIn)}>
            {"Already have an acount?"}
          </p>
          <button
            onClick={() => socialMediaOnClick()}
            className={styles.loginWithGoogleBtn}
          >
            Sign up with Google
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
  )
}

export default RegisterB
