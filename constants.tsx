import React from 'react';
import { Database, TrendingUp, Code, Brain, LayoutTemplate } from 'lucide-react';
import { EducationItem, ProjectItem, SkillCategory, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "文海琪",
  title: "金融学 × 计算机科学 | 复合型背景",
  tagline: "华南理工大学金融学专业第一 (1/131)，保研至北大汇丰。擅长将 Python/SQL 等技术手段与金融思维深度融合，致力于以数据驱动商业决策与效率提升。",
  availability: "状态: 随时到岗",
};

export const CONTACT: ContactInfo = {
  email: "kay_wen13695168721@163.com",
  phone: "(+86) 13695168721",
  location: "广东省广州市番禺区",
};

export const EDUCATION: EducationItem[] = [
  {
    school: "北京大学汇丰商学院 (PHBS)",
    degree: "硕士学位 (拟录取)",
    period: "2026.09 - 2029.06",
    details: ["未来入学"],
    logoInitials: "PKU"
  },
  {
    school: "华南理工大学 (SCUT)",
    degree: "金融学学士 + 计算机辅修",
    period: "2022.09 - 2026.06",
    details: [
      "GPA: 94/100 (专业排名: 1/131 - Top 1%)",
      "英语水平: CET-6 (666分)",
      "核心课程: 统计学, 计量经济学, 量化金融, 公司金融, 数据结构, 人工智能, Python数据分析"
    ],
    logoInitials: "SCUT"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "米家智能鱼缸项目",
    company: "广发信德投资管理有限公司",
    role: "产品运营实习生",
    period: "2025.07 - 2026.02",
    description: "主导智能家居生态产品的市场调研与产品迭代，深入挖掘用户痛点。",
    achievements: [
      "通过交叉验证测算水族市场规模约 200亿人民币，年增长率达 10%。",
      "通过线下市场走访，识别用户核心痛点（存活率、喂食、清洁）。",
      "分析竞品（森森、米家），将产品定位为“入门新手的性价比之选”。",
      "通过持续迭代 C100/M200 型号，将投诉率从 15% 降至 8%，退货率降至 3%。"
    ],
    tags: ["市场调研", "产品运营", "数据分析"],
    metric: {
      label: "退货率降低",
      before: 15,
      after: 3,
      unit: "%"
    }
  },
  {
    title: "户外电视项目",
    company: "广发信德投资管理有限公司",
    role: "市场分析实习生",
    period: "2025.07 - 2026.02",
    description: "对高亮度户外显示解决方案进行深入的市场分析。",
    achievements: [
      "基于北美/欧洲住房数据，估算潜在市场规模达 100亿美元。",
      "识别出 'Outdoor' 是 Houzz 平台上的热门搜索趋势。",
      "对标 Samsung & SunBright；优化渠道策略（BestBuy, 独立站）。",
      "利用 Google Ads & SEO 优化，将独立站销售占比从 20% 提升至 50%。"
    ],
    tags: ["市场规模测算", "竞品分析", "渠道策略", "Google Ads"],
    metric: {
      label: "独立站销售占比",
      before: 20,
      after: 50,
      unit: "%"
    }
  },
  {
    title: "跨境电商行业深度报告",
    company: "天风证券",
    role: "行研实习生",
    period: "2025.03 - 2025.06",
    description: "撰写中国企业出海的综合性行业研究报告，深度复盘 Anker 与 Insta360 成功路径。",
    achievements: [
      "建立了“宏观-模式-行业-公司”的四维分析框架。",
      "梳理出从“产品出海”到“品牌出海”再到“平台出海”的行业演变逻辑。",
      "深入对比 DTC 模式与全托管平台模式的优劣势，重点分析了安克创新与影石创新的护城河。"
    ],
    tags: ["证券研究", "行业分析", "研报撰写"],
    keyInsight: "核心结论：单纯的流量红利已成过去，DTC 品牌化与高研发投入构建的产品力壁垒，才是中国企业出海实现高溢价的关键。"
  },
  {
    title: "散装零食市场分析",
    period: "2024.02 - 2024.06",
    description: "运用 Python 和 NLP 技术对零食市场进行的端到端数据挖掘项目。",
    achievements: [
      "抓取电商平台评论数据，利用 NLP 进行情感倾向分析（情感得分 0.8 正向）。",
      "应用 K-means 聚类算法识别出 3 类核心用户画像（价格敏感型、品质驱动型、尝鲜型）。",
      "构建多元逻辑回归模型，量化了各因素对用户满意度的影响权重。"
    ],
    tags: ["Python", "NLP", "机器学习", "K-Means", "网络爬虫"],
    keyInsight: "数据洞察：市场已步入存量整合期，消费者对“性价比”的关注度下降，转而更看重“健康化”与“情绪价值”标签。"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "数据分析",
    icon: <Database className="w-5 h-5" />,
    skills: ["Python (Pandas, NumPy)", "SQL", "Tableau", "Excel (Advanced)", "网络爬虫"]
  },
  {
    title: "AI & 技术",
    icon: <Brain className="w-5 h-5" />,
    skills: ["Google AI Studio", "Claude Code", "NLP", "机器学习算法", "生成式 AI 应用"]
  },
  {
    title: "金融 & 战略",
    icon: <TrendingUp className="w-5 h-5" />,
    skills: ["市场规模测算", "证券研究", "竞品分析", "量化金融", "计量经济学"]
  },
  {
    title: "工具 & 语言",
    icon: <Code className="w-5 h-5" />,
    skills: ["CET-6 (666分)", "Office 套件", "Wind 终端", "Markdown"]
  }
];