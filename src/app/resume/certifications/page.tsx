import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "Google Data Analytics",
    issuer: "Google",
  },
  {
    title: "Google Project Management",
    issuer: "Google",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
  },
   {
    title: "Programming Essentials in Python",
    issuer: "Cisco",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
  },
  {
    title: "Python Basic",
    issuer: "HackerRank",
  },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground">
          Certifications
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          My professional certifications and credentials.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
                <Award className="w-8 h-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}