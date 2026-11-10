import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const brandText = 'CRAZY VLZZZ';

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'letters' | 'line' | 'exit'>('letters');

  const letterDuration = 0.08;
  const lineDuration = 0.6;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'exit' && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#1E1E1C] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-sand/[0.03] blur-3xl pointer-events-none" />

          {/* Brand text with letter-by-letter reveal */}
          <div className="flex overflow-hidden relative z-10">
            {brandText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * letterDuration,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-heading text-sand text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest uppercase"
                onAnimationComplete={() => {
                  if (i === brandText.length - 1) {
                    setPhase('line');
                  }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sand/50 text-xs tracking-widest uppercase mt-3 relative z-10"
          >
            Gaming • Technology • Creativity
          </motion.p>

          {/* Horizontal line that grows from center */}
          {phase === 'line' && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: lineDuration,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onAnimationComplete={() => {
                setTimeout(() => setPhase('exit'), 400);
              }}
              className="mt-6 w-32 h-[1.5px] bg-sand/40 origin-center relative z-10"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
