"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, User } from 'lucide-react';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const contactItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactPage() {
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
          className="absolute top-24 left-16 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary/8 to-primary/3 blur-2xl"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary/6 to-primary/2 blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
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
            <MessageCircle className="w-8 h-8 text-primary" />
          </motion.div>
          <span>
            Contact Me
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </span>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Mail className="w-6 h-6 text-primary/60" />
          </motion.div>
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground"
          variants={itemVariants}
        >
          Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2"
        variants={containerVariants}
      >
        {/* Contact Form Card */}
        <motion.div variants={cardVariants}>
          <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-primary/10 hover:border-primary/30">
            {/* Background gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Animated border shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full"
              animate={{
                translateX: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />

            <CardHeader className="relative z-10">
              <CardTitle className="font-headline flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Send className="w-5 h-5 text-primary" />
                </motion.div>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Send a Message
                </motion.span>
              </CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form action="#" className="space-y-6">
                <motion.div 
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                  variants={containerVariants}
                >
                  <motion.div 
                    className="space-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Name
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="transition-all duration-300 focus:border-primary/50 hover:border-primary/30"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="transition-all duration-300 focus:border-primary/50 hover:border-primary/30"
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    rows={6} 
                    className="transition-all duration-300 focus:border-primary/50 hover:border-primary/30 resize-none"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="space-y-8" variants={contactItemVariants}>
          <motion.h2 
            className="font-headline text-2xl font-bold text-foreground flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              whileHover={{}}
              transition={{ duration: 0.5 }}
            >
              <Globe className="w-6 h-6 text-primary" />
            </motion.div>
            Contact Information
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {/* Email Contact */}
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="p-3 bg-primary/10 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">For general inquiries and project proposals.</p>
                <a href="mailto:contact@srujan.com" className="text-primary hover:underline">
                  contact@srujan.com
                </a>
              </div>
            </motion.div>

            {/* Phone Contact */}
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="p-3 bg-primary/10 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">Available during business hours.</p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            {/* Location Contact */}
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="p-3 bg-primary/10 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Vijayawada, India</p>
                <a href="#" className="text-primary hover:underline">
                  Available for remote work
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
