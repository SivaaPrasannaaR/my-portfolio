import { useNavigate } from "react-router-dom"
import LogoutIcon from "@mui/icons-material/Logout"
import MenuIcon from "@mui/icons-material/Menu"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"
import styles from "./sideMenu.module.scss"
import { useState } from "react"
import { RoutingType } from "../router/routerFunctions/routeTypes"
import { menuNames } from "../router/routerFunctions/routing"
import { useUserContext } from "../context/UserContext"

const SideMenu: React.FC = () => {
  const navigate = useNavigate()
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const { logoutUser }: any = useUserContext()

  return (
    <div
      className={`${styles.menuContainer} ${
        isMenuActive ? styles.menuContainerActive : ""
      }`}
    >
      <nav>
        <ul>
          <li
            style={{ borderBottom: "1px solid black", marginBottom: "8px" }}
            onClick={() => setIsMenuActive((s) => !s)}
          >
            <div className={styles.menuIcon}>
              <MenuIcon />
            </div>
            <label>Menu</label>
          </li>

          {menuNames.map((menu: RoutingType) => {
            return (
              <li key={menu.label} onClick={() => navigate(menu.path)}>
                <div className={styles.menuIcon}>
                  {menu.icon ?? <HourglassEmptyIcon />}
                </div>
                <label>{menu.displayName}</label>
              </li>
            )
          })}

          <li onClick={logoutUser} className={styles.logoutMenu}>
            <div className={styles.menuIcon}>
              <LogoutIcon />
            </div>
            <label>Logout</label>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu
