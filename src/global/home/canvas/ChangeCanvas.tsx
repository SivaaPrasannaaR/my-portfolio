import { useState } from "react"

export const ChangeCanvas = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDialogOpen, setIsDialogOpen] = useState(true)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return <></>
}

export default ChangeCanvas
