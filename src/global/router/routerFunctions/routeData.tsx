import ExpenseTrackerLayout from "../../../expenseTracker/layout/ExpenseTrackerLayout"
import PortfolioLayout from "../../../portfolio/portfolioLayout/PortfolioLayout"
import SMLayout from "../../../studyMaterial/SMLayout/SMLayout"
import BetterShoppingIndex from "../../../betterShopping/BetterShoppingIndex"
import AllProductsDetails from "../../../betterShopping/component/allProductList/AllProductsDetails"
import Home from "../../home/Home"
import { routingUrl } from "./urlPath"
import ShooterIndex from "../../../game/shooter/screen/ShooterIndex"
import ShooterPlayGround from "../../../game/shooter/screen/ShooterPlayGround"
import { RouteInfoType } from "./routeTypes"
import GamesIcon from "@mui/icons-material/Games"
import PersonIcon from "@mui/icons-material/Person"
import PollIcon from "@mui/icons-material/Poll"
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary"

export const pre_route: RouteInfoType[] = [
  {
    ...routingUrl.urlNotFound,
    component: <Home />,
    isMenu: false,
  },
  {
    ...routingUrl.home,
    component: <Home />,
    isMenu: false,
  },
  {
    ...routingUrl.portfolio,
    component: <PortfolioLayout />,
    icon: <PersonIcon />,
    isMenu: true,
  },
  {
    ...routingUrl.gameShooter,
    component: <ShooterIndex />,
    icon: <GamesIcon />,
    isMenu: true,
  },
  {
    ...routingUrl.gameShooterDetail,
    component: <ShooterPlayGround />,
    isMenu: false,
  },
  {
    ...routingUrl.expenseTracker,
    component: <ExpenseTrackerLayout />,
    icon: <PollIcon />,
    isMenu: true,
  },
  {
    ...routingUrl.studyMaterial,
    component: <SMLayout />,
    icon: <LocalLibraryIcon />,
    isMenu: true,
  },
  {
    ...routingUrl.betterShopping,
    component: <BetterShoppingIndex />,
    isMenu: true,
  },
  {
    ...routingUrl.betterShoppingDetail,
    component: <AllProductsDetails />,
    isMenu: false,
  },
]
