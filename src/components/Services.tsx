import { motion, type Variants } from 'framer-motion';
import {
  PackageSearch,
  Video,
  Package,
  Gamepad2,
  Radio,
  Handshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  PackageSearch,
  Video,
  Package,
  Gamepad2,
  Radio,
  Handshake,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              Offerings
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand leading-none font-bold">
            What I Bring To The Table.
          </h2>
          <p className="mt-4 text-sand/50 text-base md:text-lg max-w-2xl">
            Professional content services for gaming and technology brands.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ id, title, description, iconName }) => {
            const Icon = iconMap[iconName] || PackageSearch;
            return (
              <motion.div
                key={id}
                variants={cardVariants}
                className="group relative rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-2xl p-8 flex flex-col justify-between cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-sand/30 hover:bg-charcoal-light/60 hover:shadow-2xl hover:shadow-charcoal-dark/50"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl border border-sand/15 bg-charcoal/70 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-sand/30 group-hover:scale-105">
                    <Icon
                      className="w-7 h-7 text-sand/70 transition-colors duration-300 group-hover:text-sand"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-sand uppercase tracking-wide mb-3">
                    {title}
                  </h3>
                  <p className="text-sand/65 text-sm leading-relaxed font-normal">
                    {description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand/10 flex items-center justify-between text-xs text-sand/40 font-medium">
                  <span className="uppercase tracking-wider">Collaboration</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sand/30 group-hover:bg-sand/70 transition-colors" />
                </div>

                {/* Subtle glass reflection highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sand/[0.02] to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
