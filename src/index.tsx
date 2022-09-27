import React from "react"
import ReactDOM from "react-dom/client"
import "./index.module.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import UserContextProvider from "./global/context/UserContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
