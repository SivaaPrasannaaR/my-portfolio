import React from "react"
import { useUserContext } from "../context/UserContext"
import styles from "./login_signup.module.scss"
import RegisterA from "./register/RegisterA"
import RegisterB from "./register/RegisterB"

/*
to do 
- create dynamic multiple register component
- error msg for already user
*/

export type SignUpType = {
  onSubmit: (email: string, userName: string, password: string) => void
  socialMediaOnClick: () => void
}

const Signup = () => {
  const { registerUser, socialMediaAuth, googleProvider }: any =
    useUserContext()

  const handleSocialMediaOnClick = async () => {
    const res = await socialMediaAuth(googleProvider)
    console.log(res)
  }

  const onSubmit = (email: string, userName: string, password: string) => {
    if (email && password && userName) {
      registerUser(email, password, userName)
    } else {
      console.error("error in social media sign up")
    }
  }

  const tabs = [
    {
      label: "A",
      component: (
        <RegisterA
          onSubmit={onSubmit}
          socialMediaOnClick={handleSocialMediaOnClick}
        />
      ),
    },
    {
      label: "B",
      component: (
        <RegisterB
          onSubmit={onSubmit}
          socialMediaOnClick={handleSocialMediaOnClick}
        />
      ),
    },
  ]

  return (
    <div className={styles.auth_parent_container}>
      {/* {tabs.map((val) => val.component)} */}
      <RegisterB
        onSubmit={onSubmit}
        socialMediaOnClick={handleSocialMediaOnClick}
      />
    </div>
  )
}

export default Signup
