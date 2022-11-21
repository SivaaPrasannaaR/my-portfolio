import React from "react"
import style from "./header.module.scss"
import ME from "../../assets/my-photo-1.png"
import HeaderSocial from "./HeaderSocial"
import ContactMe from "../common/contactMe/ContactMe"

const Header = () => {
  const cvDriveLink =
    "https://drive.google.com/file/d/11U7XfBcEQfP5-VU9lUTJ8Fn4IwqHia3O/view?usp=sharing"

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__info}>
          <h5 className={style.textColor_white}>Hello I'm</h5>
          <h1 className={style.textColor_white}>Sivaa Prasannaa R</h1>
          <h5 className={style.text_light}>React Fullstack Developer</h5>

          <div className={style.header__buttons}>
            <a
              href={cvDriveLink}
              download
              className={style.cvBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
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
