import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 1,
    title: 'Data-Driven Insights Platform',
    description: 'A web application for visualizing complex datasets, providing users with actionable insights through interactive charts and dashboards.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'E-Commerce UI Kit',
    description: 'A comprehensive library of reusable UI components designed for modern e-commerce websites, focusing on accessibility and performance.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app that helps users track their workouts, monitor progress, and stay motivated with social features.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['React Native', 'Firebase', 'GraphQL'],
    githubUrl: 'https://github.com',
  },
    {
    id: 4,
    title: 'Algorithmic Trading Bot',
    description: 'A Python-based bot that executes trades on cryptocurrency markets based on predefined algorithmic strategies and real-time data analysis.',
    image: PlaceHolderImages.find(img => img.id === 'project-4'),
    tags: ['Python', 'WebSockets', 'REST API'],
    githubUrl: 'https://github.com',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A selection of my work, showcasing my skills in design and development.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/10">
            <div className="overflow-hidden">
               {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
