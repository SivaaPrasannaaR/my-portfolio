let colorArray = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F65", "#ff1100"]

export function randomIntFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Helper function to get a random color
export function getRandColor(knownColors = true) {
  return knownColors
    ? colorArray[Math.floor(Math.random() * colorArray.length)]
    : `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      } ,1)`
}

// Helper function to calculate distance between two points
export function getDistance(x1: number, y1: number, x2: number, y2: number) {
  const xDistance = x2 - x1
  const yDistance = y2 - y1

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

// Helper function to rotate a vector by an angle
export function rotate(vector: { x: number; y: number }, angle: number) {
  const { x, y } = vector
  const cosAngle = Math.cos(angle)
  const sinAngle = Math.sin(angle)
  return {
    x: x * cosAngle - y * sinAngle,
    y: x * sinAngle + y * cosAngle,
  }
}
