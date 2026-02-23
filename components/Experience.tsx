import React from 'react';
import { Briefcase, Lightbulb } from 'lucide-react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MetricChart = ({ before, after, label, unit }: { before: number, after: number, label: string, unit: string }) => {
  const data = [
    { name: '初始', value: before },
    { name: '结果', value: after },
  ];
  
  // Determine improvement direction for coloring
  // Context aware: If label is "退货率" (Return Rate), decrease is good. If "销量" (Sales), increase is good.
  const isReturnRate = label.includes('退货') || label.includes('投诉') || label.toLowerCase().includes('return');
  
  const green = '#22c55e';
  const gray = '#94a3b8';

  return (
    <div className="h-40 w-full mt-4 bg-white p-2 rounded-lg border border-slate-100">
      <p className="text-xs text-center text-slate-500 font-medium mb-2">{label}</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ borderRadius: '8px', fontSize: '12px' }}
            formatter={(value: number) => [`${value}${unit}`, label]}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 1 ? (isReturnRate && after < before ? green : (!isReturnRate && after > before ? green : gray)) : gray} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">项目经历</h2>
          <p className="mt-4 text-lg text-slate-600">数据驱动策略，创造商业价值</p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all"
            >
              <div className="md:flex">
                <div className="p-8 md:w-2/3">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {project.role || '项目负责人'}
                    </span>
                    <span className="text-sm text-slate-500">{project.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  {project.company && <p className="text-slate-600 font-medium mb-4 flex items-center gap-2"><Briefcase size={16}/> {project.company}</p>}
                  
                  <p className="text-slate-600 mb-6 italic">{project.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {project.achievements.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-3"></div>
                        <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: Metrics Visualization or Key Insight */}
                <div className="bg-slate-50 md:w-1/3 p-8 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-center">
                  {project.metric ? (
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">量化成果</h4>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-green-600">
                           {project.metric.after > project.metric.before && !project.metric.label.includes('退货') ? '+' : ''}
                           {Math.abs(project.metric.after - project.metric.before)}
                           {project.metric.unit}
                        </span>
                        <span className="text-sm text-slate-500">提升 / 优化</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-4">基于数据的业绩改善</p>
                      <MetricChart 
                        before={project.metric.before} 
                        after={project.metric.after} 
                        label={project.metric.label}
                        unit={project.metric.unit}
                      />
                    </div>
                  ) : project.keyInsight ? (
                     <div className="h-full flex flex-col justify-center">
                        <div className="mb-4 text-blue-600">
                           <Lightbulb size={32} strokeWidth={1.5} />
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-3 text-lg">分析结论</h4>
                        <div className="relative">
                            <span className="absolute -top-4 -left-2 text-4xl text-blue-200 font-serif">“</span>
                            <p className="text-slate-600 text-sm leading-relaxed italic pl-4 border-l-2 border-blue-200">
                                {project.keyInsight.replace('核心结论：', '').replace('数据洞察：', '')}
                            </p>
                            <span className="absolute -bottom-4 right-0 text-4xl text-blue-200 font-serif">”</span>
                        </div>
                     </div>
                  ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center opacity-60">
                        <Briefcase className="w-12 h-12 text-slate-300 mb-3" />
                        <p className="text-sm text-slate-400">定性研究与分析</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;