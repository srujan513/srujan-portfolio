// src/app/resume/page.tsx
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
                Hello! I'm Srujan Kommagiri, a dedicated and results-oriented software developer with a knack for creating dynamic and responsive web applications. My passion for technology began with a simple "Hello, World!" and has since grown into a full-fledged career focused on solving complex problems with elegant code.
            </p>
            <p>
                I specialize in full-stack development with Python, and have a strong command of web technologies like HTML and CSS. I believe that a great user experience is paramount, and I strive to build applications that are not only visually appealing but also intuitive and accessible to all users. My toolkit also includes various programming languages like Java and C++.
            </p>
             <p>
                Beyond the code, I am a lifelong learner, always eager to explore new technologies and development methodologies. I thrive in collaborative environments and believe that the best products are built by teams that communicate effectively and share a common vision. I have strong soft skills in communication, decision making, observation, multi-tasking and problem solving.
            </p>
            <p>
                When I'm not at my computer, you can find me honing my skills on LeetCode or contributing to projects on GitHub. You can find my professional links here: LinkedIn: srujan-kommagiri, GitHub: srujan513, LeetCode: Srujan_5.
            </p>
        </div>
      </div>
    </div>
  );
}