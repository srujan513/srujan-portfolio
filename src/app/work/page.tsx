"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/work-data';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Sparkles, Star, TrendingUp, Eye } from 'lucide-react';
import Link from 'next/link';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
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

export default function WorkPage() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-12 sm:py-16 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-16 w-48 h-48 rounded-full bg-gradient-to-br from-primary/8 to-primary/4 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-36 h-36 rounded-full bg-gradient-to-br from-primary/6 to-primary/2 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-primary/2 blur-xl"
          animate={{
            y: [0, -40, 0],
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

      <motion.div className="text-center" variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl relative flex items-center justify-center gap-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="p-3 rounded-lg bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Code className="w-8 h-8 text-primary" />
          </motion.div>
          <span>
            My Work
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
          <motion.div
            animate={{}}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-primary/60" />
          </motion.div>
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground"
          variants={itemVariants}
        >
          A selection of projects that I'm proud of. Each one represents a unique challenge and a learning opportunity.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-primary/10 hover:border-primary/30 relative">
                {/* Background gradient effect */}
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

                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10"
                >
                  <CardHeader>
                    <motion.div 
                      className="aspect-video relative mb-4 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
  src={project.imageUrl}
  alt={`Screenshot of ${project.title}`}
  width={600}
  height={400}
  className="object-cover transition-all duration-500 group-hover:scale-110"
  data-ai-hint={project.imageHint}
/>

                      
                      {/* Image overlay with icons */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                      >
                        <motion.div
                          className="p-2 rounded-full bg-background/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Eye className="w-4 h-4 text-primary" />
                        </motion.div>
                        <motion.div
                          className="p-2 rounded-full bg-background/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Github className="w-4 h-4 text-primary" />
                        </motion.div>
                        <motion.div
                          className="p-2 rounded-full bg-background/80 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </motion.div>
                      </motion.div>

                      {/* Corner decoration */}
                      <motion.div
                        className="absolute top-2 right-2 p-1 rounded-full bg-primary/20 backdrop-blur-sm"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <Star className="w-3 h-3 text-primary" />
                      </motion.div>
                    </motion.div>
                    
                    <CardTitle className="font-headline group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </motion.div>
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.title}
                      </motion.span>
                    </CardTitle>
                    
                    <CardDescription className="text-foreground/80 group-hover:text-foreground/90 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
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
                            delay: tagIndex * 0.05
                          }}
                          className="cursor-pointer"
                        >
                          <Badge 
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:shadow-lg"
                          >
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: tagIndex * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Project stats */}
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
                        <span>Live Project</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Code className="w-3 h-3 text-primary" />
                        <span>{project.tags.length} Technologies</span>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects summary */}
      <motion.div
        variants={itemVariants}
        className="mt-16 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
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
              <Code className="w-6 h-6 text-primary" />
            </motion.div>
            Project Portfolio
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
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
                {projects.length}+
              </motion.div>
              <div className="text-sm text-muted-foreground">Projects</div>
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
              <div className="text-sm text-muted-foreground">Completion</div>
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
                10+
              </motion.div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </motion.div>

            <motion.div 
              className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <motion.div 
                className="text-2xl font-bold text-primary flex items-center justify-center gap-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <TrendingUp className="w-6 h-6" />
                ∞
              </motion.div>
              <div className="text-sm text-muted-foreground">Innovation</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
