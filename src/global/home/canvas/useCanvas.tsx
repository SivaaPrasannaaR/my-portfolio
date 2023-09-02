import React, { useEffect, useRef } from "react"

type Mouse = {
  x: number
  y: number
}

// To track the mouse movement
export const mouse: Mouse = {
  x: 0,
  y: 0,
}

// Custom hook to manage a resizable canvas
const useCanvas = (): [
  React.RefObject<HTMLCanvasElement>,
  CanvasRenderingContext2D | null
] => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D | null>(null)

  // Function to handle canvas resizing
  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }
  }

  useEffect(() => {
    // Set up the canvas context and initial size
    const canvasEl = canvasRef.current
    if (canvasEl) {
      const c = canvasEl.getContext("2d")
      if (c) {
        setCtx(c)
        handleResize() // Initial size and drawing
      }
    }

    // Add a window resize event listener
    window.addEventListener("resize", handleResize)

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x
      mouse.y = event.y
    })

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", (event) => {
        mouse.x = event.x
        mouse.y = event.y
      })
    }
  }, [])

  return [canvasRef, ctx]
}

export default useCanvas
