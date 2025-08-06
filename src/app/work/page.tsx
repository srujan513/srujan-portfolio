import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/work-data';

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          My Work
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          A selection of projects that I'm proud of. Each one represents a unique challenge and a learning opportunity.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
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
