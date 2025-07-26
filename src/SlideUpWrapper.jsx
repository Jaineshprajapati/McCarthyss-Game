// SlideUpWrapper.jsx
import { motion } from "framer-motion";

const SlideUpWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier for extra smoothness
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpWrapper;
