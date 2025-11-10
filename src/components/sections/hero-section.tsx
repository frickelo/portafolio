import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="hero" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="font-medium text-primary">
            César Javier Sanabria Frickelo
          </p>
          <h1 className="font-headline mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Desarrollo aplicaciones web eficientes y escalables
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Soy Licenciado en Análisis de Sistemas Informáticos. Creo soluciones digitales que combinan rendimiento, funcionalidad y una experiencia de usuario moderna.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">
                Ver mis proyectos
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contactarme</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              data-ai-hint={profileImage.imageHint}
              width={400}
              height={400}
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
