import React from "react"
import { Routes, Route } from "react-router"
import PortfolioLayout from "../../portfolio/portfolioLayout/PortfolioLayout"
import Root from "../home/Root"
import Signin from "../login_Signup/signin"
import Signup from "../login_Signup/signup"
import { urlPath } from "./urlPath"

export const NoAuth = () => {
  return (
    <Routes>
      <Route index element={<Root />} />
      <Route path={urlPath.signIn} element={<Signin />} />
      <Route path={urlPath.signUp} element={<Signup />} />
      <Route path={urlPath.portfolio} element={<PortfolioLayout />} />
    </Routes>
  )
}
