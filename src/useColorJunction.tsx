// React Hooks
import { useState, useEffect, useMemo, useCallback } from "react"

// Type
import { Grid } from "./ts/types/Tile"
import { GameState } from "./ts/types/GameState"

// Grid Functions
import { generateRandomizedGrid, removeClump, getGameState, getPieces } from "./ts/functions/gridFunctions"

interface Props {
  height: number,
  width: number
}

export const useColorJunction = (props: Props) => {
  console.log("%cuseColorJunction.tsx", "color:white; border:solid 1px #0188d1; padding:1px 4px; border-radius:4px;", "Rendered")

  const [grid, setGrid] = useState<Grid>([])
  const gameState = useMemo<GameState>(() => getGameState(grid), [grid])
  const piecesLeft = useMemo(() => getPieces(grid), [grid])

  useEffect(() => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }, [])

  const handleTileClick = useCallback((x: number, y: number) => {
    console.log(`${x}, ${y} Clicked!`)
    setGrid(removeClump(grid, x, y))
  }, [grid])

  const handleResetButtonClick = () => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }

  return { grid, gameState, piecesLeft, handleTileClick, handleResetButtonClick }
}
