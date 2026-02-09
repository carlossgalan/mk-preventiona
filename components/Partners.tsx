import React from 'react';
import { Reveal } from './Reveal';

// Generamos el array de logos basándonos en los archivos que tienes en /public
// Asumiendo que son logo1.jpeg hasta logo11.jpeg
const partners = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/logo${i + 1}.jpeg`,
  alt: `Empresa colaboradora ${i + 1}`
}));

export const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <Reveal>
          <div className="text-center mb-14">
            <h3 className="text-xl md:text-2xl font-display font-light text-mk-gray">
              Las siguientes empresas ya están <br className="hidden md:block" />
              aplicando el plan <span className="font-semibold text-mk-blue">MK Preventiona</span>
            </h3>
          </div>
        </Reveal>

        {/* Carrusel Infinito */}
        <Reveal delay={200}>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_div]:mx-8 animate-infinite-scroll hover-pause">
              {/* Duplicamos los logos para asegurar el bucle infinito fluido */}
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 w-32 md:w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
