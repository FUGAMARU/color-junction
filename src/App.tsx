// Custom Hooks
import { useColorJunction } from "./useColorJunction"

// Chakra UI Components
import { Box, Flex, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

const App = () => {
  const height = 15
  const width = 15

  const { grid, convertToHex, handleTileClick } = useColorJunction({ height: height, width: width })


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
                      <Box key={`${lineIdx},${pieceIdx}`}>
                        {lineIdx === 0 ? <Box w="16px" h="1px" bg="#e3e3e3" />
                          : grid[lineIdx - 1][pieceIdx].color === grid[lineIdx][pieceIdx].color ? <Box w="15px" h="1px" ml="1px" bg={convertToHex(grid[lineIdx][pieceIdx].color)} />
                            : <Box w="16px" h="1px" bg="#e3e3e3" />}
                        <Flex>
                          {pieceIdx === 0 ? <Box w="1px" h="15px" bg="#e3e3e3" />
                            : grid[lineIdx][pieceIdx - 1].color === grid[lineIdx][pieceIdx].color ? <Box w="1px" h="15px" bg={convertToHex(grid[lineIdx][pieceIdx].color)} />
                              : <Box w="1px" h="15px" bg="#e3e3e3" />}
                          <Tile shape={piece.shape} color={convertToHex(piece.color)} onClick={() => handleTileClick(lineIdx, pieceIdx)} />
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
