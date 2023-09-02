import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { routingUrl } from "../router/urlPath"
import LogoutIcon from "@mui/icons-material/Logout"
import GamesIcon from "@mui/icons-material/Games"
import PersonIcon from "@mui/icons-material/Person"
import PollIcon from "@mui/icons-material/Poll"
import MenuIcon from "@mui/icons-material/Menu"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"
import styles from "./sideMenu.module.scss"
import { useState } from "react"

const SideMenu: React.FC = () => {
  const navigate = useNavigate()
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const { user, logoutUser }: any = useUserContext()

  const isMyUserId = [
    "hfzivZZrzlV0EolNCpyfMvyYGJD3",
    "Dnm8DMzgRihMwFthkKOJcgodexE3",
  ].includes(user.uid)

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
            title="Menu"
          >
            <div className={styles.menuIcon}>
              <MenuIcon />
            </div>
            <label>Menu</label>
          </li>
          <li
            onClick={() => navigate(routingUrl.portfolio.path)}
            title="My Profile"
          >
            <div className={styles.menuIcon}>
              <PersonIcon />
            </div>
            <label>My Profile</label>
          </li>
          <li
            onClick={() => navigate(routingUrl.changeCanvas.path)}
            title={routingUrl.changeCanvas.displayName}
          >
            <div className={styles.menuIcon}>
              <ChangeCircleIcon />
            </div>
            <label>{routingUrl.changeCanvas.displayName}</label>
          </li>
          <li
            onClick={() => navigate(routingUrl.gameShooter.path)}
            title={routingUrl.gameShooter.displayName}
          >
            <div className={styles.menuIcon}>
              <GamesIcon />
            </div>
            <label>{routingUrl.gameShooter.displayName}</label>
          </li>
          {isMyUserId && (
            <li
              onClick={() => navigate(routingUrl.expenseTracker.path)}
              title={routingUrl.expenseTracker.displayName}
            >
              <div className={styles.menuIcon}>
                <PollIcon />
              </div>
              <label> {routingUrl.expenseTracker.displayName}</label>
            </li>
          )}
          {isMyUserId && (
            <li
              onClick={() => navigate(routingUrl.studyMaterial.path)}
              title={routingUrl.studyMaterial.displayName}
            >
              <div className={styles.menuIcon}>
                <LocalLibraryIcon />
              </div>
              <label> {routingUrl.studyMaterial.displayName}</label>
            </li>
          )}
          <li onClick={logoutUser} className={styles.logoutMenu} title="Logout">
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
