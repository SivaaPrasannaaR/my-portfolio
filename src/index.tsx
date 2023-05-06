import React from "react"
import ReactDOM from "react-dom/client"
import "./index.module.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import UserContextProvider from "./global/context/UserContext"
import { Provider } from "react-redux"
import { store } from "./global/redux/store"

/**
 * This is the root component
 */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)
