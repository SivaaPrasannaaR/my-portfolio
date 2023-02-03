import React from "react"
import style from "../../shooter.module.scss"
import { useUserContext } from "../../../../global/context/UserContext"

const Dashboard = ({ setDisplayBoard }: any) => {
  const { user, logoutUser }: any = useUserContext()

  return (
    <div className={style.dashboardContainer}>
      <div>
        <h2>Name : {user.displayName}</h2>
      </div>
      <div>
        <h2>Email : {user.email}</h2>
      </div>
      <button onClick={logoutUser} className={style.logoutButton}>
        Log out
      </button>
    </div>
  )
}

export default Dashboard
