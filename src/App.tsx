import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cardapio from "./Pages/Cardapios";
import Sobre from './Pages/Sobre'

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cardapio"  element={<Cardapio/>} />
        <Route  path="/Sobre" element={<Sobre/>}/>
      </Routes>
    </Router>
  )
}

export default App