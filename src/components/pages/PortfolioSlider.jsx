import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Code, Palette } from 'lucide-react';
import { bry, everything, kikxbet, vipsport } from '../../assets';

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Featured projects for homepage slider
  const featuredProjects = [
    {
      id: 12,
      imgUrl: kikxbet,
      siteLink: 'https://kikxbet.vercel.app/',
      siteName: 'Betting Website',
      siteDescription: 'A modern betting platform built with Next.js featuring real-time odds, secure payments, and responsive design.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['Next.js', 'React', 'TypeScript', 'Node.js'],
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 5,
      imgUrl: vipsport,
      siteLink: 'https://vipsportbets.com/',
      siteName: 'Live Sport Odd Website',
      siteDescription: 'Real-time sports betting platform with live odds integration, user authentication, and payment processing.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      id: 7,
      imgUrl: bry,
      siteLink: 'https://brycigars.com/',
      siteName: 'Premium Cigars Ecommerce',
      siteDescription: 'Elegant WordPress ecommerce site for premium cigars with custom product configurator and membership system.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Custom PHP', 'Stripe'],
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      id: 6,
      imgUrl: everything,
      siteLink: 'https://everythinglitterandglam.com/',
      siteName: 'Fashion Ecommerce Platform',
      siteDescription: 'High-converting fashion ecommerce website with advanced filtering, wishlist, and social commerce features.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Custom Theme', 'PWA'],
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 100000);

    return () => clearInterval(interval);
  }, [isAutoPlay, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="relative w-full my-5 py-5 min-h-[800px] h-fit overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.05)_50%,transparent_65%)]" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 md:px-16">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col justify-center space-y-6 lg:pr-8 "
            >
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {currentProject.type === 'fullstack' ? <Code size={20} /> : <Palette size={20} />}
                <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${currentProject.gradient} text-white shadow-lg`}>
                  {currentProject.siteCategory}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                {currentProject.siteName}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-slate-300 text-lg leading-relaxed max-w-lg"
              >
                {currentProject.siteDescription}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {currentProject.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-slate-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="pt-4"
              >
                <motion.a
                  href={currentProject.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${currentProject.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={20} />
                  View Live Project
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                {/* Image Container with 3D Effect */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl transform perspective-1000"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={currentProject.imgUrl}
                    alt={currentProject.siteName}
                    className="w-full max-w-lg h-auto object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${currentProject.gradient} opacity-20`} />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${currentProject.gradient} rounded-2xl opacity-80 blur-sm`}
                />
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${currentProject.gradient} rounded-full opacity-60 blur-sm`}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 py-10">
        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-full hover:bg-slate-700/50 transition-all duration-300"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? `bg-gradient-to-r ${currentProject.gradient} scale-125`
                : 'bg-slate-600 hover:bg-slate-500'
                }`}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white rounded-full hover:bg-slate-700/50 transition-all duration-300"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800/50">
        <motion.div
          className={`h-full bg-gradient-to-r ${currentProject.gradient}`}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentIndex}
        />
      </div>
    </div>
  );
};

export default PortfolioSlider;