import React from "react"
import { useLocation } from "react-router-dom"

const AllProductsDetails: React.FC = () => {
  const location = useLocation()
  return <div>{location.state.id}</div>
}

export default AllProductsDetails
