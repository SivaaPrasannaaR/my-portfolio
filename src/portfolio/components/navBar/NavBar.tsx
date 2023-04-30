import { useState } from "react"
// import { Link } from "react-router-dom"
// import { HashLink } from "react-router-hash-link"
import { menuItemsPath } from "../../router/menuItems"
import styles from "./NavBar.module.scss"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { BsPatchCheckFill } from "react-icons/bs"

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(menuItemsPath.home)
  return (
    <nav className={styles.navbar}>
      <a
        href={menuItemsPath.home}
        onClick={() => setActiveNav(menuItemsPath.home)}
        className={activeNav === menuItemsPath.home ? styles.active : ""}
        data-tooltip="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href={menuItemsPath.about}
        onClick={() => setActiveNav(menuItemsPath.about)}
        className={activeNav === menuItemsPath.about ? styles.active : ""}
        data-tooltip="About Me"
      >
        <AiOutlineUser />
      </a>
      <a
        href={menuItemsPath.skills}
        onClick={() => setActiveNav(menuItemsPath.skills)}
        className={activeNav === menuItemsPath.skills ? styles.active : ""}
        data-tooltip="Skills"
      >
        <BsPatchCheckFill />
      </a>
      <a
        href={menuItemsPath.experience}
        onClick={() => setActiveNav(menuItemsPath.experience)}
        className={activeNav === menuItemsPath.experience ? styles.active : ""}
        data-tooltip="Experience"
      >
        <BiBook />
      </a>
      <a
        href={menuItemsPath.contacts}
        onClick={() => setActiveNav(menuItemsPath.contacts)}
        className={activeNav === menuItemsPath.contacts ? styles.active : ""}
        data-tooltip="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default NavBar
