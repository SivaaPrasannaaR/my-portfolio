import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import { HashLink } from "react-router-hash-link"
import { menuItemsPath, menuLabel } from "../../router/menuItems"
import styles from "./NavBar.module.scss"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { BsPatchCheckFill } from "react-icons/bs"

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(menuItemsPath.home)

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <nav className={styles.navbar}>
      <a
        href={menuItemsPath.home}
        onClick={() => setActiveNav(menuItemsPath.home)}
        className={activeNav === menuItemsPath.home ? styles.active : ""}
        title={menuLabel.home}
      >
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <AiOutlineHome title={menuLabel.home} />
        </div>
        {/* {isHovering && <h2>{menuLabel.home}</h2>} */}
      </a>
      <a
        href={menuItemsPath.about}
        onClick={() => setActiveNav(menuItemsPath.about)}
        className={activeNav === menuItemsPath.about ? styles.active : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href={menuItemsPath.experience}
        onClick={() => setActiveNav(menuItemsPath.experience)}
        className={activeNav === menuItemsPath.experience ? styles.active : ""}
      >
        <BiBook />
      </a>
      <a
        href={menuItemsPath.skills}
        onClick={() => setActiveNav(menuItemsPath.skills)}
        className={activeNav === menuItemsPath.skills ? styles.active : ""}
      >
        <BsPatchCheckFill />
      </a>
      <a
        href={menuItemsPath.contacts}
        onClick={() => setActiveNav(menuItemsPath.contacts)}
        className={activeNav === menuItemsPath.contacts ? styles.active : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default NavBar
