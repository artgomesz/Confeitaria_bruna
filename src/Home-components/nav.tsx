import { Link } from 'react-router-dom';
import '../Home-style/nav.css'
import Logo from '../assets/bee6f6e9-6192-485a-8802-7b9be8b6c836-removebg-preview.png'
import { scrollToSection } from '../utilities/ScrollToSection';

function Nav(){

   

    return(
        <>
        <div className='Logo-container'>
        <div className='Logo-content'>
        <img className='Logo' src={Logo} alt="Confeitaria da Bruna" />
        </div>
        <div className='nav-container'>
            <ul>
                <li><Link to='/'>Ínicio</Link></li>
                <li><Link to='/Cardapio'>Cardápios</Link></li>
                <li><a href="#" onClick={() => scrollToSection("Bolos")}>Bolos</a></li>
                <li><a href="#" onClick={() => scrollToSection("doces")}>Doces</a></li>
                <li><a href="#" onClick={() => scrollToSection("Salgados")}>Salgados</a></li>
                <li><Link to= '/Sobre'>Sobre</Link></li>
            </ul>
        </div>
        </div>
        </>
    )
};

export default Nav;