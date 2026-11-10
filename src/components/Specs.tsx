import { motion, type Variants } from 'framer-motion';
import { Cpu, HardDrive, CircuitBoard, Gauge, Sparkles, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Specs() {
  const { pcSpecs } = portfolioData;

  const hardwareCards = [
    {
      icon: Cpu,
      label: 'Processor (CPU)',
      spec: pcSpecs.processor.name,
      sub: pcSpecs.processor.clock,
      detail: pcSpecs.processor.description,
      stat: 'i7-13645HX',
    },
    {
      icon: CircuitBoard,
      label: 'Graphics Card (GPU)',
      spec: pcSpecs.gpu.name,
      sub: pcSpecs.gpu.vram,
      detail: pcSpecs.gpu.description,
      stat: 'RTX 4050 (6GB)',
    },
    {
      icon: Gauge,
      label: 'System Memory (RAM)',
      spec: pcSpecs.ram.size,
      sub: pcSpecs.ram.speed,
      detail: pcSpecs.ram.description,
      stat: '5600 MT/s',
    },
    {
      icon: HardDrive,
      label: 'Fast Storage',
      spec: pcSpecs.storage.size,
      sub: 'PCIe NVMe M.2 Solid State Drive',
      detail: pcSpecs.storage.description,
      stat: 'NVMe SSD',
    },
  ];

  return (
    <section id="specs" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center md:text-left mb-16 md:mb-20"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              Hardware & Rig
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand font-bold leading-none">
            Battlestation Specs.
          </h2>
          <p className="mt-4 text-sand/50 text-base md:text-lg max-w-2xl">
            {pcSpecs.subtitle}
          </p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {hardwareCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                variants={cardVariants}
                className="group relative rounded-2xl border border-sand/15 bg-charcoal-light/40 backdrop-blur-2xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-sand/35 hover:bg-charcoal-light/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal-dark/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl border border-sand/15 bg-charcoal/80 flex items-center justify-center transition-colors group-hover:border-sand/30">
                        <Icon className="w-6 h-6 text-sand/70 group-hover:text-sand transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-sand/40 text-[11px] font-semibold uppercase tracking-wider block">
                          {card.label}
                        </span>
                        <span className="text-xs font-mono text-sand/80 font-medium">
                          {card.stat}
                        </span>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-sand/30 group-hover:bg-sand/70 transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-sand uppercase tracking-wide mb-1.5 group-hover:text-sand-light transition-colors">
                    {card.spec}
                  </h3>
                  <p className="text-sand/70 text-xs font-medium tracking-wide mb-3">
                    {card.sub}
                  </p>
                  <p className="text-sand/50 text-xs sm:text-sm leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand/10 flex items-center justify-between text-[11px] text-sand/40 font-mono">
                  <span>Verified Specification</span>
                  <span className="text-sand/60">Active Rig</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Rig Context & Peripherals Glass Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-sand/15 bg-charcoal-light/30 backdrop-blur-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-sand/80 text-xs font-semibold uppercase tracking-wider">
              <Laptop className="w-4 h-4 text-sand" />
              <span>Current Setup & Peripherals Ecosystem</span>
            </div>
            <p className="text-sand/65 text-sm leading-relaxed">
              Powered by a high-performance 13th Gen Intel gaming laptop platform. My setup is specifically tuned for competitive esports and livestream encoding. Currently rocking an ultralight 54g gaming mouse (Evofox Phantom Air) and spatial audio IEMs.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-sand/15 bg-sand/5 px-3 py-1 text-xs text-sand/70">
                144Hz Competitive Display
              </span>
              <span className="rounded-full border border-sand/15 bg-sand/5 px-3 py-1 text-xs text-sand/70">
                54g Ultralight Mouse
              </span>
              <span className="rounded-full border border-sand/15 bg-sand/5 px-3 py-1 text-xs text-sand/70">
                Low Latency IEM Audio
              </span>
              <span className="rounded-full border border-sand/15 bg-sand/5 px-3 py-1 text-xs text-sand/70">
                OBS NVENC AV1/H.264 Encoding
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-sand/10 bg-charcoal/70 p-5">
            <div>
              <div className="flex items-center gap-1.5 text-sand text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-sand/70" />
                <span>Peripheral Opportunities</span>
              </div>
              <p className="text-sand/50 text-xs leading-relaxed">
                Open to testing & reviewing mechanical keyboards, audiophile IEMs, custom mousepads, and PC hardware upgrades for upcoming content.
              </p>
            </div>
            <a
              href="#collaborations"
              className="mt-4 inline-block text-xs text-sand underline underline-offset-4 hover:text-sand-light transition-colors font-medium"
            >
              Partner with me →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
