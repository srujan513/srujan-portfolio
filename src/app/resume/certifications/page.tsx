// src/app/resume/certifications/page.tsx
"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award } from 'lucide-react';
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
  hidden: { opacity: 0, scale: 0.95 },
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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/8 to-primary/4 blur-xl"
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Certifications
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground"
          variants={itemVariants}
        >
          My professional certifications and credentials.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants}>
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
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                  <motion.div 
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Award className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                      <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                  </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
