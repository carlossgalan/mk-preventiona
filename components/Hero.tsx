import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fondo.jpeg" 
          alt="Corporate Wellness Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mk-blue/90 via-mk-blue/70 to-mk-blue/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-16">
        <div className="max-w-4xl">
          <Reveal delay={200}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-mk-cyan/20 bg-mk-blue/40 text-mk-cyan text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-mk-cyan mr-3"></span>
              Innovación en Salud Corporativa
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8">
              MK Preventiona: <br />
              <span className="text-mk-cyan">
                Ciencia, Movimiento <br className="hidden sm:block" /> y Tecnología.
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={600}>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-sans font-light">
              Llevamos la prevención y el bienestar al centro de la vida laboral. 
              Transformamos la salud de su equipo para cuidar el activo más valioso de su empresa.
            </p>
          </Reveal>
          
          <Reveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="primary" className="h-14 px-8 text-lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
                Solicitar Diagnóstico
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg" onClick={() => document.getElementById('filosofia')?.scrollIntoView({behavior: 'smooth'})}>
                Conocer Metodología
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};