// Custom Hooks
import { useColorJunction } from "./useColorJunction"

// Chakra UI Components
import { Box, Flex, Text, VStack, HStack, useDisclosure } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft, faInfo } from "@fortawesome/free-solid-svg-icons"

// Type
import { hex } from "./ts/types/Color"

const Link = (props: { url: string, children: string }) => <Box as="span" textDecoration="underline" _hover={{ color: "#cb94e3" }}><a href={props.url} target="_blank" rel="noopener">{props.children}</a></Box>

const App = () => {
  const height = 15
  const width = 15

  const { grid, pieces, gameState, handleTileClick, handleResetButtonClick } = useColorJunction({ height: height, width: width })
  const { isOpen: isInfoOpen, onOpen: openInfo, onClose: closeInfo } = useDisclosure()

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
          {gameState !== "Playing" && !!!isInfoOpen ?
            <Flex h="100%" w="100%" position="absolute" top="0" left="0" justify="center" align="center" bg="whiteAlpha.800">
              <Text fontSize="20px" fontWeight="regular" textAlign="center">{gameState}</Text>
            </Flex>
            : null
          }
          {isInfoOpen ?
            <Flex h="100%" w="100%" position="absolute" top="0" left="0" flexDirection="column" justify="center" align="center" textAlign="center" bg="whiteAlpha.800" onClick={closeInfo}>
              <Text fontSize="20px" fontWeight="semibold">Color Junction</Text>
              <Box fontSize="13px" lineHeight="18px">
                <Text>This game is played by erasing clumps of two or more pieces of the same color attached to each other, and the game is completed when all the pieces are finally erased.</Text>
                <Text my="5px">Using React, the mini-game "Color Junction" that was playable on <Link url="https://en.wikipedia.org/wiki/IGoogle">iGoogle</Link> which ended in 2013, was revived in 2022.</Text>
                <Text>Developer: <Link url="https://fugamaru.com/">FUGAMARU</Link></Text>
              </Box>
              <Box mt="3px" px="2px" fontSize="5px" _hover={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} cursor="pointer" onClick={closeInfo}>Click to Close</Box>
            </Flex>
            : null
          }
        </Box>
        <Flex h="20px" px="3px" justify="space-between" align="center" bg="#cccccc" borderTop="solid 1px #888888" onClick={() => { if (isInfoOpen) closeInfo() }}>
          <Flex align="center">
            <Flex h="14px" w="14px" mr="1.5px" justify="center" align="center" bg="#9e9e9e" borderRadius="50%" cursor="pointer" onClick={handleResetButtonClick} title="reset">
              <FontAwesomeIcon icon={faRotateLeft} color="white" width="10px" height="10px"></FontAwesomeIcon>
            </Flex>
            <Flex h="14px" w="14px" ml="1.5px" justify="center" align="center" bg="#9e9e9e" borderRadius="50%" cursor="pointer" onClick={openInfo} title="info">
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
