import { Routes, Route } from "react-router-dom"
import ShooterPlayGround from "../../game/shooter/screen/ShooterPlayGround"
import Home from "../home/Home"
import routing from "./routing"
import styles from "./mainBody.module.scss"

const WithAuth = () => {
  return (
    <div className={styles.mainBodyContainer}>
      <Routes>
        <Route index element={<Home />} />
        {routing.map((url) => {
          if (url.hide(url.label)) return <></>
          return (
            <Route path={url.path} element={url.component} key={url.label} />
          )
        })}
        <Route path={"/gameShooter/:id"} element={<ShooterPlayGround />} />
      </Routes>
    </div>
  )
}

export default WithAuth
