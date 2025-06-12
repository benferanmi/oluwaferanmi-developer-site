
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating, delay }) => {
    return (
        <motion.div
            className="neon-card rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            <div className="flex mb-4">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neonBlue fill-neonBlue" />
                ))}
            </div>
            <p className="text-gray-300 mb-4 italic">&quot;{content}&quot;</p>
            <div className="mt-auto">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-gray-400 text-sm">{role}</p>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;