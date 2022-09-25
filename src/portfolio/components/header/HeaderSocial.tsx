import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import style from "./header.module.scss"

const HeaderSocial = () => {
  return (
    <div className={style.header__socials}>
      <a
        href="https://www.linkedin.com/in/sivaa-prasannaa-r/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/SivaaPrasannaaR?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocial
