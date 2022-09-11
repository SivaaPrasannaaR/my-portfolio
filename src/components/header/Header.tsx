import React from "react"
import style from "./header.module.scss"
// import CV from "../../assets/CV.pdf"
import ME from "../../assets/my-photo-1.png"
import HeaderSocial from "./HeaderSocial"
import ContactMe from "../common/contactMe/ContactMe"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__info}>
          <h5>Hello I'm</h5>
          <h1>Sivaa Prasannaa R</h1>
          <h5 className={style.text_light}>Fullstack Developer</h5>

          <div className={style.header__buttons}>
            <a href={"#CV"} download className={style.cvBtn}>
              Download CV
            </a>
            <ContactMe />
          </div>
          <HeaderSocial />
        </div>

        <div className={style.me}>
          <img src={ME} alt="Sivaa Prasannaa R" />
        </div>
      </div>
    </header>
  )
}

export default Header
