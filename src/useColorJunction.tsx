// React Hooks
import { useState, useEffect } from "react"

// Type
import { Grid } from "./ts/types/Tile"
import { GameState } from "./ts/types/GameState"

// Grid Functions
import { generateRandomizedGrid, removeClump, getPieces, getGameState } from "./ts/functions/gridFunctions"

interface Props {
  height: number,
  width: number
}

export const useColorJunction = (props: Props) => {
  const [grid, setGrid] = useState<Grid>([])
  const [pieces, setPieces] = useState(0)
  const [gameState, setGameState] = useState<GameState>("Playing")

  useEffect(() => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }, [])

  useEffect(() => {
    if (!!!grid.length) return
    setGameState(getGameState(grid))
    setPieces(getPieces(grid))
  }, [grid])

  const handleTileClick = (x: number, y: number) => {
    console.log(`${x}, ${y} Clicked!`)
    setGrid(removeClump(grid, x, y))
  }

  const handleResetButtonClick = () => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }

  return { grid, pieces, gameState, handleTileClick, handleResetButtonClick }
}
