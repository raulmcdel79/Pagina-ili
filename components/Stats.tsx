import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const StatItem: React.FC<{ target: number, label: string }> = ({ target, label }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5, triggerOnce: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const duration = 2000;
            const startTime = Date.now();

            const frame = () => {
                const now = Date.now();
                const progress = Math.min(1, (now - startTime) / duration);
                const current = Math.floor(progress * (end - start) + start);
                setCount(current);

                if (progress < 1) {
                    requestAnimationFrame(frame);
                }
            };
            requestAnimationFrame(frame);
        }
    }, [isInView, target]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl md:text-6xl font-libre-baskerville font-bold text-brand-accent">
                +{count}
            </p>
            <p className="mt-2 text-lg text-brand-light/80">{label}</p>
        </div>
    );
};


const Stats: React.FC = () => {
  const statsData = [
    { target: 100, label: "animales atendidos" },
    { target: 95, label: "% de tutores repiten" },
    { target: 10, label: "años de experiencia" },
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {statsData.map(stat => (
            <StatItem key={stat.label} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;