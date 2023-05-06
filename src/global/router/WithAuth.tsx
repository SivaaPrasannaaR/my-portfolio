import { Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import { routing } from "./routerFunctions/routing"
import styles from "./mainBody.module.scss"

const WithAuth = () => {
  return (
    <div className={styles.mainBodyContainer}>
      <Routes>
        <Route index element={<Home />} />
        {routing.map((url) => {
          return (
            <Route path={url.path} element={url.component} key={url.label} />
          )
        })}
      </Routes>
    </div>
  )
}

export default WithAuth
