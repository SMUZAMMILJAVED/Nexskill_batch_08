import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/NotFound"
import Nav from "./components/Nav"
const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>

  )
}

export default App