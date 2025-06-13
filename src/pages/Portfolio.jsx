import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Code,
  Paintbrush,
  Globe,
  Layout,
  SortAsc,
  Grid3X3,
  List,
  Calendar,
  Award,
  Eye,
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { bry, crudapp, delce, donation, everything, flywithus, forever, health, kikxbet, nadai, SaaS, santa, sledge, tele, videoTemplate, vipsport } from '../assets';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');
  // const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Complete portfolio array with all project types
  const allProjects = [
    {
      id: 1,
      imgUrl: kikxbet,
      siteLink: 'https://kikxbet.vercel.app/',
      siteName: 'KikX Betting Platform',
      siteDescription: 'Modern betting platform with real-time odds, secure payments, live chat support, and comprehensive user dashboard.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
      year: 2024,
      status: 'Live',
      complexity: 'Advanced',
      featured: true
    },
    {
      id: 2,
      imgUrl: vipsport,
      siteLink: 'https://vipsportbets.com/',
      siteName: 'VIP Sport Bets',
      siteDescription: 'Real-time sports betting platform with live odds integration, user authentication, payment processing, and analytics dashboard.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe'],
      year: 2024,
      status: 'Live',
      complexity: 'Advanced',
      featured: true
    },
    {
      id: 3,
      imgUrl: bry,
      siteLink: 'https://brycigars.com/',
      siteName: 'Bry Cigars Premium Store',
      siteDescription: 'Elegant ecommerce platform for premium cigars with custom product configurator, membership system, and inventory management.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Custom PHP', 'Stripe', 'ACF'],
      year: 2024,
      status: 'Live',
      complexity: 'Intermediate',
      featured: true
    },
    {
      id: 4,
      imgUrl: donation,
      siteLink: 'https://donation-website.vercel.app/',
      siteName: 'CharityFlow Donation Platform',
      siteDescription: 'Comprehensive donation platform with campaign management, donor tracking, and transparent fund allocation.',
      siteCategory: 'Frontend Development',
      type: 'frontend',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
      year: 2023,
      status: 'Live',
      complexity: 'Intermediate',
      featured: false
    },
    {
      id: 5,
      imgUrl: health,
      siteLink: 'https://www.fshealth.com/',
      siteName: 'FS Health Medical Portal',
      siteDescription: 'Modern healthcare website with appointment booking, patient portal, and telemedicine integration.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'Custom Theme', 'HIPAA Compliance', 'Booking System'],
      year: 2023,
      status: 'Live',
      complexity: 'Advanced',
      featured: false
    },
    {
      id: 6,
      imgUrl: delce,
      siteLink: 'https://delcerose24.com/',
      siteName: 'DelceRose Personal Brand',
      siteDescription: 'Personal branding website with integrated online store, blog platform, and social media integration.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Custom Design', 'SEO Optimization'],
      year: 2023,
      status: 'Live',
      complexity: 'Intermediate',
      featured: false
    },
    {
      id: 7,
      imgUrl: everything,
      siteLink: 'https://everythinglitterandglam.com/',
      siteName: 'Litter & Glam Fashion',
      siteDescription: 'High-converting fashion ecommerce with advanced filtering, wishlist functionality, and social commerce features.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Custom Theme', 'PWA', 'Social Login'],
      year: 2024,
      status: 'Live',
      complexity: 'Advanced',
      featured: true
    },
    {
      id: 8,
      imgUrl: sledge,
      siteLink: 'https://sledgelifecoaching.com/',
      siteName: 'Sledge Life Coaching',
      siteDescription: 'Professional coaching website with booking system, client portal, and integrated payment processing.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'Booking System', 'Client Portal', 'Payment Gateway'],
      year: 2023,
      status: 'Live',
      complexity: 'Intermediate',
      featured: false
    },
    {
      id: 9,
      imgUrl: nadai,
      siteLink: 'https://nadaiapparel.com/',
      siteName: 'Nadai Apparel Store',
      siteDescription: 'Modern fashion ecommerce with size guide integration, virtual try-on features, and mobile-first design.',
      siteCategory: 'WordPress Development',
      type: 'wordpress',
      tech: ['WordPress', 'WooCommerce', 'Mobile First', 'Size Guide API'],
      year: 2023,
      status: 'Live',
      complexity: 'Intermediate',
      featured: false
    },
    {
      id: 10,
      imgUrl: crudapp,
      siteLink: '#',
      siteName: 'Forever Admin Panel For Product Management',
      siteDescription: 'Comprehensive Admin panel for adding new project, updating existing products and updating tracking details of each product.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      year: 2024,
      status: 'Ended',
      complexity: 'Advanced',
      featured: false
    },
    {
      id: 11,
      imgUrl: santa,
      siteLink: '#',
      siteName: 'Children Ai Personalisation Website',
      siteDescription: 'A website where children can create personalised videos.',
      siteCategory: 'Frontend Development',
      type: 'frontend',
      tech: ['React.js', 'Tailwind CSS', 'React useContext'],
      year: 2025,
      status: 'Ended',
      complexity: 'Simple',
      featured: false
    },
    {
      id: 18,
      imgUrl: flywithus,
      siteLink: '#',
      siteName: 'Travel website',
      siteDescription: 'Sustainable travel website where user can view desintination details, flight details, flight time and many more.',
      siteCategory: 'Frontend Development',
      type: 'frontend',
      tech: ["Next.js", 'Tailwind CSS', "Redux",],
      year: 2024,
      status: 'Ended',
      complexity: 'Advanced',
      featured: false
    },
    {
      id: 12,
      imgUrl: tele,
      siteLink: '#',
      siteName: 'MediConnect Telemedicine',
      siteDescription: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'HIPAA Compliance'],
      year: 2024,
      status: 'In Progress',
      complexity: 'Advanced',
      featured: false
    },
    {
      id: 22,
      imgUrl: forever,
      siteLink: '#',
      siteName: 'Forever Ecommerce',
      siteDescription: 'An advanced e-commerce platform for clothing, offering seamless shopping, secure payments, and dynamic inventory management.',
      siteCategory: 'Full Stack Development',
      type: 'fullstack',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      year: 2024,
      status: 'Ended',
      complexity: 'Advanced',
      featured: false
    },
    {
      id: 25,
      imgUrl: SaaS,
      siteLink: '#',
      siteName: 'InsightFlow Dashboard',
      siteDescription: 'A modern front-end SaaS dashboard interface providing real-time analytics, user management, and performance monitoring.',
      siteCategory: 'Front-End Development',
      type: 'frontend',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Redux Toolkit'],
      year: 2024,
      status: 'Ended',
      complexity: 'Intermediate',
      featured: false
    },
    {
      id: 26,
      imgUrl: videoTemplate,
      siteLink: '#',
      siteName: 'Streamline Template',
      siteDescription: 'A responsive front-end template for video streaming platforms, featuring modern UI components, video grid layouts, and playback interfaces.',
      siteCategory: 'Front-End Development',
      type: 'frontend',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React Player', 'Framer Motion'],
      year: 2024,
      status: 'Completed',
      complexity: 'Intermediate',
      featured: false
    }



  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe, count: allProjects.length },
    { key: 'fullstack', label: 'Full Stack', icon: Code, count: allProjects.filter(p => p.type === 'fullstack').length },
    { key: 'wordpress', label: 'WordPress', icon: Paintbrush, count: allProjects.filter(p => p.type === 'wordpress').length },
    { key: 'frontend', label: 'Frontend', icon: Layout, count: allProjects.filter(p => p.type === 'frontend').length },
  ];

  const sortOptions = [
    { key: 'recent', label: 'Most Recent', icon: Calendar },
    { key: 'oldest', label: 'Oldest First', icon: Calendar },
    { key: 'featured', label: 'Featured First', icon: Award },
    { key: 'complexity', label: 'Complexity', icon: Layers }
  ];

  // Filter and sort logic
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = activeFilter === 'all'
      ? allProjects
      : allProjects.filter(project => project.type === activeFilter);

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.siteDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sorting
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => b.year - a.year || b.id - a.id);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.year - b.year || a.id - b.id);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'complexity':
        // eslint-disable-next-line no-case-declarations
        const complexityOrder = { 'Advanced': 3, 'Intermediate': 2, 'Basic': 1 };
        filtered.sort((a, b) => (complexityOrder[b.complexity] || 0) - (complexityOrder[a.complexity] || 0));
        break;
      default:
        break;
    }

    return filtered;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, searchTerm, sortBy]);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Advanced': return 'from-red-500 to-orange-500';
      case 'Intermediate': return 'from-yellow-500 to-amber-500';
      case 'Basic': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-green-500 to-emerald-500';
      case 'In Progress': return 'from-blue-500 to-cyan-500';
      case 'Completed': return 'from-purple-500 to-violet-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-inherit">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-6">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences across full-stack development, WordPress solutions, and modern frontend applications
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            >
              {filters.map((filter) => (
                <div key={filter.key} className="text-center">
                  <div className="text-3xl font-bold text-white">{filter.count}</div>
                  <div className="text-slate-400 text-sm">{filter.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none transition-all"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-slate-900/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white pr-10 focus:border-cyan-500/50 focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <SortAsc className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
              </div>

              {/* View Mode */}
              <div className="flex bg-slate-900/50 border border-slate-600/50 rounded-xl p-1">
                <button
                  aria-label="Grid View Mode"
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-300'}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  aria-label="List View Mode"
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-slate-300'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`
                    relative px-6 py-3 rounded-xl font-medium transition-all duration-300
                    flex items-center gap-2 backdrop-blur-sm border
                    ${activeFilter === filter.key
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={18} />
                  {filter.label}
                  <span className={`ml-1 px-2 py-1 text-xs rounded-full ${activeFilter === filter.key ? 'bg-cyan-500/30' : 'bg-slate-700/50'
                    }`}>
                    {filter.count}
                  </span>
                  {activeFilter === filter.key && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${searchTerm}-${sortBy}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`
                    relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                    backdrop-blur-sm border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500
                    ${viewMode === 'list' ? 'flex-1 flex' : ''}
                  `}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                    <img
                      src={project.imgUrl}
                      alt={project.siteName}
                      className={`object-cover transition-transform duration-700 group-hover:scale-110 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                        }`}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      {project.siteLink !== '#' && (
                        <motion.a
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium flex items-center gap-2 shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={16} />
                          View Live
                        </motion.a>
                      )}
                    </motion.div>

                    {/* Status & Complexity Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className={`px-2 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-xs font-medium rounded-full`}>
                        {project.status}
                      </span>
                      <span className={`px-2 py-1 bg-gradient-to-r ${getComplexityColor(project.complexity)} text-white text-xs font-medium rounded-full`}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.siteName}
                      </h3>
                      <span className="text-slate-400 text-sm font-medium">{project.year}</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                      {project.siteCategory}
                    </p>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {project.siteDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, viewMode === 'list' ? 6 : 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > (viewMode === 'list' ? 6 : 4) && (
                        <span className="px-3 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full">
                          +{project.tech.length - (viewMode === 'list' ? 6 : 4)} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    {project.siteLink !== '#' && (
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                      >
                        Visit Project
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredAndSortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;