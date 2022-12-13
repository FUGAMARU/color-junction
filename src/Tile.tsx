// Chakra UI Components
import { Box, Flex } from "@chakra-ui/react"

// Class
import { ColorJunction } from "./class/ColorJunction"

// Type
import { Shape, Color } from "./type"

interface Props {
  shape: Shape,
  color: Color
}

const Tile = (props: Props) => {
  switch (props.shape) {
    case "square":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} />
        </Flex>
      )
    case "rounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.0px" w="14.0px" bg={ColorJunction.hexConverter(props.color)} borderRadius="5px" />
        </Flex>
      )
    case "topRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderTopRadius="5px" />
        </Flex>
      )
    case "bottomRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderBottomRadius="5px" />
        </Flex>
      )
    case "leftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderLeftRadius="5px" />
        </Flex>
      )
    case "rightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderRightRadius="5px" />
        </Flex>
      )
    case "topLeftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderTopLeftRadius="5px" />
        </Flex>
      )
    case "topRightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderTopRightRadius="5px" />
        </Flex>
      )
    case "bottomLeftRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderBottomLeftRadius="5px" />
        </Flex>
      )
    case "bottomRightRounded":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} borderBottomRightRadius="5px" />
        </Flex>
      )
    case "alignedX":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="14.3px" w="15px" bg={ColorJunction.hexConverter(props.color)} />
        </Flex>
      )
    case "alignedY":
      return (
        <Flex w="15px" h="15px" justify="center" align="center" bg="#e3e3e3">
          <Box h="15px" w="14.3px" bg={ColorJunction.hexConverter(props.color)} />
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