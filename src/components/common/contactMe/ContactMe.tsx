import React from "react"
import styles from "./contactMe.module.scss"
import { menuItemsPath } from "../../../router/menuItems"

const ContactMe = () => {
  return (
    <a href={menuItemsPath.contacts} className={styles.contactMeBtn}>
      Contact Me
    </a>
  )
}

export default ContactMe
