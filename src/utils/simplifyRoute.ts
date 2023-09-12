import { calculateDistanceFromPointToLine } from './calculateDistanceFromPointToLine'

export const simplifyRoute = (coordinates: any, tolerance: any) => {
  if (coordinates.length < 3) {
    return coordinates
  }

  const simplified = [coordinates[0]]
  const stack = []
  let index = 0

  for (let i = 1; i < coordinates.length - 1; i++) {
    const point = coordinates[i]
    const start = coordinates[index]
    const end = coordinates[coordinates.length - 1]

    const d = calculateDistanceFromPointToLine(point, start, end)

    if (d < tolerance) {
      continue
    } else {
      stack.push(index)
      index = i
    }
  }

  stack.push(coordinates.length - 1)

  for (const i of stack) {
    simplified.push(coordinates[i])
  }

  return simplified
}
