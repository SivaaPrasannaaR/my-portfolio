type BaseRouteInfo = {
  label: string
  path: string
  displayName: string
}
export type RoutingUrlType = {
  [key: string]: BaseRouteInfo
}

export type CommonRoutingFieldsType = {
  hide: (accessLabel: string) => boolean
}

export type RouteDataType = {
  component: React.ReactElement
  icon?: any
  isMenu: boolean
}

export type RouteInfoType = BaseRouteInfo & RouteDataType
export type RoutingType = RouteInfoType & CommonRoutingFieldsType
export type Routing = RoutingType[]
