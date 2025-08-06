// src/app/resume/experience/page.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/resume-data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ExperiencePage() {
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
          className="absolute top-16 right-20 w-36 h-36 rounded-full bg-gradient-to-br from-primary/8 to-primary/4 blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-primary/6 to-primary/2 blur-xl"
          animate={{
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground relative flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="p-3 rounded-lg bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Briefcase className="w-8 h-8 text-primary" />
          </motion.div>
          <span>
            Work Experience
            <motion.div
              className="absolute -bottom-2 left-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground ml-16"
          variants={itemVariants}
        >
          My professional journey and key contributions.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants} className="ml-16">
        <Separator />
      </motion.div>

      <motion.div 
        className="space-y-8 relative ml-8"
        variants={containerVariants}
      >
        {/* Animated timeline line */}
        <motion.div 
          className="absolute left-3.5 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 -z-10"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />
        
        {/* Timeline dots animation */}
        <motion.div
          className="absolute left-2 top-0 w-2 h-2 bg-primary/30 rounded-full"
          animate={{
            y: [0, 20, 40, 60, 80],
            opacity: [1, 0.8, 0.6, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="pl-8 relative"
            variants={cardVariants}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute -left-1.5 top-6 h-3 w-3 rounded-full bg-primary shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.3 + 0.8, duration: 0.5, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.5, backgroundColor: "hsl(var(--primary))" }}
            >
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-primary/10 hover:border-primary/30">
                {/* Background gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Animated border shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
                  animate={{
                    translateX: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="font-headline text-xl flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </motion.div>
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {exp.role}
                        </motion.span>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <MapPin className="w-4 h-4 text-primary/60" />
                        </motion.div>
                        <span className="font-medium">{exp.company}</span>
                      </CardDescription>
                    </div>
                    <motion.div 
                      className="text-sm text-muted-foreground text-right bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-2"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Calendar className="w-3 h-3 text-primary" />
                      <span>{exp.period}</span>
                    </motion.div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <motion.p
                    className="text-foreground/90 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.description}
                  </motion.p>
                  
                  {/* Achievement indicators */}
                  <motion.div
                    className="mt-4 flex items-center gap-4 text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 1 }}
                  >
                    <motion.div
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <span>Active Role</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span>Growth Impact</span>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience summary */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{}}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="w-6 h-6 text-primary" />
            </motion.div>
            Career Highlights
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ 
                  scale: [1, 1.1, 1],
                  color: ["hsl(var(--primary))", "hsl(var(--primary) / 0.8)", "hsl(var(--primary))"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {experiences.length}
              </motion.div>
              <div className="text-sm text-muted-foreground">Positions</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                3+
              </motion.div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                100%
              </motion.div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
