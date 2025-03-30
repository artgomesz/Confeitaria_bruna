import { useCarousel } from "../Hooks/useCarousel";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Home-style/Carousel.css";


interface Imagem {
  src: string;
  titulo: string;
  descricao: string;
}

interface CarouselProps {
  imagens: Imagem[]; 
}

export function Carousel({ imagens = [] }: CarouselProps) {
  if (imagens.length === 0) {
    return <p>Não há imagens disponíveis.</p>;
  }

  const { imagemAtual, avancar, voltar, animando } = useCarousel(imagens.length, 5000);
  const anterior = (imagemAtual - 1 + imagens.length) % imagens.length;
  const proximo = (imagemAtual + 1) % imagens.length;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="carousel"
    >
      <button className="btn-esquerda" onClick={voltar} disabled={animando}>◀</button>

      <div className="card-container">
        {[anterior, imagemAtual, proximo].map((index, i) => (
          <div key={index} className={`card slide-${i} ${animando ? "animating" : ""}`}>
            <img src={imagens[index].src} alt={imagens[index].titulo} />
            <h3>{imagens[index].titulo}</h3>
            <p>{imagens[index].descricao}</p>
          </div>
        ))}
      </div>

      <button className="btn-direita" onClick={avancar} disabled={animando}>▶</button>
    </motion.div>
  );
}
