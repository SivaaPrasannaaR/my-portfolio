import React from "react"
import About from "../components/about/About"
import Contacts from "../components/contacts/Contacts"
// import Experience from "../Experience/Experience"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import Skills from "../components/Skills/Skills"
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
