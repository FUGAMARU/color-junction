// Type
import { Color } from "../type"

// Interface
import { Piece } from "../interface"

export class ColorJunction {
  height = 0
  width = 0

  constructor(height: number, width: number) {
    this.height = height
    this.width = width
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

  generateDummy(): Piece[][] {
    return [...Array(this.height)].map(_ => Array(this.width).fill({
      color: this.getRandomColor(),
      shape: "rounded"
    }))
  }

  demo(): Piece[][] {
    return (
      [
        [
          {
            "color": "green",
            "shape": "topLeftRounded"
          },
          {
            "color": "green",
            "shape": "square"
          },
          {
            "color": "green",
            "shape": "rightRounded"
          },
          {
            "color": "blue",
            "shape": "leftRounded"
          },
          {
            "color": "blue",
            "shape": "square"
          },
          {
            "color": "blue",
            "shape": "topRightRounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "green",
            "shape": "square"
          },
          {
            "color": "green",
            "shape": "square"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "bottomLeftRounded"
          },
          {
            "color": "blue",
            "shape": "square"
          },
          {
            "color": "blue",
            "shape": "rightRounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "green",
            "shape": "square"
          },
          {
            "color": "green",
            "shape": "bottomRightRounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "bottomRounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "green",
            "shape": "square"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "green",
            "shape": "bottomRounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          },
          {
            "color": "green",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          },
          {
            "color": "purple",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          },
          {
            "color": "yellow",
            "shape": "rounded"
          }
        ],
        [
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          },
          {
            "color": "blue",
            "shape": "rounded"
          }
        ]
      ]
    )
  }
}