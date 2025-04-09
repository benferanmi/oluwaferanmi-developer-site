
/* eslint-disable react/prop-types */


import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FeatureCard = ({ title, description, delay }) => {
  return (
    <motion.div
      className="feature-card rounded-lg p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-3">
          <Check className="h-6 w-6 text-neonBlue" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;