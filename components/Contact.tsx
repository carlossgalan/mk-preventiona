import React from 'react';
import { Button } from './Button';
import { Mail, CalendarCheck } from 'lucide-react';
import { Reveal } from './Reveal';


export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-mk-blue text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* CTA Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Invertir en salud es invertir en <span className="text-mk-cyan">rentabilidad</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-4 mb-8 text-gray-200">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-mk-cyan flex-shrink-0"></span>
                  Reducción drástica del absentismo.
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-mk-cyan flex-shrink-0"></span>
                  Mejora del rendimiento y la productividad.
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-mk-cyan flex-shrink-0"></span>
                  Fortalecimiento de la imagen corporativa (RSC).
                </p>
              </div>
            </Reveal>
          </div>

          <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-md border border-white/10 text-center md:text-left shadow-xl">
            <Reveal delay={400}>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">¿Hablamos?</h3>
              <p className="text-gray-200 mb-8">
                Descubra cómo transformar su empresa en una organización saludable con una reunión breve.
              </p>
              
              <div className="space-y-6">
                <Button variant="primary" fullWidth className="h-12 text-lg">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Agendar Reunión
                </Button>
                
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mt-4 text-sm font-medium">
                  <Mail size={18} />
                  <a href="mailto:hola@mkpreventionasl.com" className="hover:text-mk-cyan transition-colors">
                    hola@mkpreventionasl.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};