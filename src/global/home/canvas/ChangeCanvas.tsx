import { useState } from "react"

export const ChangeCanvas = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true)

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return <></>
}

export default ChangeCanvas
