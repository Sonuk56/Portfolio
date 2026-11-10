import { Mail, ArrowUp } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const socialLinks = [
  {
    icon: YoutubeIcon,
    href: portfolioData.personal.youtubeUrl,
    label: 'YouTube',
  },
  {
    icon: InstagramIcon,
    href: portfolioData.personal.instagramUrl,
    label: 'Instagram',
  },
  {
    icon: GithubIcon,
    href: portfolioData.personal.githubUrl,
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: `mailto:${portfolioData.personal.email}`,
    label: 'Email',
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#141412] backdrop-blur-2xl border-t border-sand/10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Brand */}
        <button
          onClick={scrollToTop}
          className="font-heading text-sand text-2xl font-bold tracking-widest uppercase hover:text-sand-light transition-colors"
        >
          {portfolioData.personal.brandName}
        </button>

        {/* Tagline */}
        <p className="text-sand/50 text-sm mt-3 tracking-widest uppercase font-medium">
          {portfolioData.personal.tagline}
        </p>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-medium text-sand/60">
          <a href="#home" className="hover:text-sand transition-colors">Home</a>
          <a href="#about" className="hover:text-sand transition-colors">About</a>
          <a href="#specs" className="hover:text-sand transition-colors">Specs</a>
          <a href="#services" className="hover:text-sand transition-colors">Services</a>
          <a href="#interests" className="hover:text-sand transition-colors">Interests</a>
          <a href="#work" className="hover:text-sand transition-colors">My Work</a>
          <a href="#collaborations" className="hover:text-sand transition-colors">Collaborate</a>
          <a href="#contact" className="hover:text-sand transition-colors">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-sand/15 bg-charcoal-light/40 flex items-center justify-center text-sand/60 hover:text-sand hover:border-sand/40 hover:bg-charcoal-light transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Back to top button in footer */}
        <button
          onClick={scrollToTop}
          className="mt-8 flex items-center gap-2 text-xs text-sand/40 hover:text-sand transition-colors group cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-sand/5 w-full text-sand/30 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {portfolioData.personal.creatorName}. All Rights Reserved.</p>
          <p className="text-[11px] font-mono tracking-wider">
            {portfolioData.personal.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
