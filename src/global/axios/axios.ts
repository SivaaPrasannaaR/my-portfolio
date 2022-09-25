import axios, { AxiosPromise, AxiosRequestConfig } from "axios"

export const BASE_URL = "http://localhost:5001"

export class CustomAxios {
  public static postMethod = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> => {
    return createAxios().post<T>(url, data, config)
  }

  public static patchMethod = <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> => {
    return createAxios().patch<T>(url, data, config)
  }

  public static getMethod = <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> => {
    return createAxios().get(url, config)
  }

  public static deleteMethod = <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> => {
    return createAxios().delete(url, config)
  }
}

const createAxios = () => {
  const accessToken = ""

  console.log("accessToken", accessToken)

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": accessToken ?? "",
      timeout: 10000,
      Accept: "application/json",
    },
  })
}
