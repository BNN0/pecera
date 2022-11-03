import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Login from "./Vistas/Auth"
import Home from "./Vistas/Home"

import Publicaciones from "./Vistas/Publicaciones"
<<<<<<< HEAD
=======
import Monitoreoo from "./Vistas/Monitoreo/Monitoreoo"
>>>>>>> 53d89984db4e15fdd3a6481ed339230ba2713447


function App() {
  return (
   <>
    <Router>
      <Routes>

        <Route path="/" element={<h1>CureFish</h1>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/monitoreoo" element={<Monitoreoo />} />
    

      </Routes>
     
    </Router>
    </>
  )
}

export default App