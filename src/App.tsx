import React from "react"
import PortfolioLayout from "./portfolio/components/portfolioLayout/PortfolioLayout"
import NavBar from "./portfolio/components/navBar/NavBar"
import Router from "./global/router/Router"
import { getData } from "./global/api/jsonServerApi/jsonServerApi"

function App() {
  console.log("get Data from axios", getData())
  return (
    <div className="App">
      <PortfolioLayout />
      <NavBar />
      <Router />
    </div>
  )
}

export default App
