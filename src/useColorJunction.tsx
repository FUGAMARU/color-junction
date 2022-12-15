// React Hooks
import { useState, useEffect, useMemo, useCallback } from "react"

// Type
import { Grid } from "./ts/types/Tile"
import { GameState } from "./ts/types/GameState"

// Grid Functions
import { generateRandomizedGrid, removeClump, getGameState, getPieces } from "./ts/functions/gridFunctions"

// Common Functions
import { notifyRendering } from "./ts/functions/commonFunctions"

interface Props {
  height: number,
  width: number,
  debug: boolean
}

export const useColorJunction = (props: Props) => {
  if (props.debug) notifyRendering("useColorJunction")

  const [grid, setGrid] = useState<Grid>([])
  const gameState = useMemo<GameState>(() => getGameState(grid), [grid])
  const piecesLeft = useMemo(() => getPieces(grid), [grid])

  useEffect(() => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }, [])

  useEffect(() => {
    if (props.debug) console.table(grid)
  }, [grid, props.debug])

  const handleTileClick = useCallback((x: number, y: number) => {
    if (grid[x][y].color === "blank") return
    if (props.debug) console.log(`${x}, ${y} Clicked!`)
    setGrid(removeClump(grid, x, y))
  }, [grid])

  const handleResetButtonClick = () => {
    setGrid(generateRandomizedGrid(props.height, props.width))
  }

  return { grid, gameState, piecesLeft, handleTileClick, handleResetButtonClick }
}