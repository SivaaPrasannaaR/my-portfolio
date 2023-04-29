import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { routingUrl } from "../router/urlPath"
import LogoutIcon from "@mui/icons-material/Logout"
import GamesIcon from "@mui/icons-material/Games"
import PersonIcon from "@mui/icons-material/Person"
import PollIcon from "@mui/icons-material/Poll"
import styles from "./sideMenu.module.scss"

const SideMenu: React.FC = () => {
  const navigate = useNavigate()
  const { logoutUser }: any = useUserContext()

  return (
    <div className={styles.menuContainer}>
      <nav>
        <ul>
          <li onClick={() => navigate(routingUrl.portfolio.path)}>
            <div className={styles.menuIcon}>
              <PersonIcon />
            </div>
            <label>My Profile</label>
          </li>
          <li onClick={() => navigate(routingUrl.expenseTracker.path)}>
            <div className={styles.menuIcon}>
              <PollIcon />
            </div>
            <label> {routingUrl.expenseTracker.displayName}</label>
          </li>
          <li onClick={() => navigate(routingUrl.gameShooter.path)}>
            <div className={styles.menuIcon}>
              <GamesIcon />
            </div>
            <label>{routingUrl.gameShooter.displayName}</label>
          </li>
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
