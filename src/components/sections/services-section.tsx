import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, LayoutTemplate, Cable, Zap, PenTool } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Desarrollo web full stack",
    description: "Creación de aplicaciones completas, desde el frontend hasta el backend."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "Sistemas de gestión personalizados",
    description: "Soluciones a medida para administrar tus operaciones y datos."
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Integración de bases de datos",
    description: "Trabajo con MySQL y MongoDB para una gestión de datos eficiente."
  },
  {
    icon: <Cable className="w-8 h-8 text-primary" />,
    title: "APIs REST",
    description: "Construcción de APIs para la comunicación fluida entre sistemas."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Optimización y refactorización",
    description: "Mejora del rendimiento y la calidad del código existente."
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Diseño de interfaces funcionales",
    description: "Interfaces limpias y centradas en una gran experiencia de usuario."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Qué Ofrezco
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
          Desarrollo cada proyecto con atención al detalle, asegurando un equilibrio entre funcionalidad, diseño y rendimiento. Busco que cada solución tenga un impacto real y facilite la vida de quienes la usan.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
