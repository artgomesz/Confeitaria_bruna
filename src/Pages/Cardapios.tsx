import Title from "../Home-components/Tittle";
import Nav from "../Home-components/nav";



import '../Home-style/Cardapios.css'
import '../App.css'

import cardapio1 from '../assets/Cardapios/cardapio-bolo.jpg'
import cardapio2 from '../assets/Cardapios/Cardapio-doces.png'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Cardapio(){

    return(
        <>
        <div className="Body">
        <Nav />
        <div className='Cardapios'>
        <div className='cardapio-content'>
        <Title className='cardapio-title' text='Cardápios' />
        <div className='cardapios-img'>
        <img src={cardapio1} alt="Cardapio de bolos" />
        <img src={cardapio2} alt="Cardapio de doces e bolos" />
        </div>
        <a href="https://www.instagram.com/confeitaria_da_bruna_/">
        <button className="Button-cardapio">Peça já!</button>
        </a>
        </div>
      </div>
      </div>
      </>
    )
}

export default Cardapio