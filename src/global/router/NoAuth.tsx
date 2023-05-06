import { Routes, Route } from "react-router-dom"
import PortfolioLayout from "../../portfolio/portfolioLayout/PortfolioLayout"
import Root from "../home/Root"
import Signin from "../login_Signup/signin"
import Signup from "../login_Signup/signup"
import { routingUrl } from "./routerFunctions/urlPath"

export const NoAuth = () => {
  console.log("## inside noauth")
  return (
    <Routes>
      <Route index element={<Root />} />
      <Route path={routingUrl.signIn.path} element={<Signin />} />
      <Route path={routingUrl.signUp.path} element={<Signup />} />
      <Route path={routingUrl.portfolio.path} element={<PortfolioLayout />} />
    </Routes>
  )
}
