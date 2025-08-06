// src/data/resume-data.tsx
import { Briefcase, GraduationCap, Lightbulb, Award, User } from "lucide-react";
import React from "react";

export const sidebarNavItems = [
    { title: "About Me", href: "/resume", icon: <User className="h-4 w-4" /> },
    {
      title: "Experience",
      href: "/resume/experience",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      title: "Skills",
      href: "/resume/skills",
      icon: <Lightbulb className="h-4 w-4" />,
    },
    {
      title: "Education",
      href: "/resume/education",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      title: "Certifications",
      href: "/resume/certifications",
      icon: <Award className="h-4 w-4" />,
    },
  ];
  
export const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Google",
    },
    {
      title: "Google Project Management",
      issuer: "Google",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
    },
     {
      title: "Programming Essentials in Python",
      issuer: "Cisco",
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco",
    },
    {
      title: "SQL Basic",
      issuer: "HackerRank",
    },
    {
      title: "Python Basic",
      issuer: "HackerRank",
    },
  ];

export const education = [
    {
      degree: "B.TECH IN CSE",
      institution: "ALIET, JNTUK",
      period: "2021 - 2025",
      description: "CGPA: 7.0/10.0",
    },
    {
      degree: "Intermediate",
      institution: "Sri Sarada Educational Institutions",
      period: "2020 - 2021",
      description: "Percentage: 70%",
    },
    {
      degree: "Secondary School",
      institution: "St. John's EM High School",
      period: "2019",
      description: "CGPA: 9.2/10.0",
    },
  ];

export const experiences = [
    {
      role: "Data Science Intern",
      company: "SKILLDZIRE",
      period: "Vijayawada",
      description: "Learning data science fundamentals, Python basics, data structures, Pandas, NumPy, and machine learning concepts. Applying knowledge through hands-on exercises and practical implementations.",
    },
    {
      role: "Full Stack Development Intern",
      company: "DATA VALLEY.AI",
      period: "Vijayawada",
      description: "Gained hands-on experience in full stack using Python frameworks. Developed web apps with focus on both frontend and backend technologies. Collaborated with development teams on real-world projects and implementations.",
    },
    {
      role: "Python Full Stack Intern",
      company: "BRAINOVISION SOLUTIONS PVT LTD.",
      period: "Vijayawada",
      description: "Specialized in Python full stack development with emphasis on web application architecture. Implemented backend solutions using Python frameworks and database integration. Participated in code reviews and agile development methodologies.",
    },
    {
      role: "Web App Penetration Testing Intern",
      company: "INDIAN SERVERS PVT LTD.",
      period: "Vijayawada",
      description: "Conducted security assessments and vulnerability testing on web applications. Learned ethical hacking techniques and cybersecurity best practices. Documented security findings and recommended remediation strategies.",
    },
  ];

export const skills = {
    "Programming": ["Python", "Java", "C++", "C"],
    "Web Technologies": ["HTML", "CSS", "Python Full Stack"],
    "Specializations": ["Web Application Security", "Penetration Testing", "Digital Voting Systems"],
    "Soft Skills": ["Communication", "Decision Making", "Observation", "Multi-tasking", "Problem Solving"],
  };
  
export type SkillCategory = keyof typeof skills;
