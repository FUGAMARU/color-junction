// Custom Hooks
import { useColorJunction } from "./useColorJunction"

// Chakra UI Components
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft, faInfo } from "@fortawesome/free-solid-svg-icons"

// Type
import { hex } from "./ts/types/Color"

const App = () => {
  const height = 15
  const width = 15

  const { grid, pieces, gameState, handleTileClick, handleResetButtonClick } = useColorJunction({ height: height, width: width })

  if (grid.flat().length === height * width) {
    return (
      <Box w="fit-content">
        <Box pt="1.5px" pb="2.5px" pl="1.5px" pr="2.5px" position="relative" bg="#e3e3e3">
          <VStack spacing={0}>
            {grid?.map((line, lineIdx) => {
              return (
                <HStack key={lineIdx} spacing={0}>
                  {
                    line.map((piece, pieceIdx) => {
                      return (
                        <Box key={`${lineIdx},${pieceIdx}`}>
                          {lineIdx === 0 ? <Box w="16px" h="1px" bg="#e3e3e3" />
                            : grid[lineIdx - 1][pieceIdx].color === grid[lineIdx][pieceIdx].color ? <Box w="15px" h="1px" ml="1px" bg={hex[grid[lineIdx][pieceIdx].color]} />
                              : <Box w="16px" h="1px" bg="#e3e3e3" />}
                          <Flex>
                            {pieceIdx === 0 ? <Box w="1px" h="15px" bg="#e3e3e3" />
                              : grid[lineIdx][pieceIdx - 1].color === grid[lineIdx][pieceIdx].color ? <Box w="1px" h="15px" bg={hex[grid[lineIdx][pieceIdx].color]} />
                                : <Box w="1px" h="15px" bg="#e3e3e3" />}
                            <Tile shape={piece.shape} color={hex[piece.color]} onClick={() => handleTileClick(lineIdx, pieceIdx)} />
                          </Flex>
                        </Box>
                      )
                    })
                  }
                </HStack>
              )
            })}
          </VStack>
          {gameState !== "Playing" ?
            <Flex h="100%" w="100%" position="absolute" top="0" left="0" justify="center" align="center" bg="whiteAlpha.700">
              <Text fontSize="20px" fontWeight="regular" textAlign="center">{gameState}</Text>
            </Flex>
            : null
          }
        </Box>
        <Flex h="20px" px="3px" justify="space-between" align="center" bg="#cccccc" borderTop="solid 1px #888888">
          <Flex align="center">
            <Flex h="14px" w="14px" mr="1.5px" justify="center" align="center" bg="#9e9e9e" borderRadius="50%" cursor="pointer" onClick={handleResetButtonClick} title="reset">
              <FontAwesomeIcon icon={faRotateLeft} color="white" width="10px" height="10px"></FontAwesomeIcon>
            </Flex>
            <Flex h="14px" w="14px" ml="1.5px" justify="center" align="center" bg="#9e9e9e" borderRadius="50%" cursor="pointer">
              <FontAwesomeIcon icon={faInfo} color="white" width="3.5px" height="3.5px"></FontAwesomeIcon>
            </Flex>
          </Flex>
          <Text fontSize="12px" fontWeight="light">Pieces left: {pieces}</Text>
        </Flex>
      </Box>
    )
  }

  return null
}

export default App
