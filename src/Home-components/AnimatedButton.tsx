import { motion } from "framer-motion";
import { scrollToSection } from "../utilities/ScrollToSection";


function AnimatedButton(){
  const handleClick = () => {
  scrollToSection("Bolos"); 
  };
  
    return(
        <motion.button
      onClick={handleClick}
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ duration: 5 }}  
      whileHover={{ scale: 1.1 }}  
      whileTap={{ scale: 0.95 }}  
    
    >Explorar</motion.button>
    )
}

export default AnimatedButton