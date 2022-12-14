// React Hooks
import { useState, useEffect } from "react"

// Interface
import { Grid } from "./ts/types/Tile"

// Grid Functions
import { generateRandomizedGrid, removeClump } from "./ts/functions/gridFunctions"

interface Props {
  height: number,
  width: number
}

export const useColorJunction = (props: Props) => {
  const [grid, setGrid] = useState<Grid>([])

  useEffect(() => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }, [])

  useEffect(() => {
    console.table(grid)
  }, [grid])

  const handleTileClick = (x: number, y: number) => {
    console.log(`${x}, ${y} Clicked!`)
    setGrid(removeClump(grid, x, y))
  }

  return { grid, handleTileClick }
}
