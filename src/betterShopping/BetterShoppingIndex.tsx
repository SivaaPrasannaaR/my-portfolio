import { Paper } from "@mui/material"
import React from "react"
import styles from "./BetterShoppingIndex.module.scss"
import AllProductsList from "./component/allProductList/AllProductsList"

const BetterShoppingIndex: React.FC = () => {
  return (
    <div className={styles.root}>
      <Paper className={styles.rootPaper}>
        <AllProductsList />
      </Paper>
    </div>
  )
}

export default BetterShoppingIndex
