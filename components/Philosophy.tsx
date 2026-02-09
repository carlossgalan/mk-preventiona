import React from 'react';
import { ChartBar, Users, Activity } from 'lucide-react';
import { ValuePillar } from '../types';
import { Reveal } from './Reveal';

const pillars: ValuePillar[] = [
  {
    title: "Salud Real y Medible",
    description: "Métricas claras sobre absentismo y productividad. Lo que no se mide, no se puede mejorar.",
    icon: ChartBar
  },
  {
    title: "Modelo Híbrido",
    description: "La cercanía presencial de nuestros especialistas unida a la eficiencia de la digitalización.",
    icon: Users
  },
  {
    title: "Accesibilidad Total",
    description: "Seguimiento continuo 24/7 para cada trabajador a través de nuestra plataforma tecnológica.",
    icon: Activity
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mk-blue mb-6 leading-tight">
                Más allá de la prevención tradicional: <br/>
                <span className="text-mk-cyan">Un enfoque humano y rentable.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="prose prose-lg text-mk-gray mb-10 font-sans">
                <p className="mb-4">
                  El panorama actual refleja una realidad que no podemos ignorar: en 2024, las bajas laborales 
                  representaron un coste de <span className="font-bold text-mk-blue">30.000 millones de euros</span>, 
                  con un absentismo impulsado por la salud mental y los dolores crónicos.
                </p>
                <p>
                  En <strong className="text-mk-blue">MK Preventiona</strong> nacemos para llenar el vacío existente en el cuidado de la salud laboral. 
                  No ofrecemos un servicio puntual, sino que instauramos una cultura de bienestar continua.
                </p>
              </div>
            </Reveal>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <Reveal key={index} delay={300 + (index * 150)}>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-mk-cyan/10 text-mk-cyan group-hover:bg-mk-cyan/20 transition-colors duration-300">
                        <pillar.icon size={26} strokeWidth={2} />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold font-display text-mk-blue">{pillar.title}</h3>
                      <p className="mt-2 text-mk-gray leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Visual/Image Side */}
          <div className="relative mt-12 lg:mt-0">
            <Reveal delay={300} className="relative">
              <img 
                src="/cuello.jpeg" 
                alt="Professional physiotherapy session" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 -left-6 z-20 bg-white p-5 rounded-xl shadow-lg border-l-4 border-mk-cyan max-w-[220px] hidden md:block">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-mk-gray/70">Impacto Real</span>
                <p className="text-4xl font-display font-extrabold text-mk-blue leading-none mt-1.5">-30%</p>
                <p className="text-sm text-mk-gray mt-1.5 leading-snug">de absentismo laboral en 3 meses</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};