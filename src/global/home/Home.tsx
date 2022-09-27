import React from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import URLPATH from "../router/urlPath"
import styles from "./home.module.scss"

const Home = () => {
  const navigate = useNavigate()
  const { logoutUser }: any = useUserContext()

  return (
    <div className={styles.homeContainer}>
      <button
        onClick={() => navigate(URLPATH.BINGO)}
        className={styles.logoutButton}
      >
        Bingo Board
      </button>
      <button onClick={logoutUser} className={styles.logoutButton}>
        Log out
      </button>
    </div>
  )
}

export default Home
