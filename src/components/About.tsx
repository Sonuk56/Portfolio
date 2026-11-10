import { motion, type Variants } from 'framer-motion';
import {
  Gamepad2,
  Cpu,
  Monitor,
  Video,
  Film,
  Terminal,
  Mouse,
  Headphones,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const interests = [
  { label: 'Gaming', icon: Gamepad2, desc: 'Competitive FPS & high-tier mechanics' },
  { label: 'PC Hardware', icon: Cpu, desc: 'Custom tuning & laptop architecture' },
  { label: 'Technology', icon: Monitor, desc: 'Next-gen silicon & digital gear' },
  { label: 'Content Creation', icon: Video, desc: 'High-fidelity multimedia storytelling' },
  { label: 'Video Editing', icon: Film, desc: 'Pacing, sound design & montage editing' },
  { label: 'Linux & Windows', icon: Terminal, desc: 'OS debloating & low-latency tuning' },
  { label: 'Gaming Peripherals', icon: Mouse, desc: 'Ultralight mice, mousepads & sensors' },
  { label: 'Audio Equipment', icon: Headphones, desc: 'IEMs & directional audio footsteps' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
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
              Profile
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand leading-none font-bold">
            {about.sectionHeading}
          </h2>
          <p className="mt-4 text-sand/50 text-base md:text-lg max-w-xl">
            {about.sectionSubtitle}
          </p>
        </motion.div>

        {/* ── Editorial Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — Real Profile Photo in Editorial Liquid Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-sand/20 bg-charcoal-light/40 backdrop-blur-2xl shadow-2xl group">
              {/* Actual Portrait Photo */}
              <img
                src={personal.avatarUrl}
                alt={personal.fullName}
                className="w-full h-full object-cover object-center filter grayscale-[30%] contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
              />

              {/* Liquid glass light sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Bottom Card Identity Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-full border border-sand/20 bg-charcoal/80 text-[10px] font-mono tracking-widest uppercase text-sand mb-2">
                  Creator & Streamer
                </span>
                <h3 className="font-heading text-sand text-xl font-bold tracking-wide uppercase">
                  {personal.fullName}
                </h3>
                <p className="text-sand/60 text-xs tracking-widest uppercase mt-0.5 font-medium">
                  {personal.brandName} • {personal.location}
                </p>
              </div>

              {/* Subtle top reflection */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-charcoal/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — Authentic Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="lg:col-span-3 space-y-5"
          >
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-sand/75 text-base md:text-lg leading-relaxed font-normal">
                {idx === 0 ? (
                  <>
                    I'm Sreenidhi Sunil, the creator behind{' '}
                    <strong className="text-sand font-semibold">Crazy Vlzzz</strong> based in Kerala, India. I'm
                    passionate about gaming, PC hardware, technology, and digital content creation.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-3">
              <a
                href="#specs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sand/20 bg-charcoal-light/60 hover:bg-sand/10 hover:border-sand/40 text-sand text-xs font-semibold uppercase tracking-wider transition-all"
              >
                View My PC Hardware Rig →
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Interest Interactive Glass Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {interests.map(({ label, icon: Icon, desc }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="group relative rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-xl p-5 flex flex-col justify-between cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-sand/30 hover:bg-charcoal-light/60 hover:shadow-xl hover:shadow-charcoal-dark/40"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon
                  className="w-6 h-6 text-sand/60 shrink-0 transition-colors duration-300 group-hover:text-sand"
                  strokeWidth={1.5}
                />
                <span className="w-1.5 h-1.5 rounded-full bg-sand/20 group-hover:bg-sand/60 transition-colors" />
              </div>
              <div>
                <span className="block text-sand font-heading text-sm font-semibold tracking-wide transition-colors duration-300 group-hover:text-sand-light">
                  {label}
                </span>
                <span className="block text-sand/40 text-xs mt-1 leading-snug">
                  {desc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
