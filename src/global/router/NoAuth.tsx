import React from "react"
import { Routes, Route } from "react-router"
import PortfolioLayout from "../../portfolio/components/portfolioLayout/PortfolioLayout"
import Root from "../home/Root"
import Signin from "../login_Signup/signin"
import Signup from "../login_Signup/signup"
import URLPATH from "./urlPath"

export const NoAuth = () => {
  return (
    <Routes>
      <Route index element={<Root />} />
      <Route path={URLPATH.SIGNIN} element={<Signin />} />
      <Route path={URLPATH.SIGNUP} element={<Signup />} />
      <Route path={URLPATH.PORTFOLIO} element={<PortfolioLayout />} />
    </Routes>
  )
}
