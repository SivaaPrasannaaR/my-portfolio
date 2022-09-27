import React from "react"
import About from "../about/About"
import Contacts from "../contacts/Contacts"
// import Experience from "../Experience/Experience"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import NavBar from "../navBar/NavBar"
import Skills from "../Skills/Skills"
import styles from "./PortfolioLayout.module.scss"

// layout for portfolio
const PortfolioLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Contacts />
      <Footer />
      <NavBar />
    </div>
  )
}

export default PortfolioLayout
