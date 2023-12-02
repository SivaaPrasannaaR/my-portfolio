import React from "react"
import { createCircleZoomOnHover } from "./canvas-designs/circleZoomOnHover"
import useCanvas from "./useCanvas"
import Dialog from "../../../common-components/dialog/Dialog"
import createCircleBounce from "./canvas-designs/circleBounce"

enum CanvasOption {
  CircleZoomOnHover = "CircleZoomOnHover",
  CircleBounce = "CircleBounce",
}

export const Canvas = () => {
  const [canvasRef, ctx] = useCanvas()
  const [selectedOption, setSelectedOption] = React.useState<CanvasOption>(
    CanvasOption.CircleZoomOnHover
  )
  const [count, setCount] = React.useState<number>(1000)

  const [isDialogOpen, setIsDialogOpen] = React.useState(true)

  const openDialog = () => {
    setIsDialogOpen(true)
  }
  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setSelectedOption(e.target.value as CanvasOption)
  }

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value)
    if (1 <= newCount && newCount <= 5000) {
      setCount(isNaN(newCount) ? 1 : newCount)
    }
  }

  if (canvasRef.current && ctx) {
    switch (selectedOption) {
      case CanvasOption.CircleZoomOnHover:
        createCircleZoomOnHover(canvasRef.current, ctx, count)
        break
      case CanvasOption.CircleBounce:
        createCircleBounce(canvasRef.current, ctx, count)
        break
      default:
        createCircleZoomOnHover(canvasRef.current, ctx, count)
        break
    }
    //
  }

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      {isDialogOpen && (
        <Dialog onClose={closeDialog}>
          <h2 style={{ margin: "8px" }}>Change Canvas</h2>
          <span style={{ margin: "8px" }}>
            <select
              style={{ padding: "8px", border: "1px solid black" }}
              onChange={handleOptionChange}
            >
              {Object.values(CanvasOption).map((element) => (
                <option value={element}>{element}</option>
              ))}
            </select>
          </span>
          <span style={{ margin: "8px" }}>
            <input
              placeholder="Enter Circle Count"
              type="number"
              value={count}
              onChange={handleCountChange}
              style={{
                padding: "8px",
                border: "1px solid black",
                width: "100px",
              }}
            />
          </span>
        </Dialog>
      )}
    </>
  )
}

export default Canvas
