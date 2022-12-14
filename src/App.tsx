// Custom Hooks
import { useColorJunction } from "./useColorJunction"

// Chakra UI Components
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react"

// Custom Components
import Grid from "./Grid"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRotateLeft, faInfo } from "@fortawesome/free-solid-svg-icons"

const Link = (props: { url: string, children: string }) => <Box as="span" textDecoration="underline" _hover={{ color: "#cb94e3" }}><a href={props.url} target="_blank" rel="noopener">{props.children}</a></Box>

const App = () => {
  console.log("%cApp.tsx", "color:white; border:solid 1px #0188d1; padding:1px 4px; border-radius:4px;", "Rendered")

  const height = 15
  const width = 15

  const { grid, gameState, piecesLeft, handleTileClick, handleResetButtonClick } = useColorJunction({ height: height, width: width })
  const { isOpen: isInfoOpen, onOpen: openInfo, onClose: closeInfo } = useDisclosure()

  if (grid.flat().length === height * width) {
    return (
      <Box w="fit-content">
        <Box pt="1.5px" pb="2.5px" pl="1.5px" pr="2.5px" position="relative" bg="#e3e3e3">
          <Grid grid={grid} handleTileClick={handleTileClick} />
          {
            gameState !== "Playing" && !!!isInfoOpen ?
              <Flex h="100%" w="100%" position="absolute" top="0" left="0" justify="center" align="center" bg="whiteAlpha.800">
                <Text fontSize="20px" fontWeight="regular" textAlign="center">{gameState}</Text>
              </Flex>
              : null
          }
          {
            isInfoOpen ?
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
          <Text fontSize="12px" fontWeight="light">Pieces left: {piecesLeft}</Text>
        </Flex>
      </Box>
    )
  }

  return null
}

export default App
