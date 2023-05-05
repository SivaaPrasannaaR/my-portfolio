import ExpenseTrackerLayout from "../../expenseTracker/layout/ExpenseTrackerLayout"
import PortfolioLayout from "../../portfolio/portfolioLayout/PortfolioLayout"
import SMLayout from "../../studyMaterial/SMLayout/SMLayout"
import BetterShoppingIndex from "../../betterShopping/BetterShoppingIndex"
import AllProductsDetails from "../../betterShopping/component/allProductList/AllProductsDetails"
import Home from "../home/Home"
import { routingUrl } from "./urlPath"
import ShooterIndex from "../../game/shooter/screen/ShooterIndex"
import ShooterPlayGround from "../../game/shooter/screen/ShooterPlayGround"

type Routing = {
  label: string
  displayName: string
  path: string
  component: any
  hide: (accessLabel: string) => boolean
  showDisplayName: (accessLabel: string) => boolean
}[]

const hideFunction = (accessLabel: string): boolean => {
  /**
   * TODO - need to implement
   * temp - the array contains the list of non access sites that needed to be hidden
   */
  const isHide = [routingUrl.urlNotFound.label].includes(accessLabel)
  if (isHide) return true

  return false
}

const showDisplayNameFunction = (accessLabel: string): boolean => {
  // TODO - need to implement
  return !hideFunction(accessLabel)
}

const routing: Routing = [
  {
    ...routingUrl.urlNotFound,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.home,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.portfolio,
    component: <PortfolioLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  // {
  //   label: routingUrl.bingo.label,
  //   displayname: routingUrl.bingo.displayName,
  //   path: routingUrl.bingo.path,
  //   component: <>Yet to implement</>,
  //   hide: (accessLabel: string) => hideFunction(accessLabel),
  //   showDisplayName: (accessLabel: string) =>
  //     showDisplayNameFunction(accessLabel),
  // },
  {
    ...routingUrl.studyMaterial,
    component: <SMLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.expenseTracker,
    component: <ExpenseTrackerLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.betterShopping,
    component: <BetterShoppingIndex />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.betterShoppingDetail,
    component: <AllProductsDetails />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.gameShooter,
    component: <ShooterIndex />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    ...routingUrl.gameShooterDetail,
    component: <ShooterPlayGround />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
]

export const menuNames = routing
  .map((url) => {
    if (url.showDisplayName(url.label)) {
      return url.displayName
    }
    return false
  })
  .filter((res) => res)

export default routing
