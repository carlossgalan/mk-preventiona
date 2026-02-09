import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mk-dark py-8 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm font-sans">
          © {new Date().getFullYear()} MK Preventiona. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-3">
           <span className="text-mk-cyan font-display font-bold text-xl">MK</span>
           <p className="text-gray-400 font-medium text-sm">
             Cuidamos el centro, mantenemos el movimiento.
           </p>
        </div>
      </div>
    </footer>
  );
};