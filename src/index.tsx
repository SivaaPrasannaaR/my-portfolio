import React from "react"
import ReactDOM from "react-dom/client"
import "./index.module.scss"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import UserContextProvider from "./global/context/UserContext"
import { Provider } from "react-redux"
import { store } from "./global/redux/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
