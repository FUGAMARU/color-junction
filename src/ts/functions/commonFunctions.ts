// Interface
import { Grid } from "../types/Tile"

export const rotateLeft = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c])).reverse()
export const rotateRight = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c]).reverse())

export const getGridSize = <T>(grid: T[][]) => {
  const height = grid.length
  const width = grid[0].length
  return { height, width }
}

// Part of this function was generated by ChatGPT
export const squeezeGrid = (grid: Grid) => {
  // blankのタイルを除いた配列を作成し、blankのタイルを追加
  const bottomPadded = rotateRight(grid).map(arr => arr.filter(tile => tile.color !== "blank").concat(arr.filter(tile => tile.color === "blank")))

  // 横1列全てcolorの値がblankの行を探す
  const blankRows = bottomPadded.filter(row => row.every(cell => cell.color === "blank"))

  // 見つかった行を最後の行に移動させる
  return rotateLeft(bottomPadded.filter(row => !blankRows.includes(row)).concat(blankRows))
}

export const notifyRendering = (componentName: string) => console.log(`%c${componentName}.tsx`, "color:white; border:solid 1px #0188d1; padding:1px 4px; border-radius:4px;", "Rendered")