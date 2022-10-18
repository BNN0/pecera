import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Login from "./Vistas/Auth"
import NavScrollExample from "./Vistas/Home"



function App() {
  return (
   <>
    <Router>
      <Routes>

        <Route path="/" element={<h1>CureFish</h1>}/>
        <Route path="/home" element={<NavScrollExample />} />
        <Route path="/login" element={<Login />} />


      </Routes>
     
    </Router>
    </>
  )
}

export default App