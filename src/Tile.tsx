// Chakra UI Components
import { Box } from "@chakra-ui/react"

// Type
import { Shape } from "./ts/type"

interface Props {
  shape: Shape,
  color: string
}

const Tile = (props: Props) => {
  switch (props.shape) {
    case "blank":
      return (
        <Box h="15.0px" w="15.0px" bg="black" />
      )
    case "square":
      return (
        <Box h="15px" w="15px" bg={props.color} />
      )
    case "rounded":
      return (
        <Box h="15.0px" w="15.0px" bg={props.color} borderRadius="5px" />
      )
    case "topRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopRadius="5px" />
      )
    case "bottomRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomRadius="5px" />
      )
    case "leftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderLeftRadius="5px" />
      )
    case "rightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderRightRadius="5px" />
      )
    case "topLeftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopLeftRadius="5px" />
      )
    case "topRightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopRightRadius="5px" />
      )
    case "bottomLeftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomLeftRadius="5px" />
      )
    case "bottomRightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomRightRadius="5px" />
      )
    default:
      return (
        <Box h="15.0px" w="15.0px" bg="black" borderRadius="5px" />
      )
  }
}

export default Tile