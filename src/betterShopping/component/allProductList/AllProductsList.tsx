import { Paper } from "@mui/material"
import React from "react"
import { dbBS } from "../../db/betterShopping"
import styles from "../../BetterShoppingIndex.module.scss"
import { useNavigate } from "react-router-dom"
import { routingUrl } from "../../../global/router/urlPath"

const AllProductsList: React.FC = () => {
  const navigate = useNavigate()
  const handleOnclick = (data: any) => {
    navigate(routingUrl.betterShoppingDetail.path, { state: { id: 1 } })
  }
  return (
    <>
      {dbBS.map((v) => (
        <Paper className={styles.allProdcuts} onClick={() => handleOnclick(v)}>
          {v.title}
        </Paper>
      ))}
    </>
  )
}

export default AllProductsList
