/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;