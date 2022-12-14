// Interface
import { Tile } from "./types/Tile"

export const rotateLeft = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c])).reverse()
export const rotateRight = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c]).reverse())

// Code by ChatGPT!!
export const moveBlanksToEnd = (objects: Tile[]) => {
  const nonBlanks = objects.filter(obj => obj.shape !== "blank")
  const blanks = objects.filter(obj => obj.shape === "blank")

  return [...nonBlanks, ...blanks]
}

