import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Play, ExternalLink, X, Sparkles } from 'lucide-react';
import { portfolioData, type VideoProject } from '../data/portfolioData';

const categories = [
  { id: 'all', label: 'All Videos' },
  { id: 'reviews', label: 'Product Reviews (1)' },
  { id: 'gaming', label: 'Gaming Gameplay' },
  { id: 'technology', label: 'Hardware & Setup' },
  { id: 'livestreams', label: 'Stream Highlights' },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState<VideoProject | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.realVideos
      : portfolioData.realVideos.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <span className="w-6 h-[1px] bg-sand/30" />
            <span className="text-sand/50 text-xs font-semibold tracking-widest uppercase">
              YouTube Content
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-sand font-bold leading-none">
            Selected Content.
          </h2>
          <p className="mt-4 text-sand/50 text-base md:text-lg max-w-xl">
            Real uploads from my YouTube channel — including hardware reviews, tactical FPS guides, and stream highlights.
          </p>
        </motion.div>

        {/* ── Filter Tabs (Strict Charcoal & Sand) ── */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-sand bg-sand/15 border border-sand/30 shadow-md'
                    : 'text-sand/50 hover:text-sand/80 hover:bg-sand/5 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Video Portfolio Grid ── */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group rounded-2xl border border-sand/10 bg-charcoal-light/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-sand/30 hover:bg-charcoal-light/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-charcoal-dark/60"
                >
                  {/* Thumbnail with YouTube Cover */}
                  <div
                    onClick={() => setActiveModalVideo(project)}
                    className="relative aspect-video bg-charcoal/90 flex items-center justify-center overflow-hidden cursor-pointer group/thumb border-b border-sand/10"
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault is not available
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent z-10" />

                    {/* Play Button Icon */}
                    <div className="absolute z-20 w-12 h-12 rounded-full border border-sand/30 bg-charcoal/85 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 group-hover/thumb:scale-115 group-hover/thumb:border-sand/70 group-hover/thumb:bg-charcoal">
                      <Play className="w-5 h-5 text-sand ml-0.5" fill="#D6CBB2" />
                    </div>

                    {/* Category or Badge */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                      <span className="inline-block rounded-md border border-sand/20 bg-charcoal/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sand">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="inline-block rounded-md border border-sand/20 bg-[#1E1E1C]/90 px-2 py-1 text-[10px] font-medium text-sand/80">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-sand tracking-wide mb-2 line-clamp-2 group-hover:text-sand-light transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sand/60 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-sand/10 flex items-center justify-between">
                      <button
                        onClick={() => setActiveModalVideo(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand hover:text-sand-light transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5" fill="#D6CBB2" />
                        Watch Video
                      </button>

                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-sand/40 hover:text-sand transition-colors"
                      >
                        YouTube
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* ── Channel Link Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-2xl border border-sand/15 bg-charcoal-light/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-semibold tracking-wider uppercase text-sand/60">
              <Sparkles className="w-3.5 h-3.5 text-sand" />
              <span>YouTube Channel • @crazy.vlzz1</span>
            </div>
            <h4 className="font-heading font-bold text-sand text-lg sm:text-xl uppercase">
              1,789 Subscribers & Growing
            </h4>
            <p className="text-sand/50 text-xs sm:text-sm max-w-lg">
              Catch all the latest gaming clips, competitive Valorant matches, mouse reviews, and upcoming livestream sessions.
            </p>
          </div>
          <a
            href={portfolioData.personal.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-sand/25 text-sand bg-charcoal-light/60 hover:bg-sand/10 hover:border-sand/40 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 shrink-0"
          >
            Visit Channel
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </motion.div>
      </div>

      {/* ── Real Video Player Modal ── */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/90 backdrop-blur-2xl"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="relative w-full max-w-3xl rounded-2xl border border-sand/20 bg-charcoal-light/95 p-5 sm:p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-sand/10 mb-4">
                <span className="text-sand/60 text-xs uppercase tracking-widest font-semibold">
                  {activeModalVideo.categoryLabel}
                </span>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="text-sand/50 hover:text-sand transition-colors p-1 rounded-lg hover:bg-sand/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Responsive iFrame */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-charcoal border border-sand/10 mb-4 shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeModalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div>
                  <h4 className="font-heading text-sand text-base font-bold line-clamp-1">
                    {activeModalVideo.title}
                  </h4>
                  <p className="text-sand/50 text-xs mt-1 line-clamp-2 max-w-xl">
                    {activeModalVideo.description}
                  </p>
                </div>
                <a
                  href={activeModalVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-sand/30 hover:bg-sand/10 text-sand px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 inline-flex items-center justify-center gap-1.5"
                >
                  Open in YouTube
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
