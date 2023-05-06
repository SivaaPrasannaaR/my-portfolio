import LocalStorage, {
  LocalStorageKey,
} from "../../utils/local-storage/local-storage"
import { routingUrl } from "./urlPath"

export const hideFunction = (accessLabel: string): boolean => {
  const userId = LocalStorage.get(LocalStorageKey.USERID)
  // access to all menu for me
  if (userId === "hfzivZZrzlV0EolNCpyfMvyYGJD3") {
    return true
  }

  // menus that are allowed for other users
  const accessAllowed = [
    routingUrl.portfolio.label,
    routingUrl.gameShooter.label,
    routingUrl.expenseTracker.label,
  ]

  const isShow = accessAllowed.includes(accessLabel)

  return isShow
}

export const showDisplayNameFunction = (accessLabel: string): boolean => {
  // TODO - need to implement
  return !hideFunction(accessLabel)
}
