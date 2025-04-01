import '../App.css'
import Title from '../Home-components/Tittle'
import '../Home-style/Sobre.css'
import Nav from '../Home-components/nav'
import Text from '../Home-components/text'

function Sobre(){
    return(
        <>
        <div className='Body'>

        <header>
            <Nav/>
        </header>

        <section className='Sobre' id='Sobre' >
        <div className='sobre-content'>
          <Title className='Sobre-title' text='Sobre'/>
          <Text className='Sobre-txt' text='Bruna é uma confeiteira com mais de 10 anos no mercado de confeitaria,experiência com confecção de bolos,kit festas,doces gourmets e tradicionais,deixando momentos especiais com o melhor sabor!'/>
        </div>
      </section>
      </div>
        </>
    )
}

export default Sobre