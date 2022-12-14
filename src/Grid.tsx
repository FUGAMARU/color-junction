// React
import { FC, memo } from "react"

// Chakra UI Components
import { Box, Flex, VStack, HStack } from "@chakra-ui/react"

// Custom Components
import Tile from "./Tile"

// Type
import { hex } from "./ts/types/Color"
import { Grid } from "./ts/types/Tile"

interface Props {
  grid: Grid,
  handleTileClick: (x: number, y: number) => void
}

const GridElement: FC<Props> = ({ grid, handleTileClick }) => {
  console.log("%cGrid.tsx", "color:white; border:solid 1px #0188d1; padding:1px 4px; border-radius:4px;", "Rendered")

  return (
    <VStack spacing={0}>
      {
        grid.map((line, lineIdx) => {
          return (
            <HStack key={lineIdx} spacing={0}>
              {
                line.map((piece, pieceIdx) => {
                  console.log("Grid Rendering...")
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
                        <Tile shape={piece.shape} color={hex[piece.color]} onClick={() => handleTileClick(lineIdx, pieceIdx)} />
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