'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? 'Enviando...' : 'Envíame un mensaje'}
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { success: false, message: '' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Éxito!' : 'Oops!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estoy disponible para colaborar en proyectos freelance o de desarrollo continuo.
            Ponte en contacto conmigo y conversemos sobre cómo puedo ayudarte a construir tu próxima aplicación.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:cesarjavierfrickelo@gmail.com" className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground group-hover:text-foreground">cesarjavierfrickelo@gmail.com</span>
            </a>
            <a href="tel:+595983597268" className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground group-hover:text-foreground">+595 983 597268</span>
            </a>
            <div className="flex items-center gap-3">
               <MapPin className="w-5 h-5 text-primary" />
               <span className="text-muted-foreground">Encarnación, Paraguay</span>
            </div>
            <a href="https://linkedin.com/in/cesar-sanabria-662b8b338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground group-hover:text-foreground">linkedin.com/in/cesar-sanabria-662b8b338</span>
            </a>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Envíame un mensaje</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" placeholder="Tu Nombre" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Tu mensaje..." rows={5} required />
              </div>
              <div className="text-center">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
