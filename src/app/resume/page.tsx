// src/app/resume/page.tsx
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, MapPin, Calendar } from "lucide-react";

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

export default function AboutMePage() {
  return (
    <motion.div 
      className="space-y-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary/8 to-primary/3 blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <motion.h1 
          className="font-headline text-4xl font-bold tracking-tight text-foreground relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Me
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg text-muted-foreground"
          variants={itemVariants}
        >
          A little bit about my journey, passions, and what drives me.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
        variants={containerVariants}
      >
        <motion.div 
          className="md:col-span-1 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Image
                src="https://placehold.co/400x500.png"
                alt="A professional headshot"
                width={400}
                height={500}
                className="rounded-lg object-cover shadow-lg transition-all duration-500 group-hover:scale-110"
                data-ai-hint="person professional"
              />
              
              {/* Overlay gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-2 space-y-6 text-base text-foreground/90"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="relative p-6 rounded-lg bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="absolute top-2 left-4 text-4xl text-primary/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              "
            </motion.span>
            Hello! I'm <span className="text-primary font-semibold">Srujan Kommagiri</span>, a dedicated and results-oriented software developer with a knack for creating dynamic and responsive web applications. My passion for technology began with a simple "Hello, World!" and has since grown into a full-fledged career focused on solving complex problems with elegant code.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="relative p-6 rounded-lg bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            I specialize in <span className="text-primary font-semibold">full-stack development with Python</span>, and have a strong command of web technologies like HTML and CSS. I believe that a great user experience is paramount, and I strive to build applications that are not only visually appealing but also intuitive and accessible to all users. My toolkit also includes various programming languages like <span className="text-primary font-semibold">Java and C++</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="relative p-6 rounded-lg bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Beyond the code, I am a <span className="text-primary font-semibold">lifelong learner</span>, always eager to explore new technologies and development methodologies. I thrive in collaborative environments and believe that the best products are built by teams that communicate effectively and share a common vision. I have strong soft skills in communication, decision making, observation, multi-tasking and problem solving.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative p-6 rounded-lg bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors duration-300"
          >
            <p className="mb-4">
              When I'm not at my computer, you can find me honing my skills on LeetCode or contributing to projects on GitHub.
            </p>
            
            {/* Professional Links */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">srujan-kommagiri</span>
              </motion.a>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">srujan513</span>
              </motion.a>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">Srujan_5</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fun facts section */}
      <motion.div
        variants={itemVariants}
        className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
      >
        <motion.h3 
          className="text-xl font-semibold text-foreground mb-4"
          whileHover={{ scale: 1.02 }}
        >
          Quick Facts
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-md bg-background/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--background))" }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm">Based in India</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-md bg-background/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--background))" }}
          >
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm">Full-Stack Developer</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 p-3 rounded-md bg-background/50"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--background))" }}
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm">Always Learning</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}