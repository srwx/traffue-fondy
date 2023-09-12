export const calculateDistanceFromPointToLine = (
  point: any,
  start: any,
  end: any
) => {
  const x = point.lng
  const y = point.lat
  const x1 = start.lng
  const y1 = start.lat
  const x2 = end.lng
  const y2 = end.lat

  const A = x - x1
  const B = y - y1
  const C = x2 - x1
  const D = y2 - y1

  const dot = A * C + B * D
  const len_sq = C * C + D * D
  const param = dot / len_sq

  let xx, yy

  if (param < 0) {
    xx = x1
    yy = y1
  } else if (param > 1) {
    xx = x2
    yy = y2
  } else {
    xx = x1 + param * C
    yy = y1 + param * D
  }

  const dx = x - xx
  const dy = y - yy

  return Math.sqrt(dx * dx + dy * dy)
}
