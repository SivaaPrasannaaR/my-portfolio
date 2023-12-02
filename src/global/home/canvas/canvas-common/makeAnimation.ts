let currentCanvas: HTMLCanvasElement | null = null

export default function makeAnimation(
  circleArr: any[],
  canvas: HTMLCanvasElement,
  c: CanvasRenderingContext2D
) {
  console.log(currentCanvas)
  // if (currentCanvas) {
  //   // If there's a current canvas being animated, stop its animation loop
  //   return
  // }

  // Set the current canvas to the new canvas
  currentCanvas = canvas

  function animate() {
    // To clear the canvas (c variable) in the entire screen
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < circleArr.length; i++) {
      circleArr[i].update(circleArr)
    }
    // rectCollision()
    requestAnimationFrame(animate)
  }
  animate() // Start the animation loop
}
