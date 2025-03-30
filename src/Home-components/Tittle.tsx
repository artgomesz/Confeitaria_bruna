import { motion } from "framer-motion";

type TitleProps = {
  text: string;
  className?: string;
};

function Title({ text, className }: TitleProps) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.06 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default Title;
