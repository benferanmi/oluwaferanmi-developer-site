import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, FileText, MessageSquare, Sparkles } from 'lucide-react';
import { contactImg } from '../../assets';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';



export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [state, handleSubmit] = useForm("xpwrdnka");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });


  const validateBeforeSubmit = (e) => {
    if (!name || !email || !subject || !details) {
      e.preventDefault(); // IMPORTANT: Stop default submission
      toast.error("All fields are required");
    }
  };


  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 py-20 px-4" style={{ backgroundColor: '#1e293b' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image with Effects */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 blur-2xl"
              />

              {/* Image placeholder with gradient overlay */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative">
                  {/* Placeholder for actual image */}
                  <img src={contactImg} className='w-full h-full' alt='Opafunco Benjamin Contact Us Image' />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-slate-300 text-lg font-medium">Project Visualization</p>
                      <p className="text-slate-400 text-sm mt-2">Your ideas come to life</p>
                    </div>
                  </div>

                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-blue-500/20"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent h-2"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Glass effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-transparent" />
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-4 top-1/4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100+</div>
                  <div className="text-sm text-slate-300">Projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -left-4 bottom-1/4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 border border-slate-700 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-slate-300">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative"
          >
            {/* Header */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4"
              >
                Have Any Project In Mind
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100px' } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-slate-300 text-lg mt-4"
              >
                Let&apos;s bring your ideas to life. Share your project details and I&apos;ll get back to you within 24 hours.
              </motion.p>
            </div>


            {state.succeeded ? <div className='text-xl text-white px-4 p-2 block text-center relative w-full'>Thanks, Your response have been received, We will get in touch with you as soon as possible.
              <Sparkles /> </div> : <motion.form
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                onSubmit={(e) => { validateBeforeSubmit(e); handleSubmit(e); }}
                className="space-y-6"
              >
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative group"
              >
                <label className="block text-slate-300 text-sm font-medium mb-2 group-focus-within:text-cyan-400 transition-colors">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id='name'
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/10 group-focus-within:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative group"
              >
                <label className="block text-slate-300 text-sm font-medium mb-2 group-focus-within:text-cyan-400 transition-colors">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  id='email'
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/10 group-focus-within:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative group"
              >
                <label className="block text-slate-300 text-sm font-medium mb-2 group-focus-within:text-cyan-400 transition-colors">
                  <FileText className="inline w-4 h-4 mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id='subject'
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Project subject or title"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/10 group-focus-within:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative group"
              >
                <label className="block text-slate-300 text-sm font-medium mb-2 group-focus-within:text-cyan-400 transition-colors">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Project Details
                </label>
                <textarea
                  name="details"
                  id='details'
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Describe your project requirements, goals, timeline, and any specific features you need..."
                />
                <ValidationError
                  prefix="Details"
                  field="details"
                  errors={state.errors}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-focus-within:from-cyan-400/10 group-focus-within:to-blue-500/10 transition-all duration-300 pointer-events-none" />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gl to-gm text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:from-gr hover:to-gm transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.button>
            </motion.form>}

            {/* Form */}


            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-400 text-sm">
                Prefer email? Reach out directly at{' '}
                <a href="mailto:benferanmiopafunso@email.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  benferanmiopafunso@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}