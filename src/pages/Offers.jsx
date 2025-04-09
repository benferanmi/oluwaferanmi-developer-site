import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import FadeInSection from '../components/FadeInSection.jsx';
import { ArrowDown } from 'lucide-react';

const Offers = () => {
  const features = [
    {
      title: "Professional Design",
      description: "Get a modern, responsive website that looks great on all devices and represents your business professionally.",
      delay: 0.2
    },
    {
      title: "Fast Turnaround",
      description: "Complete website delivered in just 5 days, so you can start growing your business online without delay.",
      delay: 0.3
    },
    {
      title: "SEO Optimization",
      description: "Basic SEO setup to help your business get found on Google and other search engines.",
      delay: 0.4
    },
    {
      title: "Mobile Responsive",
      description: "Your website will look and function perfectly on smartphones, tablets, and desktops.",
      delay: 0.5
    },
    {
      title: "Content Integration",
      description: "I'll integrate your text, images, and branding elements for a cohesive look and feel.",
      delay: 0.6
    },
    {
      title: "Handover Support",
      description: "Complete training on how to update and maintain your website after it goes live.",
      delay: 0.7
    }
  ];

  const testimonials = [
    {
      name: "Daniel Adeyemi",
      role: "Fashion Store Owner",
      content: "My online store looks amazing! The development process was smooth and the website was delivered ahead of schedule. Highly recommended!",
      rating: 5,
      delay: 0.3
    },
    {
      name: "Funmi Olatunji",
      role: "Real Estate Agency",
      content: "The website has significantly increased our leads. The design is modern and professional, exactly what our business needed.",
      rating: 5,
      delay: 0.4
    },
    {
      name: "Emmanuel Chibuike",
      role: "Restaurant Owner",
      content: "Our customers love the new website. The mobile experience is flawless and we've seen an increase in online orders since the launch.",
      rating: 4,
      delay: 0.5
    }
  ];

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 neon-text p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Get a modern business website in 5 days
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <span className="text-3xl md:text-5xl font-bold text-neonBlue animate-pulse-glow inline-block rounded-lg px-4 py-2">
              ₦30,000 only
            </span>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Elevate your business with a professional online presence that converts visitors into customers.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <WhatsAppButton />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
          onClick={scrollToFeatures}
        >
          <ArrowDown className="h-8 w-8 text-neonBlue" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text">What You &apos; ll Get</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text">Simple 3-Step Process</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0.3}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-neonBlue/20 flex items-center justify-center rounded-full mx-auto mb-6 border border-neonBlue">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Consultation</h3>
                <p className="text-gray-300">Quick call to understand your business needs and goals for the website.</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-neonBlue/20 flex items-center justify-center rounded-full mx-auto mb-6 border border-neonBlue">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Development</h3>
                <p className="text-gray-300">I&apos;ll create your website with your branding and content integration.</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.5}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-neonBlue/20 flex items-center justify-center rounded-full mx-auto mb-6 border border-neonBlue">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Launch</h3>
                <p className="text-gray-300">Your website goes live with full support to ensure everything works perfectly.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text">What Clients Say</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 neon-card my-20 max-w-7xl mx-auto rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">Ready to grow your business online?</h2>
            <p className="text-xl text-gray-300 mb-10">Get your professional website in just 5 days. Limited slots available each month!</p>
            
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Offers;