import { createCircleZoomOnHover } from "./canvas-designs/circleZoomOnHover"
import useCanvas from "./useCanvas"

const Canvas = () => {
  const [canvasRef, ctx] = useCanvas()
  const count = 1000
  if (canvasRef.current && ctx) {
    createCircleZoomOnHover(canvasRef.current, ctx, count)
    // createCircleBounce(canvasRef.current, ctx, count)
  }

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas
