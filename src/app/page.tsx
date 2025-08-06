
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-24">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Hi, I'm Srujan Kommagiri
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            A passionate and creative developer on a mission to build beautiful, functional, and user-centric web experiences. Welcome to my personal corner of the internet.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/work">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
              }}
              className="relative w-[300px] h-[300px] xl:w-[498px] xl:h-[498px] flex items-center justify-center"
            >
              {/*---image---*/}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.9, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden"
              >
                <Image
                  src="/image2.png"
                  alt="Portrait of Srujan Kommagiri"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-contain dark:grayscale p-2"
                  data-ai-hint="person portrait"
                />
              </motion.div>

              {/*---circle---*/}
              <motion.svg
                className="absolute top-0 left-0 w-full h-full"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
