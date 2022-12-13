// React Hooks
import { useEffect, useState, useMemo } from "react"

// Chakra UI Components
import { Box, Flex, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Class
import { ColorJunction } from "./ts/ColorJunction"

// Interface
import { Piece } from "./ts/interface"

const App = () => {
  const height = 15
  const width = 15

  const colorJunction = useMemo(() => {
    return new ColorJunction(height, width)
  }, [height, width])

  const [grid, setGrid] = useState<Piece[][]>()

  useEffect(() => {
    setGrid(colorJunction.getGrid)
  }, [colorJunction.getGrid])

  return (
    <Box>
      <Box w={`${18.2 * width}px`} h={`${17.2 * height}px`} p="0.2px" bg="#e3e3e3" overflow="hidden">
        <VStack spacing={0} mt="1.5px">
          {grid?.map((line, lineIdx) => {
            return (
              <HStack key={lineIdx} spacing={0}>
                {
                  line.map((piece, pieceIdx) => {
                    return (
                      <Box>
                        {lineIdx === 0 ? <Box w="16px" h="1px" bg="#e3e3e3" />
                          : grid[lineIdx - 1][pieceIdx].color === grid[lineIdx][pieceIdx].color ? <Box w="15px" h="1px" ml="1px" bg={colorJunction.convertToHex(grid[lineIdx][pieceIdx].color)} />
                            : <Box w="16px" h="1px" bg="#e3e3e3" />}
                        <Flex>
                          {pieceIdx === 0 ? <Box w="1px" h="15px" bg="#e3e3e3" />
                            : grid[lineIdx][pieceIdx - 1].color === grid[lineIdx][pieceIdx].color ? <Box w="1px" h="15px" bg={colorJunction.convertToHex(grid[lineIdx][pieceIdx].color)} />
                              : <Box w="1px" h="15px" bg="#e3e3e3" />}
                          <Tile key={`${lineIdx},${pieceIdx}`} shape={piece.shape} color={colorJunction.convertToHex(piece.color)} />
                        </Flex>
                      </Box>
                    )
                  })
                }
              </HStack>
            )
          })}
        </VStack>
      </Box>
      <Box w={`${18.2 * width}px`} h="19px" bg="#cccccc" borderTop="solid 1px #888888">Footer</Box>
    </Box>
  )
}

export default App
