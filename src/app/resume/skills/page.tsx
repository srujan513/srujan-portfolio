// src/app/resume/skills/page.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills, SkillCategory } from "@/data/resume-data";
import { motion } from "framer-motion";
import { Code, Database, Globe, Palette, Server, Wrench } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Category icons mapping
const categoryIcons: { [key: string]: any } = {
  "Programming": Code,
  "Web Technologies": Globe,
  "Databases": Database,
  "Frameworks": Server,
  "Design": Palette,
  "Tools": Wrench,
  "Specializations": Code,
  "Soft Skills": Code,
};

// Category colors for gradients
const categoryColors: { [key: string]: string } = {
  "Programming": "from-blue-500/20 to-blue-600/10",
  "Web Technologies": "from-green-500/20 to-green-600/10",
  "Databases": "from-purple-500/20 to-purple-600/10",
  "Frameworks": "from-orange-500/20 to-orange-600/10",
  "Design": "from-pink-500/20 to-pink-600/10",
  "Tools": "from-yellow-500/20 to-yellow-600/10",
  "Specializations": "from-red-500/20 to-red-600/10",
  "Soft Skills": "from-teal-500/20 to-teal-600/10",
};

export default function SkillsPage() {
  return (
    <motion.div 
      className="space-y-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-gradient-to-br from-primary/8 to-primary/3 blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Technical Skills
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground"
          variants={itemVariants}
        >
          A snapshot of the technologies I work with.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {(Object.keys(skills) as SkillCategory[]).map((category, categoryIndex) => {
          const IconComponent = categoryIcons[category] || Code;
          const gradientClass = categoryColors[category] || "from-primary/20 to-primary/10";
          
          return (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-primary/10 hover:border-primary/30">
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: categoryIndex * 0.5
                  }}
                />
                
                {/* Subtle animated border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(45deg, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.2))",
                      "linear-gradient(225deg, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.2))",
                      "linear-gradient(45deg, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.2))"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="font-headline text-xl flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category}
                    </motion.span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {skills[category].map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={badgeVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 17,
                          delay: skillIndex * 0.05
                        }}
                        className="cursor-pointer"
                      >
                        <Badge 
                          variant="default" 
                          className="text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:shadow-lg"
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Skill count indicator */}
                  <motion.div
                    className="mt-4 text-xs text-muted-foreground flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: categoryIndex * 0.3
                      }}
                    />
                    <span>{skills[category].length} technologies</span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skills summary */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-semibold text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Skills Overview
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {Object.values(skills).reduce((total, skillArray) => total + skillArray.length, 0)}+
              </motion.div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                {Object.keys(skills).length}
              </motion.div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                3+
              </motion.div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                ∞
              </motion.div>
              <div className="text-sm text-muted-foreground">Learning</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
    