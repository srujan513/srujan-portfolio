// src/app/resume/skills/page.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills, SkillCategory } from "@/data/resume-data";

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
          Technical Skills
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A snapshot of the technologies I work with.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(Object.keys(skills) as SkillCategory[]).map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <Badge key={skill} variant="default" className="text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
