import React from "react"
import { Routes, Route } from "react-router-dom"
import PortfolioLayout from "../../portfolio/components/portfolioLayout/PortfolioLayout"
import Home from "../home/Home"
import URLPATH from "./urlPath"

const WithAuth = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={URLPATH.URLNOTFOUND} element={<Home />} />
      <Route path={URLPATH.HOME} element={<Home />} />
      <Route path={URLPATH.PORTFOLIO} element={<PortfolioLayout />} />
    </Routes>
  )
}

export default WithAuth
