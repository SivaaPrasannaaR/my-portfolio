import About from "../components/about/About"
import Contacts from "../components/contacts/Contacts"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import Skills from "../components/Skills/Skills"
import styles from "./PortfolioLayout.module.scss"
import Experience from "../components/Experience/Experience"

// layout for portfolio
const PortfolioLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contacts />
      <Footer />
      <NavBar />
    </div>
  )
}

export default PortfolioLayout
