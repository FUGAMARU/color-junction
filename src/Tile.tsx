// Chakra UI Components
import { Box } from "@chakra-ui/react"

// Type
import { Shape } from "./ts/types/Shape"

// Common Functions
import { notifyRendering } from "./ts/functions/commonFunctions"

interface Props {
  shape: Shape,
  color: string,
  onClick?: VoidFunction,
  debug: boolean
}

const Tile = (props: Props) => {
  if (props.debug) notifyRendering("Tile")

  switch (props.shape) {
    case "blank":
      return (
        <Box h="15.0px" w="15.0px" bg="#e3e3e3" />
      )
    case "square":
      return (
        <Box h="15px" w="15px" bg={props.color} onClick={props.onClick} />
      )
    case "rounded":
      return (
        <Box h="15.0px" w="15.0px" bg={props.color} borderRadius="5px" />
      )
    case "topRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopRadius="5px" onClick={props.onClick} />
      )
    case "bottomRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomRadius="5px" onClick={props.onClick} />
      )
    case "leftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderLeftRadius="5px" onClick={props.onClick} />
      )
    case "rightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderRightRadius="5px" onClick={props.onClick} />
      )
    case "topLeftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopLeftRadius="5px" onClick={props.onClick} />
      )
    case "topRightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderTopRightRadius="5px" onClick={props.onClick} />
      )
    case "bottomLeftRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomLeftRadius="5px" onClick={props.onClick} />
      )
    case "bottomRightRounded":
      return (
        <Box h="15px" w="15px" bg={props.color} borderBottomRightRadius="5px" onClick={props.onClick} />
      )
    default:
      return (
        <Box h="15.0px" w="15.0px" bg="black" borderRadius="5px" />
      )
  }
}

export default Tile