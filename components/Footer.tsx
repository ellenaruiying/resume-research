import React from 'react';
import { CONTACT } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">建立联系</h2>
            <p className="text-slate-400">寻求金融、数据分析及战略方向的职业机会。</p>
          </div>
          <div className="flex md:justify-end gap-4">
            <a href={`mailto:${CONTACT.email}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              发送邮件
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="font-semibold text-white">联系方式</h3>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              <span>{CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              <span>{CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-500" />
              <span>{CONTACT.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">快速导航</h3>
            <div className="flex flex-col space-y-2">
                <a href="#hero" className="hover:text-blue-400 transition-colors">个人简介</a>
                <a href="#experience" className="hover:text-blue-400 transition-colors">项目经验</a>
                <a href="#education" className="hover:text-blue-400 transition-colors">教育背景</a>
            </div>
          </div>
          
           <div className="space-y-4">
            <h3 className="font-semibold text-white">社交媒体</h3>
             {/* Note: Resume didn't have Linkedin/Github, adding placeholders */}
            <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"><Github size={20} /></a>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              © {new Date().getFullYear()} Haiqi Wen. Built with React & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;