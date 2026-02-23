import React from 'react';
import { Bot, Sparkles, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AIInnovation: React.FC = () => {
  return (
    <section id="ai-tech" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>前沿技术应用</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">拥抱 AI，提升工作效能</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              我积极追踪并应用新兴的 AI 技术，以增强工作流自动化和数据分析能力，将技术转化为生产力。
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">自动化报告生成</h3>
                  <p className="text-slate-600 text-sm">
                    利用 <span className="text-blue-700 font-medium">Claude Code</span> 自动化生成每日及每周业务报告，大幅减少手工操作时间。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">AI 辅助 Web 开发</h3>
                  <p className="text-slate-600 text-sm">
                    借助 <span className="text-blue-700 font-medium">Google AI Studio</span> 协助构建数据可视化仪表盘和网页前端。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 border-b border-slate-100 pb-4 text-slate-900">近期技术实践</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-slate-700">追踪 AI 行业动态</span>
                <span className="text-xs font-mono bg-blue-100 px-2 py-1 rounded text-blue-700">Weekly</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-700">专利数据清洗 (1600万行)</span>
                <span className="text-xs font-mono bg-green-100 px-2 py-1 rounded text-green-700">Python</span>
              </li>
               <li className="flex items-center justify-between">
                <span className="text-slate-700">Excel 数据看板搭建</span>
                <span className="text-xs font-mono bg-yellow-100 px-2 py-1 rounded text-yellow-700">VBA/Formulas</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-slate-900 rounded-lg">
              <code className="text-xs text-green-400 font-mono block">
                &gt; import pandas as pd<br/>
                &gt; import google.generativeai as genai<br/>
                &gt; # Analyzing sentiment for snack market...<br/>
                &gt; sentiment_score = 0.8  <span className="text-slate-500"># 识别出正向趋势</span>
              </code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;