import makeAnimation from "../canvas-common/makeAnimation"
import {
  getDistance,
  getRandColor,
  randomIntFromRange,
  rotate,
} from "../canvasBasic"
import { mouse } from "../useCanvas" // Import the 'mouse' object from a presumed module

class Circle {
  canvas: HTMLCanvasElement
  c: CanvasRenderingContext2D

  x: number
  y: number
  velocity: { x: number; y: number }
  color: string
  opacity: number
  radius: number
  mass: number

  constructor(
    canvas: HTMLCanvasElement,
    c: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
  ) {
    this.c = c
    this.canvas = canvas

    this.x = x
    this.y = y
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
    }
    this.color = getRandColor()
    this.opacity = 0.1
    this.radius = radius
    this.mass = 1
  }

  draw() {
    if (this.c) {
      this.c.beginPath()
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      this.c.save()
      this.c.globalAlpha = this.opacity
      this.c.fillStyle = this.color
      this.c.fill()
      this.c.restore()
      this.c.strokeStyle = this.color
      this.c.stroke()
      this.c.closePath()
    }
  }

  updateVelocity() {
    // const maxVelocity = 10
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y
    }
    this.x += this.velocity.x
    this.y += this.velocity.y
  }

  resolveCollision(particle: Circle, otherParticle: Circle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y
    const xDist = otherParticle.x - particle.x
    const yDist = otherParticle.y - particle.y

    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      const angle = -Math.atan2(
        otherParticle.y - particle.y,
        otherParticle.x - particle.x
      )
      const m1 = particle.mass
      const m2 = otherParticle.mass
      const u1 = rotate(particle.velocity, angle)
      const u2 = rotate(otherParticle.velocity, angle)
      const v1 = {
        x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
        y: u1.y,
      }
      const v2 = {
        x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
        y: u2.y,
      }
      const vFinal1 = rotate(v1, -angle)
      const vFinal2 = rotate(v2, -angle)
      particle.velocity.x = vFinal1.x
      particle.velocity.y = vFinal1.y
      otherParticle.velocity.x = vFinal2.x
      otherParticle.velocity.y = vFinal2.y
    }
  }

  checkCollision(circleArr: Circle[]) {
    for (let i = 0; i < circleArr.length; i++) {
      if (this === circleArr[i]) {
        continue
      }
      const distance = getDistance(
        this.x,
        this.y,
        circleArr[i].x,
        circleArr[i].y
      )
      if (distance - this.radius * 2 < 0) {
        this.resolveCollision(this, circleArr[i])
        console.log("collided")
      }
    }
  }

  interactivity() {
    const distance = getDistance(mouse.x, mouse.y, this.x, this.y)
    if (distance < 80) {
      this.opacity += 0.05
    } else {
      this.opacity = 0.2
    }
  }

  update(circleArr: Circle[]) {
    this.checkCollision(circleArr)
    this.interactivity()
    this.updateVelocity()
    this.draw()
  }
}

export default function createCircleBounce(
  canvas: HTMLCanvasElement,
  c: CanvasRenderingContext2D,
  circleCount: number
) {
  let circleArr: Circle[] = []

  function init(circleCount: number) {
    for (let i = 0; i < circleCount; i++) {
      const radius = 10
      let x = randomIntFromRange(radius, canvas.width - radius)
      let y = randomIntFromRange(radius, canvas.height - radius)
      if (i !== 0) {
        for (let j = 0; j < circleArr.length; j++) {
          const distance = getDistance(x, y, circleArr[j].x, circleArr[j].y)
          if (distance - radius * 2 < 0) {
            x = randomIntFromRange(radius, canvas.width - radius)
            y = randomIntFromRange(radius, canvas.height - radius)
            j = -1
          }
        }
      }
      circleArr.push(new Circle(canvas, c, x, y, radius))
    }
  }

  init(circleCount) // Create an array of {circleCount} circles

  makeAnimation(circleArr, canvas, c)
}
