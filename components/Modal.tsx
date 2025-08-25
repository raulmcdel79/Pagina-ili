import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-brand-dark border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto text-brand-light relative p-8 shadow-2xl animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-light/70 hover:text-brand-light transition-colors"
          aria-label="Cerrar modal"
        >
          <X size={28} />
        </button>
        <h2 className="text-3xl md:text-4xl font-playfair text-brand-accent mb-6 pr-8">{title}</h2>
        <div className="font-source-serif text-brand-light/80 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
