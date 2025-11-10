import { Badge } from '@/components/ui/badge';

const skills = [
  'PHP', 'Laravel', 'JavaScript', 'Node.js', 'Express', 'React', 
  'Bootstrap', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Git', 'GitHub', 
  'Office', 'Herramientas de IA', 'Español'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Habilidades Técnicas
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Combino un enfoque analítico con creatividad para desarrollar sistemas web estables, optimizados y fáciles de usar. Cada línea de código busca aportar claridad, eficiencia y valor al usuario final.
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
