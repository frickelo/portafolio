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
    title: 'RoomMaster – Sistema de Gestión de Aulas',
    description: 'Aplicación web para la asignación y organización de aulas en la Universidad Autónoma de Encarnación. Desarrollada en Laravel y MySQL, automatiza la gestión de espacios y horarios académicos, reduciendo errores y mejorando la eficiencia.',
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ['Laravel', 'MySQL'],
    githubUrl: 'https://github.com/frickelo/roommaster.git',
  },
  {
    id: 2,
    title: 'GymControl – Sistema de Gestión de Gimnasio',
    description: 'Aplicación web para la administración integral de inscripciones, pagos y recursos de un gimnasio. Creada con Laravel y Bootstrap, permite gestionar clientes, control de pagos (mensuales y semanales), stocks de productos y generación de reportes.',
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ['Laravel', 'Bootstrap'],
    githubUrl: 'https://github.com/frickelo/gymcontrol.git',
  },
  {
    id: 3,
    title: 'ControlStock – Sistema de Gestión de Inventario',
    description: 'Aplicación web desarrollada con React, Node.js, Express y MongoDB (Stack MERN) para la administración y control de productos en tiempo real. Permite registrar, editar y eliminar productos, gestionando su cantidad disponible de forma dinámica.',
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/frickelo/control-stock.git',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Proyectos Destacados
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/10"
          >
            {/* Imagen del proyecto - con tamaño uniforme y responsive */}
            <div className="relative w-full overflow-hidden rounded-lg">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-60 xl:h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
            </div>

            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver en GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
