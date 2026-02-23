import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">教育背景</h2>
          <p className="mt-4 text-lg text-slate-600">夯实金融与技术双重基础，追求卓越学术表现</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <span className="text-sm font-semibold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
                  {edu.period}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.school}</h3>
              <p className="text-blue-600 font-medium mb-4">{edu.degree}</p>
              
              <ul className="space-y-3">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-slate-600 text-sm">
                    <span className="mr-2 mt-1 text-blue-400">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;