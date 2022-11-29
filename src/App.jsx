import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import  {Contact}  from "./pages/Contact"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

import "./estilos.css"
import TaskItem from "./components/Task"
// import { Suspense } from "react"


function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />          
        </Routes>
      </Container>


    </ShoppingCartProvider>
  )
}

export default App
