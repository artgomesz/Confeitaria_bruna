import '../Home-style/Home.css'
import '../App.css'

//Bolos
import Bolo1 from '../assets/Bolos/Bolo.jpg'
import Bolo2  from '../assets/Bolos/bolo2.jpg'
import Bolo3 from '../assets/Bolos/Bolo3.jpg'

//doces
import coco from '../assets/doces/coco.jpg'
import moca from '../assets/doces/leite-moca.jpg'
import Nutela  from '../assets/doces/Nuttela.jpg'
import Oreo from '../assets/doces/Oreo.jpg'

//salgados
import Salgado1 from '../assets/Salgados/Salgado1.jpg'
import Salgado2  from '../assets/Salgados/salgado2.jpg'
import Salgado3  from '../assets/Salgados/salgado3.jpg'




const imagensBolo=[
  {src: Bolo1, titulo: "Bolo de limão", descricao: "Delicioso bolo de limão."},
  {src: Bolo2, titulo:  'Bolo de morango', descricao: "Camadas de morango e creme."},
  {src: Bolo3, titulo: 'Bolo de aniversário ', descricao: 'Maravilhoso bolo de aniversário.'}
]

const imagensDoces=[
  {src: coco, titulo: 'Doce de coco', descricao: 'Bolo de coco delicioso.'},
  {src: Nutela, titulo: 'doce de nuttela', descricao: 'Doce cremoso de nuttela.'},
  {src: Oreo, titulo: 'doce de oreo', descricao: 'Doce de oreo gourmet.'},
  {src: moca, titulo: 'Doce de leite moça', descricao: 'Doce de leite moça gourmet.'}

]

const imagensSalgados=[
  {src: Salgado1, titulo: 'Bolinha de  queijo ', descricao: 'Bolinha de queijo cremosa.'},
  {src: Salgado2, titulo: 'Risole',descricao: 'Risole de presunto e queijo'},
  {src: Salgado3, titulo: 'Coxinha',descricao:'Coxinha de frango deliciosa.'}
]

import Nav from '../Home-components/nav'
import Title from '../Home-components/Tittle'
import Text from '../Home-components/text'
import AnimatedButton from '../Home-components/AnimatedButton'

import { Carousel } from '../Home-components/Carousel'



function Home() {
  return (
    <>
    <div className='Body'>
    <div className='Home-container'>
    <header>
      <Nav />
    </header>

    <div className='Home-content'>
      <div className='animated-text'>
      <Title text='Mundo de sabores que deixarão seus momentos inesquecíveis.'/>
      <AnimatedButton />
      </div>

    </div>  

    
    <section id='Bolos' className='cakes-container'>
        <div className='cake-txt'>
        <Text className='h1' text='Bolos' />
        <Text className = 'txt' text='Bolos feitos a  medida, assim fazendo com que o mesmo tenha a cara deste momento ou celebração especial.' />
        </div>
        <Carousel imagens={imagensBolo}/>
        </section>

        
      </div>

      <section id ='doces'>
        <div className='doces-content'>
        <Carousel imagens={imagensDoces}/>
        <div className='txt-container'>
        <Text className='doce-txt' text='Doces'/>
        <Text  className='txt-doce' text='Doces gourmets e doces tradicionais,um mais gostoso que o outro!'/>
        </div>
        </div>
      </section>

      <section className='salgados-container' id ='Salgados'>
        <div className='doces-content'>
          
        <div className='txt-container'>
        <Text className='salgado-txt' text='Salgado'/>
        <Text  className='txt-salgado' text='Salgados como coxinhas,kibe,bolinha de queijo e risole,monte a sua propria caixa de salgados!'/>
        </div>
        <Carousel imagens={imagensSalgados}/>
        </div>
      </section>

      <section className='Sobre' id='Sobre' >
        <div className='sobre-content'>
          <Title className='Sobre-title' text='Sobre'/>
          <h1 className='Sobre-txt'>Bruna é uma confeiteira com mais de 10 anos no mercado de confeitaria,experiência com confecção de bolos,kit festas,doces gourmets e tradicionais,deixando momentos especiais com o melhor sabor!</h1>
        </div>
      </section>
   
     
   
    </div>
    </>
  )
}

export default Home