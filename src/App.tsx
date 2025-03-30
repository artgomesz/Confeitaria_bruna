import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cardapio from "./Pages/Cardapios";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cardapio"  element={<Cardapio/>} />
      </Routes>
    </Router>
  )
}

export default App