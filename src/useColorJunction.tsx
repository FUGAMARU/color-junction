// React Hooks
import { useState, useEffect } from "react"

// Interface
import { Grid } from "./ts/types/Tile"

// Grid Functions
import { generateRandomizedGrid, removeClump, getPieces } from "./ts/functions/gridFunctions"

interface Props {
  height: number,
  width: number
}

export const useColorJunction = (props: Props) => {
  const [grid, setGrid] = useState<Grid>([])
  const [pieces, setPieces] = useState(0)

  useEffect(() => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }, [])

  useEffect(() => {
    setPieces(getPieces(grid))
    console.table(grid)
  }, [grid])

  const handleTileClick = (x: number, y: number) => {
    console.log(`${x}, ${y} Clicked!`)
    setGrid(removeClump(grid, x, y))
  }

  return { grid, pieces, handleTileClick }
}
