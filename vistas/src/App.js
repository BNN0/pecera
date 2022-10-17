import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Login from "./Vistas/Auth"
import NavScrollExample from "./Vistas/Home"


function App() {
  return (
   <>
    <Router>
      <Routes>

        <Route path="./" />
        <Route path="./Home" element={<NavScrollExample />} />
        <Route path="./Auth" element={<Login />} />
      </Routes>
     
    </Router>
    </>
  )
}

export default App