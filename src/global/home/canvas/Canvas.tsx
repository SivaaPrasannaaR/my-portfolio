import { createCircleZoomOnHover } from "./canvas-designs/circleZoomOnHover"
import useCanvas from "./useCanvas"

const Canvas = () => {
  const [canvasRef, ctx] = useCanvas()
  if (canvasRef.current && ctx) {
    createCircleZoomOnHover(canvasRef.current, ctx)
    // createCircleBounce(canvasRef.current, ctx)
  }

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas
