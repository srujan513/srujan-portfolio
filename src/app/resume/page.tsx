import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AboutMePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
          About Me
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A little bit about my journey, passions, and what drives me.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://placehold.co/400x500.png"
              alt="A professional headshot"
              width={400}
              height={500}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="person professional"
            />
        </div>
        <div className="md:col-span-2 space-y-6 text-base text-foreground/90">
            <p>
                Hello! I'm a dedicated and results-oriented software developer with a knack for creating dynamic and responsive web applications. My passion for technology began with a simple "Hello, World!" and has since grown into a full-fledged career focused on solving complex problems with elegant code.
            </p>
            <p>
                I specialize in front-end development, with a strong command of modern JavaScript frameworks like React and Next.js. I believe that a great user experience is paramount, and I strive to build interfaces that are not only visually appealing but also intuitive and accessible to all users. My toolkit also includes TypeScript, for robust and scalable code, and a variety of styling solutions like Tailwind CSS and styled-components.
            </p>
             <p>
                Beyond the code, I am a lifelong learner, always eager to explore new technologies and development methodologies. I thrive in collaborative environments and believe that the best products are built by teams that communicate effectively and share a common vision.
            </p>
            <p>
                When I'm not at my computer, you can find me exploring local trails, experimenting with new recipes in the kitchen, or getting lost in a good book. I believe in a healthy work-life balance and find that my hobbies often inspire my creative approach to problem-solving in my professional life.
            </p>
        </div>
      </div>
    </div>
  );
}
