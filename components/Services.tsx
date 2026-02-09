import React from 'react';
import { HeartPulse, Dumbbell, Brain, ClipboardCheck, Leaf } from 'lucide-react';
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
    title: "Nutrición",
    description: "Nutrición consciente aplicada al centro de trabajo a través del método CDT de Ana Macías.",
    icon: Leaf
  },
  {
    title: "Evaluaciones y Formación",
    description: "Formaciones personalizadas para cada puesto de trabajo, bonificando al 100% su coste a través de los créditos FUNDAE.",
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
            <Reveal key={index} delay={index * 150} className={`h-full ${index === services.length - 1 ? 'md:col-span-2' : ''}`}>
              <div 
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-mk-blue rounded-xl flex items-center justify-center text-white group-hover:bg-mk-cyan transition-colors duration-300">
                      <service.icon size={28} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-display font-bold text-mk-blue mb-3">{service.title}</h4>
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