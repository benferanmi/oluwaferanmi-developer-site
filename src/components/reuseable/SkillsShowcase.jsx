/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const skillArray = [
  { id: 1, name: 'HTML', percentage: 100, category: 'frontend' },
  { id: 2, name: 'CSS', percentage: 100, category: 'frontend' },
  { id: 3, name: 'React (JavaScript)', percentage: 100, category: 'frontend' },
  { id: 4, name: 'Next.js (JavaScript)', percentage: 100, category: 'frontend' },
  { id: 5, name: 'Node.js (JavaScript)', percentage: 90, category: 'backend' },
  { id: 6, name: 'Express.js (JavaScript)', percentage: 90, category: 'backend' },
  { id: 7, name: 'GIT', percentage: 100, category: 'tools' },
  { id: 8, name: 'Php', percentage: 100, category: 'backend' },
  { id: 9, name: 'MySQLi', percentage: 100, category: 'database' },
  { id: 10, name: 'MongoDb', percentage: 90, category: 'database' },
  { id: 11, name: 'WordPress (CMS)', percentage: 100, category: 'cms' },
  { id: 12, name: 'Webflow', percentage: 100, category: 'cms' },
  { id: 16, name: 'Bubble.io', percentage: 100, category: 'cms' },
  { id: 13, name: 'GoDaddy', percentage: 100, category: 'tools' },
  { id: 14, name: 'Redux', percentage: 100, category: 'frontend' },
  { id: 15, name: 'Elementor Page Builder', percentage: 100, category: 'cms' },
];

// eslint-disable-next-line react/prop-types
const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsVisible(true), index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend':
      case 'backend':
        return <Code className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'cms':
        return <Globe className="w-5 h-5" />;
      case 'tools':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend':
        return 'from-cyan-400 to-blue-500';
      case 'backend':
        return 'from-emerald-400 to-teal-500';
      case 'database':
        return 'from-purple-400 to-pink-500';
      case 'cms':
        return 'from-orange-400 to-red-500';
      case 'tools':
        return 'from-yellow-400 to-orange-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 shadow-xl backdrop-blur-sm relative overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8"></div>

      {/* Skill header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(skill.category)} shadow-lg`}>
            {getCategoryIcon(skill.category)}
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
        <motion.span
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          animate={isVisible ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
        >
          {skill.percentage}%
        </motion.span>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden shadow-inner">
          <motion.div
            className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full shadow-lg relative`}
            initial={{ width: 0 }}
            animate={isVisible ? { width: `${skill.percentage}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 + 1 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Skill level indicator */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-slate-400 capitalize">{skill.category}</span>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${i < Math.floor(skill.percentage / 20)
                  ? `bg-gradient-to-r ${getCategoryColor(skill.category)}`
                  : 'bg-slate-600'
                }`}
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.8 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsShowcase() {
  return (
    <div className="min-h-screen bg-inherit" >
      {/* Header section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2">
              Technical Skills
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise across various technologies and frameworks
          </motion.p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Skills grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillArray.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 py-12"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">{skillArray.length}</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {Math.round(skillArray.reduce((acc, skill) => acc + skill.percentage, 0) / skillArray.length)}%
              </div>
              <div className="text-slate-300">Average Proficiency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">
                {skillArray.filter(skill => skill.percentage === 100).length}
              </div>
              <div className="text-slate-300">Mastered Skills</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}