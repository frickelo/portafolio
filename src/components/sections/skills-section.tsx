import { Badge } from '@/components/ui/badge';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'GraphQL', 
  'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Technical Skills
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A glimpse into the technologies I work with.
        </p>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            className="px-4 py-2 text-sm transition-transform hover:scale-105 hover:bg-accent/80"
            variant="default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
