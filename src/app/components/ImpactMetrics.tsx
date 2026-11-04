import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Layers, Sparkles, Zap } from 'lucide-react';

interface Metric {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: typeof Briefcase;
}

const metrics: Metric[] = [
  { 
    value: 5, 
    suffix: '+', 
    label: 'Years Crafting Web Apps', 
    sublabel: 'Production frontend & full-stack platforms',
    icon: Briefcase 
  },
  { 
    value: 11, 
    suffix: '', 
    label: 'Production Platforms', 
    sublabel: 'Mobility, Fintech, E-Commerce, EdTech',
    icon: Layers 
  },
  { 
    value: 50, 
    suffix: '+', 
    label: 'Projects Delivered', 
    sublabel: 'From concept to scalable deployment',
    icon: Sparkles 
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'Client Satisfaction', 
    sublabel: 'Obsessive attention to speed & detail',
    icon: Zap 
  }
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
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 border-y border-black/[0.05] dark:border-white/[0.06] bg-white/50 dark:bg-[#090b14]/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-6 rounded-2xl bg-white dark:bg-[#0e111d] border border-black/[0.05] dark:border-white/[0.08] shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-1.5 flex items-baseline gap-1">
                  {isVisible ? (
                    <AnimatedCounter
                      end={metric.value}
                      suffix={metric.suffix}
                    />
                  ) : (
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">0</span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {metric.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {metric.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const steps = 45;
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
    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-amber-500 transition-colors">
      {count}
      <span className="text-amber-500">{suffix}</span>
    </span>
  );
}
