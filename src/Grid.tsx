// React
import { FC, memo } from "react"

// Chakra UI Components
import { Box, Flex, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Common Functions
import { notifyRendering } from "./ts/functions/commonFunctions"

// Type
import { hex } from "./ts/types/Color"
import { Grid } from "./ts/types/Tile"

interface Props {
  grid: Grid,
  handleTileClick: (x: number, y: number) => void,
  debug: boolean
}

const GridElement: FC<Props> = ({ grid, handleTileClick, debug }) => {
  if (debug) notifyRendering("Grid")

  return (
    <VStack spacing={0}>
      {
        grid.map((line, lineIdx) => {
          return (
            <HStack key={lineIdx} spacing={0}>
              {
                line.map((piece, pieceIdx) => {
                  return (
                    <Box key={`${lineIdx},${pieceIdx}`}>
                      {
                        lineIdx === 0 ? <Box w="16px" h="1px" bg="#e3e3e3" />
                          : grid[lineIdx - 1][pieceIdx].color === grid[lineIdx][pieceIdx].color ? <Box w="15px" h="1px" ml="1px" bg={hex[grid[lineIdx][pieceIdx].color]} />
                            : <Box w="16px" h="1px" bg="#e3e3e3" />
                      }
                      <Flex>
                        {
                          pieceIdx === 0 ? <Box w="1px" h="15px" bg="#e3e3e3" />
                            : grid[lineIdx][pieceIdx - 1].color === grid[lineIdx][pieceIdx].color ? <Box w="1px" h="15px" bg={hex[grid[lineIdx][pieceIdx].color]} />
                              : <Box w="1px" h="15px" bg="#e3e3e3" />
                        }
                        <Tile shape={piece.shape} color={hex[piece.color]} onClick={() => handleTileClick(lineIdx, pieceIdx)} debug={debug} />
                      </Flex>
                    </Box>
                  )
                })
              }
            </HStack>
          )
        })
      }
    </VStack>
  )
}

export default memo(GridElement)