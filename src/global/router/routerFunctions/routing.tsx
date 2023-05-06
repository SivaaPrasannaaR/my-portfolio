import { hideFunction } from "../routerFunctions/routerHideFunctions"
import { pre_route } from "../routerFunctions/routeData"
import { CommonRoutingFieldsType, Routing } from "./routeTypes"

// This is the common field for all routing objects
const commonRoutingFields: CommonRoutingFieldsType = {
  hide: (accessLabel: string) => hideFunction(accessLabel),
}

export const routing: Routing = pre_route.map((routingData) => {
  return {
    ...routingData,
    ...commonRoutingFields,
  }
})

export const menuNames = routing.filter((routeData) => {
  if (!routeData.isMenu) {
    return false
  }

  // bsed on hide function the menu will be displayed
  return routeData.hide(routeData.label)
})
