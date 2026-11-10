import { motion, type Variants } from 'framer-motion';
import {
  Gamepad2,
  Keyboard,
  Mouse,
  Headphones,
  Cpu,
  Joystick,
  Smartphone,
  Building2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categories = [
  { name: 'Gaming Hardware', icon: Gamepad2 },
  { name: 'Mechanical Keyboards', icon: Keyboard },
  { name: 'Gaming Mice', icon: Mouse },
  { name: 'Audio & IEM Brands', icon: Headphones },
  { name: 'PC Components', icon: Cpu },
  { name: 'Gaming Accessories', icon: Joystick },
  { name: 'Technology Products', icon: Smartphone },
  { name: 'Gaming Companies', icon: Building2 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Collaborations() {
  const { collaborations, personal } = portfolioData;

  return (
    <section id="collaborations" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              Partnerships
            </span>
            <span className="w-6 h-[1px] bg-sand/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand font-bold">
            {collaborations.heading}
          </h2>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-sand/65 text-base md:text-lg max-w-3xl mx-auto text-center mb-16 md:mb-20 leading-relaxed font-normal"
        >
          {collaborations.supportingText}
        </motion.p>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                className="group relative rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-xl p-6 md:p-8 text-center transition-all duration-300 hover:border-sand/30 hover:bg-charcoal-light/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal-dark/40"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-sand/15 bg-charcoal/70 transition-all duration-300 group-hover:border-sand/30 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-sand/70 transition-colors duration-300 group-hover:text-sand" />
                  </div>
                  <span className="text-sand/85 text-sm font-heading font-semibold tracking-wide transition-colors duration-300 group-hover:text-sand-light">
                    {category.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button — ELECTRIC BLUE EXCLUSIVELY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <a
            href={`mailto:${personal.email}?subject=Collaboration%20Inquiry%20%E2%80%94%20Crazy%20Vlzzz`}
            className="inline-block bg-[#2E6BFF] hover:bg-[#4A7FFF] text-white px-9 py-4 rounded-full text-sm font-bold tracking-wider uppercase shadow-xl shadow-[#2E6BFF]/25 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          >
            {collaborations.ctaText}
          </a>
          <span className="text-sand/40 text-xs">
            Directly drafts an email to {personal.email}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
