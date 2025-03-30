import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importação correta do hook


type TextProps = {
  text: string;
  className?: string;
};

function Text({ text, className }: TextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.0  
  });

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ x: "-100%",opacity:0 }} 
      animate={{ x: inView ? 0 : "-100%" ,opacity: 1}} 
      transition={{  type: "tween", duration: 1, ease: "easeOut"  }}

    >
      {text}
    </motion.p>
  );
}

export default Text;
