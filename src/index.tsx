import ReactDOM from "react-dom/client"

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)