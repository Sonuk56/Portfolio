import { motion, type Variants } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { personal, hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with layered depth */}
      <div className="absolute inset-0 bg-[#1E1E1C]" />

      {/* Subtle radial glass gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 35%, rgba(214, 203, 178, 0.05) 0%, rgba(20, 20, 18, 0.8) 75%)',
        }}
      />

      {/* Subtle liquid glass ambient sphere */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-sand/[0.02] blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center"
      >
        {/* Real Profile Avatar with Apple-inspired Glass Ring */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('#about')}>
            <div className="w-[128px] h-[128px] rounded-full p-1 border-2 border-sand/25 bg-charcoal-light/70 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-sand/50 group-hover:scale-105">
              <img
                src={personal.avatarUrl}
                alt={personal.fullName}
                className="w-full h-full rounded-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Live Indicator Pill */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full border border-sand/20 bg-charcoal/90 backdrop-blur-md flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
              <span className="text-[10px] font-mono text-sand/80 uppercase tracking-widest font-semibold">
                Creator
              </span>
            </div>
          </div>
        </motion.div>

        {/* Name & Creator Identity Badge */}
        <motion.div variants={itemVariants} className="mb-6 space-y-1.5">
          <h2 className="text-sand text-lg font-medium tracking-normal">{personal.fullName}</h2>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sand/15 bg-charcoal-light/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sand/60" />
            <span className="text-sand/90 tracking-widest text-xs uppercase font-semibold">
              {personal.brandName}
            </span>
          </div>
          <p className="text-sand/70 text-sm font-medium pt-1">
            {personal.role}
          </p>
          <div className="flex items-center justify-center gap-3 text-sand/50 text-xs tracking-wide">
            <span>{personal.location}</span>
            <span>•</span>
            <span>{personal.subscribersCount} {personal.subscribersLabel}</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading uppercase tracking-tight text-sand text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.98] mb-6"
        >
          {hero.mainHeadline}
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          variants={itemVariants}
          className="text-sand/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {hero.supportingText}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Explore My Work (Charcoal & Sand outline) */}
          <button
            onClick={() => scrollToSection('#work')}
            className="border border-sand/25 text-sand bg-charcoal-light/40 backdrop-blur-md px-7 py-3.5 rounded-full text-sm font-medium hover:bg-sand/10 hover:border-sand/40 transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            {hero.ctaExploreText}
          </button>

          {/* Let's Collaborate (STRICT ELECTRIC BLUE ONLY FOR PRIMARY CTA) */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#2E6BFF] hover:bg-[#4A7FFF] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#2E6BFF]/20 transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            {hero.ctaCollaborateText}
          </button>

          {/* Watch on YouTube (Charcoal & Sand outline) */}
          <a
            href={personal.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-sand/25 text-sand bg-charcoal-light/40 backdrop-blur-md px-7 py-3.5 rounded-full text-sm font-medium hover:bg-sand/10 hover:border-sand/40 transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
          >
            {hero.ctaYoutubeText}
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-20"
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-sand/40 text-[10px] tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-4 h-4 text-sand/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
