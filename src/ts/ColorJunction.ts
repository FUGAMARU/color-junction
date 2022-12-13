// Type
import { Color } from "./type"

// Interface
import { Piece } from "./interface"

export class ColorJunction {
  height = 0 // 縦方向のブロック数
  width = 0 // 横方向のブロック数
  grid: Piece[][] = [] // 盤面データー

  constructor(height: number, width: number) {
    this.height = height
    this.width = width;

    this.grid = this.judgeShape(this.generateRandomlyColoredGrid(height, width), height, width)
  }

  private getRandomColor(): Color {
    const rand = Math.floor(Math.random() * (4 - 0))
    switch (rand) {
      case 0:
        return "purple"
      case 1:
        return "yellow"
      case 2:
        return "green"
      default:
        return "blue"
    }
  }

  private generateRandomlyColoredGrid(height: number, width: number) {
    const forReturn: Piece[][] = [];

    [...Array(height)].map(() => {
      let x: Piece[] = [];
      [...Array(width)].map(() => {
        x.push({
          color: this.getRandomColor(),
          shape: "blank"
        })
      })
      forReturn.push(x)
    })

    return forReturn
  }

  private judgeShape(randomColorGrid: Piece[][], height: number, width: number) {
    const grid = randomColorGrid.concat()
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

  static hexConverter(color: Color) {
    switch (color) {
      case "purple":
        return "#951350"
      case "yellow":
        return "#ff9400"
      case "green":
        return "#4c9000"
      case "blue":
        return "#0d1593"
      default:
        return "black"
    }
  }

  get getGrid() {
    return this.grid
  }
}