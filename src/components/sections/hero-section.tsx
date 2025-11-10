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
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Jane Doe
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            Senior Software Engineer
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Crafting elegant code and intuitive user experiences. I specialize in building modern, responsive, and scalable web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button asChild size="lg">
              <Link href="#contact">
                Get in Touch <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View My Work</Link>
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
