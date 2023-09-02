import React from "react"
import SideMenu from "../menu/SideMenu"
import styles from "./home.module.scss"
import Canvas from "./canvas/Canvas"

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {<SideMenu />}
      <Canvas />
    </div>
  )
}

export default Home
