import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 15, suffix: '+', label: 'Technologies Mastered' }
];

export function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 lg:px-12 border-y border-gray-100 dark:border-white/10 dark:bg-[#030213]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2">
                {isVisible && (
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                  />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
      {count}
      {suffix}
    </span>
  );
}
