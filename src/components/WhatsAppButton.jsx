
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with your WhatsApp number
  const whatsappNumber = "08133252105";
  const message = encodeURIComponent("Hi, I'm interested in your website development service!");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquare className="h-5 w-5" />
      Chat with me now
    </motion.a>
  );
};

export default WhatsAppButton;