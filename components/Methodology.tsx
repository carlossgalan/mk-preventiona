import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';
import { ProcessStep } from '../types';
import { Reveal } from './Reveal';

const steps: ProcessStep[] = [
  { number: "01", title: "Diagnóstico", description: "Reunión inicial para detectar necesidades específicas." },
  { number: "02", title: "Personalización", description: "Propuesta adaptada a objetivos corporativos." },
  { number: "03", title: "Implementación", description: "Despliegue de la App y sesiones presenciales." },
  { number: "04", title: "Seguimiento", description: "Informes mensuales de resultados y métricas." },
];

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* App Section */}
        <div className="lg:flex items-center gap-20 mb-28">
          <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
             <Reveal>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-mk-cyan/20 to-mk-blue/10 rounded-full blur-3xl -z-10"></div>
               {/* Mockup Placeholder */}
               <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[620px] w-[320px] shadow-2xl ring-1 ring-gray-900/50">
                  <div className="w-[140px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                      <img src="/movil1.jpeg" alt="App Screenshot" className="w-full h-full object-fill" />
                  </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2">
            <Reveal delay={200}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mk-blue mb-6">
                Prevención continua, digital y accesible en la palma de la mano.
              </h2>
              <p className="text-lg text-mk-gray mb-10 font-sans leading-relaxed">
                Nuestra App conecta al trabajador con su salud, permitiendo un seguimiento personalizado 
                y contacto directo con nuestros profesionales.
              </p>
            </Reveal>

            <ul className="space-y-6 mb-12">
              {[
                "Planes de ejercicio físico y psicológico personalizados.",
                "Recordatorios y rutinas adaptadas al puesto de trabajo.",
                "Informes de evolución para el trabajador y la empresa."
              ].map((item, i) => (
                <Reveal key={i} delay={300 + (i * 100)}>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-mk-cyan mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-mk-gray font-medium text-lg">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={600}>
              <div className="p-6 bg-mk-light rounded-xl border-l-4 border-mk-cyan">
                <h4 className="font-bold text-mk-blue flex items-center gap-2 mb-2 font-display">
                  <UserCheck size={20} className="text-mk-cyan"/>
                  El Equipo Humano
                </h4>
                <p className="text-mk-gray text-sm">
                  Detrás de la tecnología, un equipo multidisciplinar de fisioterapeutas, entrenadores y 
                  psicólogos que trabajan codo con codo con su empresa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Process Steps */}
        <div className="pt-20 border-t border-gray-100">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-display font-bold text-mk-blue">Nuestro Proceso de Incorporación</h3>
              <p className="text-mk-gray mt-2">Un sistema ágil en 4 pasos para transformar su empresa</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150} className="h-full">
                <div className="relative group h-full">
                  <div className="text-6xl font-display font-extrabold text-mk-blue/10 mb-4 group-hover:text-mk-cyan/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold font-display text-mk-blue mb-2">{step.title}</h4>
                  <p className="text-mk-gray text-sm leading-relaxed">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gray-200 -ml-4 z-[-1]"></div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};