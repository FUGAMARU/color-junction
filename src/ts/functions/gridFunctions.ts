// Type
import { Color } from "../types/Color"

// Interface
import { Tile, Grid } from "../types/Tile"

// Common Functions
import { rotateLeft, rotateRight, moveBlanksToEnd, moveBlankRowsToEnd } from "./commonFunctions"

export const generateRandomizedGrid = (height: number, width: number) => {
  const coloredGrid = generateColoredGrid(height, width) // 色だけランダムに振り分けたグリッド
  const randomizedGrid = judgeShape(coloredGrid) // 色の配置に合わせて形情報を付与したグリッド
  return randomizedGrid
}

export const removeClump = (grid: Grid, x: number, y: number) => {
  const sequentialTiles = checkSequentialTiles(grid, x, y) // 隣り合っているタイルの座標一覧

  let tmpGrid = grid.concat()

  // クリックされた塊の削除
  sequentialTiles.forEach((tileXY) => {
    tmpGrid[tileXY[0]][tileXY[1]].color = "blank"
    tmpGrid[tileXY[0]][tileXY[1]].shape = "blank"
  })

  // blankを詰める
  const rightRotatedGrid = rotateRight(tmpGrid)
  const bottomPadded = moveBlanksToEnd(rightRotatedGrid) // 上から下に詰める
  const leftPadded = moveBlankRowsToEnd(bottomPadded) // 右から左に詰める
  const leftRotatedGrid = rotateLeft(leftPadded)

  tmpGrid = judgeShape(leftRotatedGrid)

  return tmpGrid
}

export const getPieces = (grid: Grid) => {
  const tmpGrid = grid.concat().flat()
  return tmpGrid.filter(tile => tile.color !== "blank").length
}

const colorsForRandomize: Color[] = ["purple", "yellow", "green", "blue"]
const getRandomColor = () => {
  const rand = Math.floor(Math.random() * (colorsForRandomize.length - 0))
  return colorsForRandomize[rand]
}

const generateColoredGrid = (height: number, width: number) => {
  const result: Grid = [];

  [...Array(height)].map(() => {
    let x: Tile[] = [];
    [...Array(width)].map(() => {
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
  const height = grid.length
  const width = grid[0].length
  const tmpGrid = grid.concat()
  const visited = [...Array(height)].map(_ => Array(width).fill(false))

  const dfs = (x: number, y: number) => {
    if (x < 0 || y < 0 || x > height - 1 || y > width - 1 || visited[x][y]) return

    const color = tmpGrid[x][y].color

    const setShape = (x: number, y: number) => {
      // 左上
      if (x === 0 && y === 0) {
        if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y + 1].color === color) {
          tmpGrid[x][y].shape = "topLeftRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x + 1][y].color !== color) {
          tmpGrid[x][y].shape = "leftRounded"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y + 1].color !== color) {
          tmpGrid[x][y].shape = "topRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 右下
      if (x === height - 1 && y === width - 1) {
        if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "bottomRightRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x - 1][y].color !== color) {
          tmpGrid[x][y].shape = "rightRounded"
          return
        } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y - 1].color !== color) {
          tmpGrid[x][y].shape = "bottomRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 右上
      if (x === 0 && y === width - 1) {
        if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "topRightRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x + 1][y].color !== color) {
          tmpGrid[x][y].shape = "rightRounded"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y - 1].color !== color) {
          tmpGrid[x][y].shape = "topRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 左下
      if (x === height - 1 && y === 0) {
        if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y + 1].color === color) {
          tmpGrid[x][y].shape = "bottomLeftRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x - 1][y].color !== color) {
          tmpGrid[x][y].shape = "leftRounded"
          return
        } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y + 1].color !== color) {
          tmpGrid[x][y].shape = "bottomRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 上辺
      if (x === 0) {
        if (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "square"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "topRightRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x + 1][y].color === color) {
          tmpGrid[x][y].shape = "topLeftRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x][y + 1].color !== color) {
          tmpGrid[x][y].shape = "rightRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color !== color) {
          tmpGrid[x][y].shape = "leftRounded"
          return
        } else if (tmpGrid[x + 1][y].color === color) {
          tmpGrid[x][y].shape = "topRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 下辺
      if (x === height - 1) {
        if (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "square"
          return
        } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "bottomRightRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "bottomLeftRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x][y + 1].color !== color) {
          tmpGrid[x][y].shape = "rightRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color !== color) {
          tmpGrid[x][y].shape = "leftRounded"
          return
        } else if (tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "bottomRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 左辺
      if (y === 0) {
        if (tmpGrid[x + 1][y].color === color && tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "square"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y + 1].color === color) {
          tmpGrid[x][y].shape = "topLeftRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "bottomLeftRounded"
          return
        } else if (tmpGrid[x][y + 1].color === color) {
          tmpGrid[x][y].shape = "leftRounded"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x - 1][y].color !== color) {
          tmpGrid[x][y].shape = "topRounded"
          return
        } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x + 1][y].color !== color) {
          tmpGrid[x][y].shape = "bottomRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // 右辺
      if (y === width - 1) {
        if (tmpGrid[x + 1][y].color === color && tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "square"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "topRightRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x - 1][y].color === color) {
          tmpGrid[x][y].shape = "bottomRightRounded"
          return
        } else if (tmpGrid[x][y - 1].color === color) {
          tmpGrid[x][y].shape = "rightRounded"
          return
        } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x - 1][y].color !== color) {
          tmpGrid[x][y].shape = "topRounded"
          return
        } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x + 1][y].color !== color) {
          tmpGrid[x][y].shape = "bottomRounded"
          return
        } else {
          tmpGrid[x][y].shape = "rounded"
          return
        }
      }

      // その他
      if ((tmpGrid[x + 1][y].color === color && tmpGrid[x - 1][y].color === color) || (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color === color)) {
        tmpGrid[x][y].shape = "square"
        return
      } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y - 1].color === color && tmpGrid[x + 1][y].color !== color && tmpGrid[x][y + 1].color !== color) {
        tmpGrid[x][y].shape = "bottomRightRounded"
        return
      } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y + 1].color === color && tmpGrid[x + 1][y].color !== color && tmpGrid[x][y - 1].color !== color) {
        tmpGrid[x][y].shape = "bottomLeftRounded"
        return
      } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y - 1].color === color && tmpGrid[x - 1][y].color !== color && tmpGrid[x][y + 1].color !== color) {
        tmpGrid[x][y].shape = "topRightRounded"
        return
      } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y + 1].color === color && tmpGrid[x - 1][y].color !== color && tmpGrid[x][y - 1].color !== color) {
        tmpGrid[x][y].shape = "topLeftRounded"
        return
      } else if (tmpGrid[x][y - 1].color === color && tmpGrid[x][y + 1].color !== color && tmpGrid[x + 1][y].color !== color && tmpGrid[x - 1][y].color !== color) {
        tmpGrid[x][y].shape = "rightRounded"
        return
      } else if (tmpGrid[x][y + 1].color === color && tmpGrid[x][y - 1].color !== color && tmpGrid[x + 1][y].color !== color && tmpGrid[x - 1][y].color !== color) {
        tmpGrid[x][y].shape = "leftRounded"
        return
      } else if (tmpGrid[x - 1][y].color === color && tmpGrid[x][y + 1].color !== color && tmpGrid[x + 1][y].color !== color && tmpGrid[x][y - 1].color !== color) {
        tmpGrid[x][y].shape = "bottomRounded"
        return
      } else if (tmpGrid[x + 1][y].color === color && tmpGrid[x][y + 1].color !== color && tmpGrid[x - 1][y].color !== color && tmpGrid[x][y - 1].color !== color) {
        tmpGrid[x][y].shape = "topRounded"
        return
      } else {
        tmpGrid[x][y].shape = "rounded"
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

  return tmpGrid
}

const checkSequentialTiles = (grid: Grid, initX: number, initY: number) => {
  const height = grid.length
  const width = grid[0].length
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
