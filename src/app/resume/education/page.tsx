import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const education = [
  {
    degree: "B.TECH IN CSE",
    institution: "ALIET, JNTUK",
    period: "2021 - 2025",
    description: "CGPA: 7.0/10.0",
  },
  {
    degree: "Intermediate",
    institution: "Sri Sarada Educational Institutions",
    period: "2020 - 2021",
    description: "Percentage: 70%",
  },
  {
    degree: "Secondary School",
    institution: "St. John's EM High School",
    period: "2019",
    description: "CGPA: 9.2/10.0",
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