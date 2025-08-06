import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
          <div className="relative h-80 w-80 overflow-hidden rounded-full shadow-2xl lg:h-96 lg:w-96">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Portrait of Srujan Kommagiri"
              width={400}
              height={400}
              priority
              className="h-full w-full object-cover"
              data-ai-hint="person portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
}