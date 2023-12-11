import React from "react"
import SideMenu from "../menu/SideMenu"
import styles from "./home.module.scss"

const Home: React.FC = () => {
  return <div className={styles.homeContainer}>{<SideMenu />}</div>
}

export default Home
