import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import URLPATH from "../router/urlPath"

const Root = () => {
  const { user }: any = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(URLPATH.SIGNIN)
    } else {
      navigate(URLPATH.HOME)
    }
  }, [navigate, user])

  return <div>Root</div>
}

export default Root
