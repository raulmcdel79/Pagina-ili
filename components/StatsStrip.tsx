import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const StatItem: React.FC<{ target: number, label: string, isInView: boolean }> = ({ target, label, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const duration = 2000;
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }
    }, [isInView, target]);

    return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-playfair font-bold text-brand-light">
                +{count}
            </p>
            <p className="mt-2 text-sm text-brand-light/60 tracking-widest uppercase">{label}</p>
        </div>
    );
};


const StatsStrip: React.FC = () => {
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });

  const statsData = [
    { target: 40, label: "animales atendidos" },
    { target: 95, label: "% de tutores repiten" },
    { target: 10, label: "años de experiencia" },
  ];

  return (
    <section className="py-12 bg-brand-dark/30">
        <div ref={statsRef} className="container mx-auto px-6">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-opacity duration-1000 ${statsInView ? 'opacity-100' : 'opacity-0'}`}>
                {statsData.map(stat => (
                    <StatItem key={stat.label} target={stat.target} label={stat.label} isInView={statsInView} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default StatsStrip;