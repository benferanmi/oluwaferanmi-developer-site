import { Facebook, Github, Linkedin, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import DownloadCvButton from '../reuseable/DownloadCvButton';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className=" relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Scroll to top button */}
      <div className="absolute bottom-5 right-5 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-orange-500 to-gl hover:from-orange-600 hover:to-gm p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
        </button>
      </div>

      <div className="relative w-[90%] lg:w-[80%] mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-12">

          {/* Left section - Brand & Copyright */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-gl bg-clip-text text-transparent mb-2">
                Benferanmi
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Crafting digital experiences with passion and precision.
                Let&apos;s build something amazing together.
              </p>
            </div>

            {/* Quick contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>hello@benferanmi.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+234 (0) 123 456 789</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Center section - CV Download */}
          <div className="text-center">
            <div className="inline-block">
              <h4 className="text-lg font-semibold mb-4 text-white">Ready to Connect?</h4>
             <DownloadCvButton />

              <p className="text-slate-400 text-sm mt-3">
                Get my latest resume and portfolio details
              </p>
            </div>
          </div>

          {/* Right section - Social Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white">Let&apos;s Connect</h4>
            <div className="flex justify-center lg:justify-end space-x-4">

              {/* Facebook */}
              <a
                href="#"
                className="group relative p-3 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="group relative p-3 bg-white/5 hover:bg-gray-600/20 border border-white/10 hover:border-gray-400/30 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-slate-300 group-hover:text-gray-300 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group relative p-3 bg-white/5 hover:bg-orange-600/20 border border-white/10 hover:border-orange-500/30 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-orange-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <p className="text-slate-400 text-sm mt-4">
              Follow my journey and latest projects
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 px-4">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-gl"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <span>© Copyright 2024. </span>
              <span className="text-orange-400 font-medium">Benferanmi</span>
              <span> - All Rights Reserved</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            <p>Built with ❤️ using React & Tailwind CSS by <a href='https://github.com/benferanmi'>Benferanmi</a></p>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-gl to-orange-500"></div>
    </footer>
  );
}