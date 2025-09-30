import React, { useState } from 'react';
import { X } from 'lucide-react';

const TopBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-accent text-brand-dark py-2.5 px-6 text-center text-sm font-source-serif relative">
      <p>
  Servicios disponibles en <strong>Valencia Capital</strong>. ¡Nuevas plazas para cuidado diurno! <a href="#contacto" className="font-bold underline hover:opacity-80 transition-opacity">Reservá ahora</a>
      </p>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-1/2 right-4 -translate-y-1/2 hover:bg-black/10 rounded-full p-1 transition-colors"
        aria-label="Cerrar banner"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default TopBanner;