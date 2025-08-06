// src/app/resume/experience/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/resume-data";

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
          Work Experience
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          My professional journey and key contributions.
        </p>
      </div>
      <Separator />
      <div className="space-y-8 relative">
        <div className="absolute left-3.5 top-0 h-full w-0.5 bg-border -z-10"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="pl-8 relative">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">{exp.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
