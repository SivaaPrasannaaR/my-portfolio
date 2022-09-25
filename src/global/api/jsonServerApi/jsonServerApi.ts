import { CustomAxios } from "../../axios/axios"
import { commonErrorCode } from "../../axios/commonError"

export const getData = () => {
  return CustomAxios.getMethod("/portfolio")
    .then((res) => console.log("res", res.data))
    .catch((e) => commonErrorCode(e))
}
