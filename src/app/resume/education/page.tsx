import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 - 2017",
    description: "Focused on software engineering and artificial intelligence. Completed a thesis on machine learning algorithms for natural language processing.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "State College",
    period: "2011 - 2015",
    description: "Graduated with honors. Active member of the coding club and participated in several hackathons.",
  },
];

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
          Education
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          My academic background and qualifications.
        </p>
      </div>
      <Separator />
      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">{edu.period}</div>
                </div>
            </CardHeader>
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
