import React from 'react';

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
  logoInitials: string;
}

export interface ProjectItem {
  title: string;
  company?: string;
  role?: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  metric?: {
    label: string;
    before: number;
    after: number;
    unit: string;
  };
  keyInsight?: string; // Added field for projects without metrics
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}