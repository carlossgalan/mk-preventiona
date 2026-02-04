import React from 'react';
import { HeartPulse, Dumbbell, Brain, ClipboardCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { Reveal } from './Reveal';

const services: ServiceItem[] = [
  {
    title: "Fisioterapia Corporativa",
    description: "Prevención y tratamiento de lesiones directamente en el lugar de trabajo, reduciendo desplazamientos y tiempos de baja.",
    icon: HeartPulse
  },
  {
    title: "Entrenamiento y Movimiento",
    description: "Planes de ejercicio adaptados a la rutina laboral y pausas activas guiadas para combatir el sedentarismo.",
    icon: Dumbbell
  },
  {
    title: "Psicología Aplicada",
    description: "Herramientas para la gestión del estrés y apoyo emocional, fundamentales para prevenir bajas prolongadas por salud mental.",
    icon: Brain
  },
  {
    title: "Evaluaciones y Formación",
    description: "Informes detallados sobre el estado físico y psicosocial del equipo, acompañados de talleres de ergonomía y salud.",
    icon: ClipboardCheck
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-mk-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-mk-cyan font-bold uppercase tracking-widest text-sm mb-3">El Ecosistema</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-mk-blue">
              Un modelo integral que cuida del trabajador y protege la empresa
            </h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
              <div 
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-mk-cyan relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-mk-light rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 bg-mk-blue rounded-lg flex items-center justify-center text-white shadow-lg shadow-mk-blue/20 group-hover:bg-mk-cyan transition-colors duration-300">
                      <service.icon size={32} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-display font-bold text-mk-blue mb-3 group-hover:text-mk-cyan transition-colors">{service.title}</h4>
                    <p className="text-mk-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};