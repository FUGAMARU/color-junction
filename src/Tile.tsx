// Chakra UI Components
import { Box, Flex } from "@chakra-ui/react"

// Class
import { ColorJunction } from "./ts/ColorJunction"

// Type
import { Shape, Color } from "./ts/type"

interface Props {
  shape: Shape,
  color: string
}

const Tile = (props: Props) => {
  switch (props.shape) {
    case "blank":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.0px" w="14.0px" bg={props.color} borderRadius="5px" />
        </Flex>
      )
    case "square":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} />
        </Flex>
      )
    case "rounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.0px" w="14.0px" bg={props.color} borderRadius="5px" />
        </Flex>
      )
    case "topRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderTopRadius="5px" />
        </Flex>
      )
    case "bottomRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderBottomRadius="5px" />
        </Flex>
      )
    case "leftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderLeftRadius="5px" />
        </Flex>
      )
    case "rightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderRightRadius="5px" />
        </Flex>
      )
    case "topLeftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderTopLeftRadius="5px" />
        </Flex>
      )
    case "topRightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderTopRightRadius="5px" />
        </Flex>
      )
    case "bottomLeftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderBottomLeftRadius="5px" />
        </Flex>
      )
    case "bottomRightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={props.color} borderBottomRightRadius="5px" />
        </Flex>
      )
    default:
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.0px" w="14.0px" bg="black" borderRadius="5px" />
        </Flex>
      )
  }
}

export default Tile