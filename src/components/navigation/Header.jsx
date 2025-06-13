/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Mail } from 'lucide-react';
import { LogoSvg } from './Logo';

// Navigation Links Component
const Navigation = ({ isVisible, onLinkClick }) => {
    const navItems = [
        { path: '/', label: 'Home', icon: <Home size={20} /> },
        { path: '/prev', label: 'Previous Works', icon: <Briefcase size={20} /> },
        { path: '/contact', label: 'Contact', icon: <Mail size={20} /> }
    ];

    return (
        <div className={`
      lg:hidden fixed inset-0 z-40 transition-all duration-300 transform
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
            <div className="bg-black bg-opacity-90 backdrop-blur-sm h-full">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navItems.map((item, index) => (
                        <a
                            key={item.path}
                            href={item.path}
                            onClick={onLinkClick}
                            className="flex items-center space-x-3 text-white text-xl font-medium hover:text-blue-400 transition-colors duration-200 transform hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Menu Toggle Button
const MenuToggle = ({ isOpen, toggle }) => (
    <button
        onClick={toggle}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded-full bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-30 transition-all duration-200"
        aria-label="Toggle menu"
    >
        <div className="relative w-6 h-6">
            <Menu
                className={`absolute inset-0 text-white transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                size={24}
            />
            <X
                className={`absolute inset-0 text-white transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                size={24}
            />
        </div>
    </button>
);

// Main Header Component
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const containerRef = useRef(null);

    const toggleOpen = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Main Header */}
            <header
                className={`
          fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
          ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-inherit'}
        `}
                style={{
                    background: scrolled
                        ? 'rgba(0, 0, 0, 0.8)'
                        : 'linear-gradient(90deg, rgba(0,0,44,0.8), rgba(0,0,26,0.8), rgba(0,0,0,0.8))'
                }}
            >
                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <div className="w-[95%] md:w-[85%] mx-auto px-6">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
                                <a href="/" aria-label='Benferanmi logo image' className="flex items-center space-x-2 w-35">
                                    <LogoSvg />
                                </a>
                            </div>

                            {/* Desktop Navigation Links */}
                            <nav className="flex items-center space-x-8">
                                <a
                                    href="/"
                                    className="text-white hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                                >
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/prev"
                                    className="text-white hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                                >
                                    Previous Works
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="/contact"
                                    className="bg-gm hover:bg-gm font-bold text-slate-800 px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                                >
                                    Contact
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Mobile Logo */}
                <div className="lg:hidden flex items-center justify-between h-20 px-6">
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2 w-30">
                            <LogoSvg />
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div ref={containerRef} className="lg:hidden">
                <Navigation isVisible={isOpen} onLinkClick={closeMenu} />
                <MenuToggle isOpen={isOpen} toggle={toggleOpen} />
            </div>

            {/* Backdrop for mobile menu */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
                    onClick={closeMenu}
                />
            )}
        </>
    );
};

export default Header;