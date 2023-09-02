import makeAnimation from "../canvas-common/makeAnimation"
import { mouse } from "../useCanvas" // Import the 'mouse' object from a presumed module

// Array of colors for circles
const colorArray: string[] = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF3399",
  "#FFFF33",
]

// Circle class definition
class Circle {
  canvas: HTMLCanvasElement
  c: CanvasRenderingContext2D

  x: number // X-coordinate of the circle's center
  y: number // Y-coordinate of the circle's center
  dx: number // Velocity in the x-direction
  dy: number // Velocity in the y-direction
  radius: number // Radius of the circle
  minRadius: number // Minimum radius for interactivity
  color: string // Color of the circle

  constructor(
    c: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number
  ) {
    this.c = c
    this.canvas = canvas

    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
  }

  // Method to draw the circle on the canvas
  draw() {
    if (this.c) {
      this.c.beginPath()
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      this.c.fillStyle = this.color
      this.c.fill()
      this.c.closePath()
    }
  }

  // Method to update the circle's velocity and handle bouncing
  updateVelocity() {
    const maxVelocity = 10
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy
  }

  // Method to handle interactivity with mouse movement
  interactivity() {
    const mouseXRadius = mouse.x - this.x
    const mouseYRadius = mouse.y - this.y
    const maxRadius = 14
    if (
      mouseXRadius < 50 &&
      mouseXRadius > -50 &&
      mouseYRadius < 50 &&
      mouseYRadius > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1
    }
  }

  // Method to update the circle's position and appearance
  update() {
    this.updateVelocity()
    this.interactivity()
    this.draw()
  }
}

// Function to create and animate bouncing circles
export function createCircleZoomOnHover(
  canvas: HTMLCanvasElement,
  c: CanvasRenderingContext2D
) {
  const circleArray: Circle[] = []

  // Function to create an array of circles with random properties
  function createCircleArray(length: number) {
    for (let i = 0; i < length; i++) {
      const radius = Math.random() * 4 + 1
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      const velocityX = (Math.random() - 0.5) * 3
      const velocityY = (Math.random() - 0.5) * 3
      circleArray.push(
        new Circle(c, canvas, x, y, velocityX, velocityY, radius)
      )
    }
  }

  const circleCount = 1000
  createCircleArray(circleCount) // Create an array of 1000 circles

  // Function to animate the canvas
  makeAnimation(circleArray, canvas, c)
}
