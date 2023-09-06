
import { GlobalStyle } from "./styles/global"

import Router from "./Router"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
