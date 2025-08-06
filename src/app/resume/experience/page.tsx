import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    role: "Data Science Intern",
    company: "SKILLDZIRE",
    period: "Vijayawada",
    description: "Learning data science fundamentals, Python basics, data structures, Pandas, NumPy, and machine learning concepts. Applying knowledge through hands-on exercises and practical implementations.",
  },
  {
    role: "Full Stack Development Intern",
    company: "DATA VALLEY.AI",
    period: "Vijayawada",
    description: "Gained hands-on experience in full stack using Python frameworks. Developed web apps with focus on both frontend and backend technologies. Collaborated with development teams on real-world projects and implementations.",
  },
  {
    role: "Python Full Stack Intern",
    company: "BRAINOVISION SOLUTIONS PVT LTD.",
    period: "Vijayawada",
    description: "Specialized in Python full stack development with emphasis on web application architecture. Implemented backend solutions using Python frameworks and database integration. Participated in code reviews and agile development methodologies.",
  },
  {
    role: "Web App Penetration Testing Intern",
    company: "INDIAN SERVERS PVT LTD.",
    period: "Vijayawada",
    description: "Conducted security assessments and vulnerability testing on web applications. Learned ethical hacking techniques and cybersecurity best practices. Documented security findings and recommended remediation strategies.",
  },
];

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