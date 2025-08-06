// src/app/resume/education/page.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { education } from "@/data/resume-data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function EducationPage() {
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
          className="absolute top-24 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary/8 to-primary/4 blur-xl"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="p-3 rounded-lg bg-primary/10 border border-primary/20"
            whileHover={{ rotate: -15, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <GraduationCap className="w-8 h-8 text-primary" />
          </motion.div>
          Education
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground ml-20"
          variants={itemVariants}
        >
          My academic background and qualifications.
        </motion.p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="ml-20">
        <Separator />
      </motion.div>

      <motion.div 
        className="space-y-8 ml-8"
        variants={containerVariants}
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="relative group overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="relative z-10">
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                    <motion.div 
                      className="text-sm text-muted-foreground text-right bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                    >
                      {edu.period}
                    </motion.div>
                  </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
