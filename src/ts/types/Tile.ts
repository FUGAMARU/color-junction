// Type
import { Color } from "./Color"
import { Shape } from "./Shape"

export type Tile = {
  color: Color,
  shape: Shape,
}

export type Grid = Tile[][]