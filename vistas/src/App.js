import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Login from "./Vistas/Auth"
import Home from "./Vistas/Home"
import Monitoreo from "./Vistas/Monitoreo_Conf"
import Publicaciones from "./Vistas/Publicaciones"
import ResponsiveDrawer from "./Vistas/Monitoreo/Temp"


function App() {
  return (
   <>
    <Router>
      <Routes>

        <Route path="/" element={<h1>CureFish</h1>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/monitoreo" element={<Monitoreo />} />
        <Route path="/publicaciones" element={<Publicaciones />} />
        <Route path="/barra" element={<ResponsiveDrawer />} />
    

      </Routes>
     
    </Router>
    </>
  )
}

export default App