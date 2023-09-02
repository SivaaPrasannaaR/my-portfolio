export default function makeAnimation(
  circleArr: any[],
  canvas: HTMLCanvasElement,
  c: CanvasRenderingContext2D
) {
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
