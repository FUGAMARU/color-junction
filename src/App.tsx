// React Hooks
import { useEffect, useState } from "react"

// Chakra UI Components
import { Box, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Class
import { ColorJunction } from "./ts/ColorJunction"

// Interface
import { Piece } from "./ts/interface"

const App = () => {
  const height = 15
  const width = 15

  const [grid, setGrid] = useState<Piece[][]>()

  useEffect(() => {
    const colorJunction = new ColorJunction(height, width)
    console.log(colorJunction.getGrid)
    setGrid(colorJunction.getGrid)
  }, [])

  return (
    <Box>
      <Box w={`${15.2 * width}px`} h={`${15.2 * height}px`} p="0.2px" bg="#e3e3e3" overflow="hidden">
        <VStack spacing={0} mt="1.5px">
          {grid?.map((line, lineIdx) => {
            return (
              <HStack key={lineIdx} spacing={0}>
                {
                  line.map((piece, pieceIdx) => {
                    return (
                      <Tile key={`${lineIdx},${pieceIdx}`} shape={piece.shape} color={ColorJunction.hexConverter(piece.color)} />
                    )
                  })
                }
              </HStack>
            )
          })}
        </VStack>
      </Box>
      <Box w={`${15.2 * width}px`} h="19px" bg="#cccccc" borderTop="solid 1px #888888">Footer</Box>
    </Box>
  )
}

export default App
