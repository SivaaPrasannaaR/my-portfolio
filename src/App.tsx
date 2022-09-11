import React from "react"
import Layout from "./components/layout/Layout"
import NavBar from "./components/navBar/NavBar"
import Router from "./router/Router"

function App() {
  return (
    <div className="App">
      <Layout />
      <NavBar />
      <Router />
    </div>
  )
}

export default App
