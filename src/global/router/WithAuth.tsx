import { Routes, Route } from "react-router-dom"
import ShooterPlayGround from "../../game/shooter/screen/ShooterPlayGround"
import Home from "../home/Home"
import routing from "./routing"

const WithAuth = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {routing.map((url) => {
        if (url.hide(url.label)) return <></>
        return <Route path={url.path} element={url.component} />
      })}
      <Route path={"/gameShooter/:id"} element={<ShooterPlayGround />} />
    </Routes>
  )
}

export default WithAuth
