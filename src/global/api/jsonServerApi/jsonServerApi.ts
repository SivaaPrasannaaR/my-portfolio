import { CustomAxios } from "../axios/axios"
import { commonErrorCode } from "../axios/commonError"

// this is not about json-server
// it is about getting data from axios

export const getData = () => {
  return CustomAxios.getMethod("/portfolio")
    .then((res) => console.log("res", res.data))
    .catch((e) => commonErrorCode(e))
}
