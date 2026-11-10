import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="w-8 h-[1px] bg-sand/30" />
          <span className="text-sand/60 text-xs font-semibold tracking-widest uppercase">
            {badge}
          </span>
          <span className="w-8 h-[1px] bg-sand/30" />
        </div>
      )}
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand font-bold leading-none">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-sand/60 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
