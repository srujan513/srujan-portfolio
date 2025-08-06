// src/app/resume/certifications/page.tsx
"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Calendar, Shield, Star, TrendingUp } from 'lucide-react';
import { certifications } from "@/data/resume-data";
import { motion } from "framer-motion";

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

export default function CertificationsPage() {
  return (
    <motion.div 
      className="space-y-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-16 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-16 w-32 h-32 rounded-full bg-gradient-to-br from-primary/8 to-primary/3 blur-2xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/6 to-primary/2 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Award className="w-8 h-8 text-primary" />
          </motion.div>
          <span>
            Certifications
            <motion.div
              className="absolute -bottom-2 left-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground ml-16"
          variants={itemVariants}
        >
          My professional certifications and credentials.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants} className="ml-16">
        <Separator />
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="group hover:shadow-xl transition-all duration-500 border-primary/10 hover:border-primary/30 relative overflow-hidden">
              {/* Enhanced background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
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
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />

              <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                <motion.div 
                  className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(var(--primary-rgb), 0)",
                      "0 0 20px rgba(var(--primary-rgb), 0.3)",
                      "0 0 0 rgba(var(--primary-rgb), 0)"
                    ]
                  }}
                  style={{ "--primary-rgb": "hsl(var(--primary))" } as any}
                >
                  <Award className="w-8 h-8 text-primary" />
                  
                  {/* Floating sparkles */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                
                <div className="flex-1">
                  <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {cert.title}
                    </motion.span>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-4 h-4 text-primary/60" />
                    </motion.div>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Shield className="w-3 h-3 text-primary/60" />
                    <span className="font-medium">{cert.issuer}</span>
                  </CardDescription>
                </div>

                {/* Status indicator */}
                <motion.div
                  className="flex items-center gap-2 text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full border border-primary/20"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <span>Certified</span>
                </motion.div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications summary */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="w-6 h-6 text-primary" />
            </motion.div>
            Certification Overview
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
                {certifications.length}
              </motion.div>
              <div className="text-sm text-muted-foreground">Total Certs</div>
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
                100%
              </motion.div>
              <div className="text-sm text-muted-foreground">Valid</div>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary flex items-center justify-center gap-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <TrendingUp className="w-6 h-6" />
                ∞
              </motion.div>
              <div className="text-sm text-muted-foreground">Growing</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}