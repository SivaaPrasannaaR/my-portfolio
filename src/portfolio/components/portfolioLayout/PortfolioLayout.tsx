import React from "react"
import About from "../about/About"
import Contacts from "../contacts/Contacts"
import Experience from "../Experience/Experience"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Skills from "../Skills/Skills"
import styles from "./PortfolioLayout.module.scss"

const PortfolioLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Contacts />
      <Footer />
    </div>
  )
}

export default PortfolioLayout
