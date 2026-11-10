import { motion, type Variants } from 'framer-motion';
import { Gamepad2, Cpu, Mouse, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InterestCategory {
  icon: LucideIcon;
  name: string;
  tagline: string;
  items: string[];
}

const categories: InterestCategory[] = [
  {
    icon: Gamepad2,
    name: 'Gaming',
    tagline: 'Competitive FPS & immersive worlds',
    items: ['Valorant', 'Minecraft', 'FPS Games', 'Competitive Gaming', 'Gaming Livestreams'],
  },
  {
    icon: Cpu,
    name: 'Technology & Rig',
    tagline: 'Intel 13th Gen, RTX architecture & tuning',
    items: [
      'Intel Core i7-13645HX',
      'RTX 4050 6GB GPU',
      '16GB DDR5 5600 MT/s',
      'NVMe SSD Storage',
      'Windows Optimization',
      'Low Latency Tuning',
    ],
  },
  {
    icon: Mouse,
    name: 'Gaming Peripherals',
    tagline: 'Ultralight mice, audio & sensor precision',
    items: [
      'Ultralight Gaming Mice (54g)',
      'IEMs & Spatial Audio',
      '144Hz Display Pacing',
      'Gaming Mousepads',
      'Testing Keyboards',
      'Audio Equipment',
    ],
  },
  {
    icon: Video,
    name: 'Content Creation',
    tagline: 'Broadcast production & creative pacing',
    items: [
      'YouTube',
      'OBS Studio',
      'Video Editing',
      'Thumbnail Design',
      'Livestreaming',
      'Product Reviews',
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function Interests() {
  return (
    <section id="interests" className="relative py-28 md:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              Focus Areas
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-sand">
            Things I'm Into.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-sand/50 max-w-xl">
            A glimpse into the things that drive my content and creativity.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                variants={cardVariants}
                className="group relative rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-sand/30 hover:bg-charcoal-light/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal-dark/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl border border-sand/15 bg-charcoal/70 flex items-center justify-center transition-colors group-hover:border-sand/30">
                        <Icon className="w-6 h-6 text-sand/70 group-hover:text-sand transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-sand">
                          {cat.name}
                        </h3>
                        <p className="text-sand/40 text-xs mt-0.5">{cat.tagline}</p>
                      </div>
                    </div>
                    <span className="text-xs text-sand/40 font-mono">0{categories.indexOf(cat) + 1}</span>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-sand/10 bg-sand/5 px-3.5 py-1.5 text-xs font-medium text-sand/80 tracking-wide transition-all duration-200 hover:border-sand/30 hover:bg-sand/10 hover:text-sand"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-sand/10 flex items-center justify-between text-xs text-sand/35">
                  <span>Interest domain</span>
                  <span className="w-1 h-1 rounded-full bg-sand/30" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
