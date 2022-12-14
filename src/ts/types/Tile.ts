// Type
import { Shape } from "./Shape"
import { Color } from "./Color"

export type Tile = {
  shape: Shape,
  color: Color,
}

export type Grid = Tile[][]