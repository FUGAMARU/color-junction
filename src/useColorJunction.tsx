// React Hooks
import { useState, useEffect } from "react"

// Type
import { Color } from "./ts/types/Color"

// Interface
import { Piece } from "./ts/interface"

// Function
import { rotateLeft, rotateRight, moveBlanksToEnd } from "./ts/function"

interface Props {
  height: number,
  width: number
}

export const useColorJunction = (props: Props) => {
  const [grid, setGrid] = useState<Piece[][]>([])

  useEffect(() => {
    const coloredGrid = generateColoredGrid() // 色だけランダムに振り分けたグリッド
    const randomizedGrid = judgeShape(coloredGrid) // 色の配置に合わせて形情報を付与したグリッド
    setGrid(randomizedGrid)
  }, [])

  useEffect(() => {
    console.table(grid)
  }, [grid])

  const getRandomColor = (): Color => {
    const colors: Color[] = ["purple", "yellow", "green", "blue"]
    const rand = Math.floor(Math.random() * (colors.length - 0))
    return colors[rand]
  }

  const generateColoredGrid = () => {
    const result: Piece[][] = [];

    [...Array(props.height)].map(() => {
      let x: Piece[] = [];
      [...Array(props.width)].map(() => {
        x.push({
          shape: "blank",
          color: getRandomColor()
        })
      })
      result.push(x)
    })

    return result
  }

  const judgeShape = (currentGrid: Piece[][]) => {
    const localGrid = currentGrid.concat()
    const visited = [...Array(props.height)].map(_ => Array(props.width).fill(false))

    const dfs = (x: number, y: number) => {
      if (x < 0 || y < 0 || x > props.height - 1 || y > props.width - 1 || visited[x][y]) return

      const color = localGrid[x][y].color

      const setShape = (x: number, y: number) => {
        // 左上
        if (x === 0 && y === 0) {
          if (localGrid[x + 1][y].color === color && localGrid[x][y + 1].color === color) {
            localGrid[x][y].shape = "topLeftRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x + 1][y].color !== color) {
            localGrid[x][y].shape = "leftRounded"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x][y + 1].color !== color) {
            localGrid[x][y].shape = "topRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 右下
        if (x === props.height - 1 && y === props.width - 1) {
          if (localGrid[x - 1][y].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "bottomRightRounded"
            return
          } else if (localGrid[x][y - 1].color === color && localGrid[x - 1][y].color !== color) {
            localGrid[x][y].shape = "rightRounded"
            return
          } else if (localGrid[x - 1][y].color === color && localGrid[x][y - 1].color !== color) {
            localGrid[x][y].shape = "bottomRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 右上
        if (x === 0 && y === props.width - 1) {
          if (localGrid[x + 1][y].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "topRightRounded"
            return
          } else if (localGrid[x][y - 1].color === color && localGrid[x + 1][y].color !== color) {
            localGrid[x][y].shape = "rightRounded"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x][y - 1].color !== color) {
            localGrid[x][y].shape = "topRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 左下
        if (x === props.height - 1 && y === 0) {
          if (localGrid[x - 1][y].color === color && localGrid[x][y + 1].color === color) {
            localGrid[x][y].shape = "bottomLeftRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x - 1][y].color !== color) {
            localGrid[x][y].shape = "leftRounded"
            return
          } else if (localGrid[x - 1][y].color === color && localGrid[x][y + 1].color !== color) {
            localGrid[x][y].shape = "bottomRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 上辺
        if (x === 0) {
          if (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "square"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "topRightRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x + 1][y].color === color) {
            localGrid[x][y].shape = "topLeftRounded"
            return
          } else if (localGrid[x][y - 1].color === color && localGrid[x][y + 1].color !== color) {
            localGrid[x][y].shape = "rightRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color !== color) {
            localGrid[x][y].shape = "leftRounded"
            return
          } else if (localGrid[x + 1][y].color === color) {
            localGrid[x][y].shape = "topRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 下辺
        if (x === props.height - 1) {
          if (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "square"
            return
          } else if (localGrid[x - 1][y].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "bottomRightRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "bottomLeftRounded"
            return
          } else if (localGrid[x][y - 1].color === color && localGrid[x][y + 1].color !== color) {
            localGrid[x][y].shape = "rightRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color !== color) {
            localGrid[x][y].shape = "leftRounded"
            return
          } else if (localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "bottomRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 左辺
        if (y === 0) {
          if (localGrid[x + 1][y].color === color && localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "square"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x][y + 1].color === color) {
            localGrid[x][y].shape = "topLeftRounded"
            return
          } else if (localGrid[x][y + 1].color === color && localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "bottomLeftRounded"
            return
          } else if (localGrid[x][y + 1].color === color) {
            localGrid[x][y].shape = "leftRounded"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x - 1][y].color !== color) {
            localGrid[x][y].shape = "topRounded"
            return
          } else if (localGrid[x - 1][y].color === color && localGrid[x + 1][y].color !== color) {
            localGrid[x][y].shape = "bottomRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // 右辺
        if (y === props.width - 1) {
          if (localGrid[x + 1][y].color === color && localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "square"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "topRightRounded"
            return
          } else if (localGrid[x][y - 1].color === color && localGrid[x - 1][y].color === color) {
            localGrid[x][y].shape = "bottomRightRounded"
            return
          } else if (localGrid[x][y - 1].color === color) {
            localGrid[x][y].shape = "rightRounded"
            return
          } else if (localGrid[x + 1][y].color === color && localGrid[x - 1][y].color !== color) {
            localGrid[x][y].shape = "topRounded"
            return
          } else if (localGrid[x - 1][y].color === color && localGrid[x + 1][y].color !== color) {
            localGrid[x][y].shape = "bottomRounded"
            return
          } else {
            localGrid[x][y].shape = "rounded"
            return
          }
        }

        // その他
        if ((localGrid[x + 1][y].color === color && localGrid[x - 1][y].color === color) || (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color === color)) {
          localGrid[x][y].shape = "square"
          return
        } else if (localGrid[x - 1][y].color === color && localGrid[x][y - 1].color === color && localGrid[x + 1][y].color !== color && localGrid[x][y + 1].color !== color) {
          localGrid[x][y].shape = "bottomRightRounded"
          return
        } else if (localGrid[x - 1][y].color === color && localGrid[x][y + 1].color === color && localGrid[x + 1][y].color !== color && localGrid[x][y - 1].color !== color) {
          localGrid[x][y].shape = "bottomLeftRounded"
          return
        } else if (localGrid[x + 1][y].color === color && localGrid[x][y - 1].color === color && localGrid[x - 1][y].color !== color && localGrid[x][y + 1].color !== color) {
          localGrid[x][y].shape = "topRightRounded"
          return
        } else if (localGrid[x + 1][y].color === color && localGrid[x][y + 1].color === color && localGrid[x - 1][y].color !== color && localGrid[x][y - 1].color !== color) {
          localGrid[x][y].shape = "topLeftRounded"
          return
        } else if (localGrid[x][y - 1].color === color && localGrid[x][y + 1].color !== color && localGrid[x + 1][y].color !== color && localGrid[x - 1][y].color !== color) {
          localGrid[x][y].shape = "rightRounded"
          return
        } else if (localGrid[x][y + 1].color === color && localGrid[x][y - 1].color !== color && localGrid[x + 1][y].color !== color && localGrid[x - 1][y].color !== color) {
          localGrid[x][y].shape = "leftRounded"
          return
        } else if (localGrid[x - 1][y].color === color && localGrid[x][y + 1].color !== color && localGrid[x + 1][y].color !== color && localGrid[x][y - 1].color !== color) {
          localGrid[x][y].shape = "bottomRounded"
          return
        } else if (localGrid[x + 1][y].color === color && localGrid[x][y + 1].color !== color && localGrid[x - 1][y].color !== color && localGrid[x][y - 1].color !== color) {
          localGrid[x][y].shape = "topRounded"
          return
        } else {
          localGrid[x][y].shape = "rounded"
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

    return localGrid
  }

  const checkSequentialTiles = (initX: number, initY: number) => {
    const color = grid[initX][initY].color
    const visited = [...Array(props.height)].map(_ => Array(props.width).fill(false))
    const sequentialTiles: number[][] = []

    const dfs = (x: number, y: number) => {
      if (x < 0 || y < 0 || x > props.height - 1 || y > props.width - 1 || visited[x][y] || grid[x][y].color !== color) return
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

  const removeClump = (currentGrid: Piece[][], sequentialTiles: number[][]) => {
    let localGrid = currentGrid.concat()

    // クリックされた塊の削除
    sequentialTiles.forEach((tileXY) => {
      localGrid[tileXY[0]][tileXY[1]].shape = "blank"
      localGrid[tileXY[0]][tileXY[1]].color = "blank"
    })

    // blankを詰める
    const rightRotatedGrid = rotateRight(localGrid)
    const squeezedGrid = rightRotatedGrid.map(line => moveBlanksToEnd(line))
    const leftRotatedGrid = rotateLeft(squeezedGrid)

    localGrid = judgeShape(leftRotatedGrid)

    return localGrid
  }

  const handleTileClick = (x: number, y: number) => {
    console.log(`${x}, ${y} Clicked!`)
    const sequentialTiles = checkSequentialTiles(x, y) // 隣り合っているタイルの座標一覧
    const clumpRemovedGrid = removeClump(grid.concat(), sequentialTiles) // 隣り合っているタイルを削除して詰めたグリッド
    setGrid(clumpRemovedGrid)
  }

  return { grid, handleTileClick }
}
