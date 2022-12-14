// Interface
import { Grid } from "../types/Tile"

export const rotateLeft = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c])).reverse()
export const rotateRight = <T>(a: T[][]) => a[0].map((_, c) => a.map(r => r[c]).reverse())

export const getGridSize = <T>(grid: T[][]) => {
  const height = grid.length
  const width = grid[0].length
  return { height, width }
}

// Generated by ChatGPT①
export const moveBlanksToEnd = (grid: Grid) =>
  grid.map(arr => [...arr.filter(tile => tile.color !== "blank"), ...arr.filter(tile => tile.color === "blank")])

// Generated by ChatGPT②
export const moveBlankRowsToEnd = (grid: Grid) => {
  // 横1列全てcolorの値がblankの行を探す
  const blankRows = grid.filter(row => row.every(cell => cell.color === "blank"))

  // 見つかった行を最後の行に移動させる
  blankRows.forEach(blankRow => {
    grid.splice(grid.indexOf(blankRow), 1)
    grid.push(blankRow)
  })

  return grid
}
