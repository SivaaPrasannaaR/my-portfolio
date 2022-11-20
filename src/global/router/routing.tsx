import PortfolioLayout from "../../portfolio/portfolioLayout/PortfolioLayout"
import SMLayout from "../../studyMaterial/SMLayout/SMLayout"
import Home from "../home/Home"
import { urlAccessLabel, urlPath } from "./urlPath"

type Routing = {
  label: string
  path: string
  component: any
  hide: (accessLabel: string) => boolean
}[]

const hideFunction = (accessLabel: string): boolean => {
  return false
}

const routing: Routing = [
  {
    label: urlAccessLabel.urlNotFound,
    path: urlPath.urlNotFound,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
  },
  {
    label: urlAccessLabel.home,
    path: urlPath.home,
    component: <Home />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
  },
  {
    label: urlAccessLabel.portfolio,
    path: urlPath.portfolio,
    component: <PortfolioLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
  },
  {
    label: urlAccessLabel.studyMaterial,
    path: urlPath.studyMaterial,
    component: <SMLayout />,
    hide: (accessLabel: string) => hideFunction(accessLabel),
  },
]

export default routing
