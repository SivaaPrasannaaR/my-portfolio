import React, { useEffect } from "react"
import { getData } from "./global/api/jsonServerApi/jsonServerApi"
import { useUserContext } from "./global/context/UserContext"
import WithAuth from "./global/router/WithAuth"
import { NoAuth } from "./global/router/NoAuth"

function App() {
  const { user, loading, error }: any = useUserContext()

  useEffect(() => {
    console.log("get Data from axios", getData())
  }, [])

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          Loading...
        </h2>
      ) : (
        <>{user ? <WithAuth /> : <NoAuth />}</>
      )}
    </div>
  )
}

export default App
