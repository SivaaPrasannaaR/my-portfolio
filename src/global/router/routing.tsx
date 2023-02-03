import ExpenseTrackerLayout from "../../expenseTracker/layout/ExpenseTrackerLayout"
import PortfolioLayout from "../../portfolio/portfolioLayout/PortfolioLayout"
import SMLayout from "../../studyMaterial/SMLayout/SMLayout"
import BetterShoppingIndex from "../../betterShopping/BetterShoppingIndex"
import AllProductsDetails from "../../betterShopping/component/allProductList/AllProductsDetails"
import Home from "../home/Home"
import { routingUrl } from "./urlPath"
import ShooterIndex from "../../game/shooter/screen/ShooterIndex"

type Routing = {
  label: string
  displayname: string
  path: string
  component: any
  hide: (accessLabel: string) => boolean
  showDisplayName: (accessLabel: string) => boolean
}[]

const hideFunction = (accessLabel: string): boolean => {
  return false
}

const showDisplayNameFunction = (accessLabel: string): boolean => {
  const isHide = [routingUrl.urlNotFound.label].includes(accessLabel)
  if (isHide) return false

  return true
}

const routing: Routing = [
  {
    label: routingUrl.urlNotFound.label,
    displayname: routingUrl.urlNotFound.displayName,
    path: routingUrl.urlNotFound.path,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.home.label,
    displayname: routingUrl.home.displayName,
    path: routingUrl.home.path,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.portfolio.label,
    displayname: routingUrl.portfolio.displayName,
    path: routingUrl.portfolio.path,
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
    label: routingUrl.studyMaterial.label,
    displayname: routingUrl.studyMaterial.displayName,
    path: routingUrl.studyMaterial.path,
    component: <SMLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.expenseTracker.label,
    displayname: routingUrl.expenseTracker.displayName,
    path: routingUrl.expenseTracker.path,
    component: <ExpenseTrackerLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.betterShopping.label,
    displayname: routingUrl.betterShopping.displayName,
    path: routingUrl.betterShopping.path,
    component: <BetterShoppingIndex />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.betterShoppingDetail.label,
    displayname: routingUrl.betterShoppingDetail.displayName,
    path: routingUrl.betterShoppingDetail.path,
    component: <AllProductsDetails />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
  {
    label: routingUrl.gameShooter.label,
    displayname: routingUrl.gameShooter.displayName,
    path: routingUrl.gameShooter.path,
    component: <ShooterIndex />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
    showDisplayName: (accessLabel: string) =>
      showDisplayNameFunction(accessLabel),
  },
]

export const menuNames = routing
  .map((url) => {
    if (url.showDisplayName(url.label)) {
      return url.displayname
    }
    return false
  })
  .filter((res) => res)

export default routing
