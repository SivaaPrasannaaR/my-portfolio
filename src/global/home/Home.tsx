import React from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import Counter from "../redux/Counter"
import { routingUrl } from "../router/urlPath"

import styles from "./home.module.scss"

const Home = () => {
  const navigate = useNavigate()
  const { logoutUser }: any = useUserContext()

  return (
    <div className={styles.homeContainer}>
      <Counter />
      <button
        onClick={() => navigate(routingUrl.portfolio.path)}
        className={styles.checkProfile}
      >
        Check My Profile Without Login
      </button>
      {/* {routing.map((url) => {
        if (!url.showDisplayName(url.label)) {
          return <></>
        }
        return (
          <button
            onClick={() => navigate(url.path)}
            className={styles.logoutButton}
          >
            {url.displayname}
          </button>
        )
      })} */}
      <button
        onClick={() => navigate(routingUrl.studyMaterial.path)}
        className={styles.logoutButton}
      >
        Study Material
      </button>
      <button
        onClick={() => navigate(routingUrl.bingo.path)}
        className={styles.logoutButton}
      >
        Bingo Board - yet to implement
      </button>
      <button
        onClick={() => navigate(routingUrl.expenseTracker.path)}
        className={styles.logoutButton}
      >
        {routingUrl.expenseTracker.displayName}
      </button>
      <button onClick={logoutUser} className={styles.logoutButton}>
        Log out
      </button>
    </div>
  )
}

export default Home
