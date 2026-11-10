import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GithubIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specs', href: '#specs' },
  { label: 'Services', href: '#services' },
  { label: 'Interests', href: '#interests' },
  { label: 'My Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Determine if page has been scrolled past threshold
    setIsScrolled(currentScrollY > 50);

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);

    // Determine active section based on scroll position
    const sections = navLinks.map((link) => link.href.replace('#', ''));
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop / Main Navigation Bar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="transition-all duration-300"
          style={{
            backgroundColor: isScrolled
              ? 'rgba(30, 30, 28, 0.85)'
              : 'rgba(30, 30, 28, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(214, 203, 178, 0.08)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Brand Logo */}
              <button
                onClick={() => scrollToSection('#home')}
                className="font-heading tracking-widest font-bold text-sm text-sand hover:text-sand-light transition-colors duration-200"
              >
                CRAZY VLZZZ
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                        isActive
                          ? 'text-sand'
                          : 'text-sand/60 hover:text-sand/90'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: 'rgba(214, 203, 178, 0.08)',
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Desktop CTA & Social Button */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-full border border-sand/15 bg-charcoal-light/40 backdrop-blur-md flex items-center justify-center text-sand/60 hover:text-sand hover:border-sand/35 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-[#2E6BFF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2E6BFF]/90 transition-colors duration-200"
                >
                  LET'S TALK
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-sand p-2 -mr-2"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              backgroundColor: 'rgba(30, 30, 28, 0.95)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: 'easeOut',
                    }}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-2xl font-heading tracking-wide py-3 px-8 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-sand bg-sand/5'
                        : 'text-sand/60 hover:text-sand/90'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.3,
                  delay: navLinks.length * 0.05,
                  ease: 'easeOut',
                }}
                onClick={() => scrollToSection('#contact')}
                className="mt-6 bg-[#2E6BFF] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#2E6BFF]/90 transition-colors duration-200"
              >
                LET'S TALK
              </motion.button>

              {/* Mobile Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mt-8 pt-6 border-t border-sand/10"
              >
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-sand/15 bg-charcoal-light/60 flex items-center justify-center text-sand/70"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-sand/15 bg-charcoal-light/60 flex items-center justify-center text-sand/70"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-sand/15 bg-charcoal-light/60 flex items-center justify-center text-sand/70"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
