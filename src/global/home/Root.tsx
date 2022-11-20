import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { urlPath } from "../router/urlPath"

const Root = () => {
  const { user }: any = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(urlPath.signIn)
    } else {
      navigate(urlPath.home)
    }
  }, [navigate, user])

  return <div>Root</div>
}

export default Root
