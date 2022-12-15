// Type
import { Color } from "../types/Color"
import { GameState } from "../types/GameState"

// Type
import { Tile, Grid } from "../types/Tile"

// Common Functions
import { rotateLeft, rotateRight, getGridSize, moveBlanksToEnd, moveBlankRowsToEnd } from "./commonFunctions"

export const generateRandomizedGrid = (height: number, width: number) => {
  const coloredGrid = generateColoredGrid(height, width) // 色だけランダムに振り分けたグリッド
  const randomizedGrid = judgeShape(coloredGrid) // 色の配置に合わせて形情報を付与したグリッド
  return randomizedGrid
}

export const removeClump = (grid: Grid, x: number, y: number) => {
  // クリックされた塊の削除
  const sequentialTiles = getSequentialTiles(grid, x, y) // 隣り合っているタイルの座標一覧
  sequentialTiles.forEach((tileXY) => {
    grid[tileXY[0]][tileXY[1]].color = "blank"
    grid[tileXY[0]][tileXY[1]].shape = "blank"
  })

  // blankを詰める
  const rightRotatedGrid = rotateRight(grid) // グリッドの右回転
  const bottomPadded = moveBlanksToEnd(rightRotatedGrid) // 上から下に詰める
  const leftPadded = moveBlankRowsToEnd(bottomPadded) // 右から左に詰める
  const leftRotatedGrid = rotateLeft(leftPadded) // グリッドの左回転
  const shapeJudged = judgeShape(leftRotatedGrid) // シェイプ判定

  return shapeJudged
}

export const getGameState = (grid: Grid): GameState => {
  if (!!!grid.length) return "Playing"

  const { height, width } = getGridSize(grid)
  const flatGrid = grid.flat()

  const blankTiles = flatGrid.filter(tile => tile.color === "blank").length
  if (blankTiles === height * width) return "Game Clear!"

  const clumps = flatGrid.filter(tile => tile.color !== "blank" && tile.shape !== "rounded").length
  if (clumps) return "Playing"

  return "Game Over!"
}

export const getPieces = (grid: Grid) => grid.length ? grid.flat().filter(tile => tile.color !== "blank").length : 0

const colorsForRandomize: Color[] = ["purple", "yellow", "green", "blue"]
const getRandomColor = () => colorsForRandomize[Math.floor(Math.random() * (colorsForRandomize.length - 0))]

const generateColoredGrid = (height: number, width: number) => {
  const result: Grid = [];

  [...Array(height)].forEach(() => {
    let x: Tile[] = [];
    [...Array(width)].forEach(() => {
      x.push({
        color: getRandomColor(),
        shape: "blank",
      })
    })
    result.push(x)
  })

  return result
}

const judgeShape = (grid: Grid) => {
  const { height, width } = getGridSize(grid)
  const visited = [...Array(height)].map(_ => Array(width).fill(false))

  const dfs = (x: number, y: number) => {
    if (x < 0 || y < 0 || x > height - 1 || y > width - 1 || visited[x][y]) return

    const color = grid[x][y].color

    const setShape = (x: number, y: number) => {
      // 左上
      if (x === 0 && y === 0) {
        if (grid[x + 1][y].color === color && grid[x][y + 1].color === color) {
          grid[x][y].shape = "topLeftRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x + 1][y].color !== color) {
          grid[x][y].shape = "leftRounded"
          return
        } else if (grid[x + 1][y].color === color && grid[x][y + 1].color !== color) {
          grid[x][y].shape = "topRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 右下
      if (x === height - 1 && y === width - 1) {
        if (grid[x - 1][y].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "bottomRightRounded"
          return
        } else if (grid[x][y - 1].color === color && grid[x - 1][y].color !== color) {
          grid[x][y].shape = "rightRounded"
          return
        } else if (grid[x - 1][y].color === color && grid[x][y - 1].color !== color) {
          grid[x][y].shape = "bottomRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 右上
      if (x === 0 && y === width - 1) {
        if (grid[x + 1][y].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "topRightRounded"
          return
        } else if (grid[x][y - 1].color === color && grid[x + 1][y].color !== color) {
          grid[x][y].shape = "rightRounded"
          return
        } else if (grid[x + 1][y].color === color && grid[x][y - 1].color !== color) {
          grid[x][y].shape = "topRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 左下
      if (x === height - 1 && y === 0) {
        if (grid[x - 1][y].color === color && grid[x][y + 1].color === color) {
          grid[x][y].shape = "bottomLeftRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x - 1][y].color !== color) {
          grid[x][y].shape = "leftRounded"
          return
        } else if (grid[x - 1][y].color === color && grid[x][y + 1].color !== color) {
          grid[x][y].shape = "bottomRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 上辺
      if (x === 0) {
        if (grid[x][y + 1].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "square"
          return
        } else if (grid[x + 1][y].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "topRightRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x + 1][y].color === color) {
          grid[x][y].shape = "topLeftRounded"
          return
        } else if (grid[x][y - 1].color === color && grid[x][y + 1].color !== color) {
          grid[x][y].shape = "rightRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x][y - 1].color !== color) {
          grid[x][y].shape = "leftRounded"
          return
        } else if (grid[x + 1][y].color === color) {
          grid[x][y].shape = "topRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 下辺
      if (x === height - 1) {
        if (grid[x][y + 1].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "square"
          return
        } else if (grid[x - 1][y].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "bottomRightRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x - 1][y].color === color) {
          grid[x][y].shape = "bottomLeftRounded"
          return
        } else if (grid[x][y - 1].color === color && grid[x][y + 1].color !== color) {
          grid[x][y].shape = "rightRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x][y - 1].color !== color) {
          grid[x][y].shape = "leftRounded"
          return
        } else if (grid[x - 1][y].color === color) {
          grid[x][y].shape = "bottomRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 左辺
      if (y === 0) {
        if (grid[x + 1][y].color === color && grid[x - 1][y].color === color) {
          grid[x][y].shape = "square"
          return
        } else if (grid[x + 1][y].color === color && grid[x][y + 1].color === color) {
          grid[x][y].shape = "topLeftRounded"
          return
        } else if (grid[x][y + 1].color === color && grid[x - 1][y].color === color) {
          grid[x][y].shape = "bottomLeftRounded"
          return
        } else if (grid[x][y + 1].color === color) {
          grid[x][y].shape = "leftRounded"
          return
        } else if (grid[x + 1][y].color === color && grid[x - 1][y].color !== color) {
          grid[x][y].shape = "topRounded"
          return
        } else if (grid[x - 1][y].color === color && grid[x + 1][y].color !== color) {
          grid[x][y].shape = "bottomRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // 右辺
      if (y === width - 1) {
        if (grid[x + 1][y].color === color && grid[x - 1][y].color === color) {
          grid[x][y].shape = "square"
          return
        } else if (grid[x + 1][y].color === color && grid[x][y - 1].color === color) {
          grid[x][y].shape = "topRightRounded"
          return
        } else if (grid[x][y - 1].color === color && grid[x - 1][y].color === color) {
          grid[x][y].shape = "bottomRightRounded"
          return
        } else if (grid[x][y - 1].color === color) {
          grid[x][y].shape = "rightRounded"
          return
        } else if (grid[x + 1][y].color === color && grid[x - 1][y].color !== color) {
          grid[x][y].shape = "topRounded"
          return
        } else if (grid[x - 1][y].color === color && grid[x + 1][y].color !== color) {
          grid[x][y].shape = "bottomRounded"
          return
        } else {
          grid[x][y].shape = "rounded"
          return
        }
      }

      // その他
      if ((grid[x + 1][y].color === color && grid[x - 1][y].color === color) || (grid[x][y + 1].color === color && grid[x][y - 1].color === color)) {
        grid[x][y].shape = "square"
        return
      } else if (grid[x - 1][y].color === color && grid[x][y - 1].color === color && grid[x + 1][y].color !== color && grid[x][y + 1].color !== color) {
        grid[x][y].shape = "bottomRightRounded"
        return
      } else if (grid[x - 1][y].color === color && grid[x][y + 1].color === color && grid[x + 1][y].color !== color && grid[x][y - 1].color !== color) {
        grid[x][y].shape = "bottomLeftRounded"
        return
      } else if (grid[x + 1][y].color === color && grid[x][y - 1].color === color && grid[x - 1][y].color !== color && grid[x][y + 1].color !== color) {
        grid[x][y].shape = "topRightRounded"
        return
      } else if (grid[x + 1][y].color === color && grid[x][y + 1].color === color && grid[x - 1][y].color !== color && grid[x][y - 1].color !== color) {
        grid[x][y].shape = "topLeftRounded"
        return
      } else if (grid[x][y - 1].color === color && grid[x][y + 1].color !== color && grid[x + 1][y].color !== color && grid[x - 1][y].color !== color) {
        grid[x][y].shape = "rightRounded"
        return
      } else if (grid[x][y + 1].color === color && grid[x][y - 1].color !== color && grid[x + 1][y].color !== color && grid[x - 1][y].color !== color) {
        grid[x][y].shape = "leftRounded"
        return
      } else if (grid[x - 1][y].color === color && grid[x][y + 1].color !== color && grid[x + 1][y].color !== color && grid[x][y - 1].color !== color) {
        grid[x][y].shape = "bottomRounded"
        return
      } else if (grid[x + 1][y].color === color && grid[x][y + 1].color !== color && grid[x - 1][y].color !== color && grid[x][y - 1].color !== color) {
        grid[x][y].shape = "topRounded"
        return
      } else {
        grid[x][y].shape = "rounded"
        return
      }
    }

    setShape(x, y)
    visited[x][y] = true

    dfs(x - 1, y) //上
    dfs(x, y + 1) //右
    dfs(x + 1, y) //下
    dfs(x, y - 1) //左
  }

  dfs(0, 0)

  return grid
}

const getSequentialTiles = (grid: Grid, initX: number, initY: number) => {
  const { height, width } = getGridSize(grid)
  const visited = [...Array(height)].map(_ => Array(width).fill(false))
  const sequentialTiles: number[][] = []
  const color = grid[initX][initY].color

  const dfs = (x: number, y: number) => {
    if (x < 0 || y < 0 || x > height - 1 || y > width - 1 || visited[x][y] || grid[x][y].color !== color) return
    sequentialTiles.push([x, y])
    visited[x][y] = true

    dfs(x + 1, y) //下
    dfs(x, y - 1) //左
    dfs(x - 1, y) //上
    dfs(x, y + 1) //右
  }

  dfs(initX, initY)
  return sequentialTiles
}
