import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO, CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
              {PERSONAL_INFO.availability}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              你好，我是
              <span className="text-blue-600 block mt-2">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                <Mail size={18} />
                联系我
              </a>
              <a href="#experience" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-all">
                查看项目经历
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                {CONTACT.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {CONTACT.location}
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex-1 relative"
          >
            {/* Profile Photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full bg-white border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                    <img 
                      src="/profile.png" 
                      alt={PERSONAL_INFO.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-6xl font-bold text-slate-200">WH</span>';
                      }}
                    />
                </div>
                
                {/* Floating stats cards */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 md:bottom-0 md:-left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                >
                  <p className="text-xs text-slate-400 uppercase font-semibold">专业排名</p>
                  <p className="text-2xl font-bold text-slate-800">1 / 131</p>
                </motion.div>

                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-0 -right-4 md:top-4 md:-right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                >
                   <p className="text-xs text-slate-400 uppercase font-semibold">平均绩点</p>
                   <p className="text-2xl font-bold text-blue-600">94/100</p>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;