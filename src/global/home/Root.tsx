import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { routingUrl } from "../router/routerFunctions/urlPath"

const Root = () => {
  const { user }: any = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(routingUrl.signIn.path)
    } else {
      navigate(routingUrl.home.path)
    }
  }, [navigate, user])

  return <div>Root</div>
}

export default Root
