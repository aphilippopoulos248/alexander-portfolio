import { motion } from 'framer-motion';

const LogoAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="logo.png" alt="Logo" />
    </motion.div>
  );
};

export default LogoAnimation;
