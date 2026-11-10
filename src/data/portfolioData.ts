export interface VideoProject {
  id: string;
  youtubeId: string;
  title: string;
  category: 'gaming' | 'technology' | 'reviews' | 'livestreams';
  categoryLabel: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'PackageSearch' | 'Video' | 'Package' | 'Gamepad2' | 'Radio' | 'Handshake';
}

export const portfolioData = {
  personal: {
    fullName: 'Sreenidhi Sunil',
    creatorName: 'Crazy Vlzzz',
    brandName: 'CRAZY VLZZZ',
    tagline: 'Gaming. Technology. Creativity.',
    role: 'Gaming & Technology Content Creator',
    location: 'Kerala, India',
    subscribersCount: '1,789',
    subscribersLabel: 'YouTube Subscribers',
    email: 'sonuk370971@gmail.com',
    youtubeUrl: 'https://www.youtube.com/@crazy.vlzz1',
    instagramUrl: 'https://www.instagram.com/nhidhi_61/',
    githubUrl: 'https://github.com/Sonuk56',
    avatarUrl: '/profile.webp',
  },
  pcSpecs: {
    title: 'Current Battlestation & Hardware',
    subtitle: 'The authentic rig powering my gameplay, streams, and video renders.',
    processor: {
      name: '13th Gen Intel® Core™ i7-13645HX',
      clock: '2.60 GHz base clock (High Performance Hybrid Architecture)',
      description: '14 Cores / 20 Threads for heavy multitasking, video encoding & high-FPS gaming',
    },
    ram: {
      size: '16.0 GB DDR5',
      speed: '5600 MT/s high-speed memory',
      description: 'Ultra-low latency memory tuned for competitive FPS title smoothness',
    },
    gpu: {
      name: 'NVIDIA® GeForce RTX™ 4050 Laptop GPU',
      vram: '6 GB GDDR6 VRAM',
      description: 'Ada Lovelace architecture with DLSS 3, NVENC hardware encoding for streaming',
    },
    storage: {
      size: '477 GB High-Speed NVMe SSD',
      description: 'Rapid asset loading, quick boot times, and recording scratch disk',
    },
  },
  hero: {
    mainHeadline: 'CREATING BEYOND THE GAME.',
    supportingText:
      "I'm Sreenidhi, the creator behind Crazy Vlzzz. Exploring competitive gaming, hardware optimization, and digital technology.",
    ctaCollaborateText: "Let's Collaborate",
    ctaExploreText: 'Explore My Content',
    ctaYoutubeText: 'Watch on YouTube',
  },
  about: {
    sectionHeading: 'MORE THAN JUST A CREATOR.',
    sectionSubtitle:
      'A glimpse into who I am, what drives me, and the passions that fuel my content.',
    paragraphs: [
      "I'm Sreenidhi Sunil, the creator behind Crazy Vlzzz based in Kerala, India. I'm passionate about gaming, PC hardware, technology, and digital content creation.",
      'I enjoy pushing gaming hardware, experimenting with system software, optimizing competitive gaming performance, and sharing raw, authentic experiences through YouTube videos and livestreams.',
      'My content focuses on competitive FPS titles like Valorant, PC hardware tuning, gaming peripherals (ultralight gaming mice, audio gear & IEMs), video editing, and low-latency Windows customization.',
      "I'm always eager to learn through hands-on testing, discover emerging technologies, and collaborate with hardware manufacturers, gaming brands, and peripheral creators who share the same passion.",
    ],
  },
  services: [
    {
      id: 'reviews',
      title: 'Product Reviews',
      iconName: 'PackageSearch',
      description:
        'Honest, real-world testing of gaming mice, audio gear, and PC hardware with transparent benchmarks.',
    },
    {
      id: 'sponsored',
      title: 'Sponsored Videos',
      iconName: 'Video',
      description:
        'Sponsored content seamlessly integrating products and gaming software to an engaged community.',
    },
    {
      id: 'unboxing',
      title: 'Unboxing & First Impressions',
      iconName: 'Package',
      description:
        'Showcasing unboxing experience, packaging, build quality, ergonomics, and initial reactions.',
    },
    {
      id: 'gaming-content',
      title: 'Gaming Content',
      iconName: 'Gamepad2',
      description:
        'Valorant gameplay montages, competitive clutches, sensitivity guides, and strategy breakdowns.',
    },
    {
      id: 'livestreams',
      title: 'Livestream Promotions',
      iconName: 'Radio',
      description:
        'Featuring hardware and gaming accessories in live sessions with active chat interaction.',
    },
    {
      id: 'ambassadorship',
      title: 'Brand Ambassadorship',
      iconName: 'Handshake',
      description:
        'Long-term collaborations with growing gaming and hardware brands seeking authentic creator presence.',
    },
  ] as ServiceItem[],
  collaborations: {
    heading: "LET'S CREATE SOMETHING TOGETHER.",
    supportingText:
      "I'm open to working with gaming and technology brands to test gear, produce video reviews, showcase products on stream, and build meaningful partnerships.",
    categories: [
      'Gaming Mice & Mousepads',
      'Audio & IEM Brands',
      'Gaming Laptops & PCs',
      'PC Components & Cooling',
      'Mechanical Keyboards',
      'Gaming Accessories & Gear',
      'Gaming Peripherals',
      'Gaming Studios & Publishers',
    ],
    ctaText: 'DISCUSS A COLLABORATION',
  },
  realVideos: [
    {
      id: 'Ecp9luwhKUs',
      youtubeId: 'Ecp9luwhKUs',
      title: 'Evofox Phantom Air ₹599 Ultra Light Weight (54g) Gaming Mouse | Honest Review',
      category: 'reviews',
      categoryLabel: 'Hardware Review',
      description:
        'My in-depth, honest review of the Evofox Phantom Air 54g ultralight gaming mouse — covering sensor tracking, weight balance, build quality, and value for budget FPS players.',
      youtubeUrl: 'https://www.youtube.com/watch?v=Ecp9luwhKUs',
      thumbnailUrl: 'https://img.youtube.com/vi/Ecp9luwhKUs/maxresdefault.jpg',
      badge: 'Featured Review',
    },
    {
      id: '8_D4sSftfaA',
      youtubeId: '8_D4sSftfaA',
      title: 'What 200+ Hours of VALORANT Looks Like',
      category: 'gaming',
      categoryLabel: 'Competitive FPS',
      description:
        'Showcasing the progression, mechanical habits, and clutch decision-making after hundreds of hours grinding Valorant ranked.',
      youtubeUrl: 'https://www.youtube.com/watch?v=8_D4sSftfaA',
      thumbnailUrl: 'https://img.youtube.com/vi/8_D4sSftfaA/maxresdefault.jpg',
      badge: 'Highlights',
    },
    {
      id: 'GHS8FuATaVU',
      youtubeId: 'GHS8FuATaVU',
      title: '144Hz 0.27 SENS + 800 DPI = Aimbot',
      category: 'technology',
      categoryLabel: 'Hardware & Setup',
      description:
        'Tuning mouse sensitivity, high refresh rate display pacing, and optimal DPI multiplier for pixel-precise crosshair control.',
      youtubeUrl: 'https://www.youtube.com/watch?v=GHS8FuATaVU',
      thumbnailUrl: 'https://img.youtube.com/vi/GHS8FuATaVU/maxresdefault.jpg',
      badge: 'Aim Guide',
    },
    {
      id: 'wb06vRvdk5Q',
      youtubeId: 'wb06vRvdk5Q',
      title: 'Smooth Aim + Perfect Sens = Free Wins',
      category: 'gaming',
      categoryLabel: 'Valorant Gameplay',
      description:
        'Crosshair placement principles, calm aiming mechanics, and clutching high-stakes rounds in competitive matches.',
      youtubeUrl: 'https://www.youtube.com/watch?v=wb06vRvdk5Q',
      thumbnailUrl: 'https://img.youtube.com/vi/wb06vRvdk5Q/maxresdefault.jpg',
    },
    {
      id: 'aVG_jeaD6SI',
      youtubeId: 'aVG_jeaD6SI',
      title: 'Unfiltered Moments From My Recent Streams 😂',
      category: 'livestreams',
      categoryLabel: 'Stream Highlights',
      description:
        'Funniest moments, chaotic discord comms, and spontaneous gameplay highlights from recent live streaming sessions.',
      youtubeUrl: 'https://www.youtube.com/watch?v=aVG_jeaD6SI',
      thumbnailUrl: 'https://img.youtube.com/vi/aVG_jeaD6SI/hqdefault.jpg',
      badge: 'Live Clips',
    },
    {
      id: '2BtSnAiDcuw',
      youtubeId: '2BtSnAiDcuw',
      title: "I'm Going INSANE in Valorant Ranked...",
      category: 'gaming',
      categoryLabel: 'Ranked Gameplay',
      description:
        'Intense tactical shooter gameplay, navigating chaotic team calls, and high-impact clutch moments.',
      youtubeUrl: 'https://www.youtube.com/watch?v=2BtSnAiDcuw',
      thumbnailUrl: 'https://img.youtube.com/vi/2BtSnAiDcuw/maxresdefault.jpg',
    },
    {
      id: '6iFlFIbYDAY',
      youtubeId: '6iFlFIbYDAY',
      title: 'Toma Toma — Valorant Montage',
      category: 'gaming',
      categoryLabel: 'Montage & Edit',
      description:
        'A fast-paced musical sync montage featuring cleanest one-taps, flick shots, and cinematic transition editing.',
      youtubeUrl: 'https://www.youtube.com/watch?v=6iFlFIbYDAY',
      thumbnailUrl: 'https://img.youtube.com/vi/6iFlFIbYDAY/hqdefault.jpg',
    },
    {
      id: 'hhdhsXBf540',
      youtubeId: 'hhdhsXBf540',
      title: 'AM I Good At Jett??',
      category: 'gaming',
      categoryLabel: 'Valorant Highlights',
      description:
        'Duelist mechanics showcase: updraft plays, blade storm accuracy, and aggressive entry fragging on Jett.',
      youtubeUrl: 'https://www.youtube.com/watch?v=hhdhsXBf540',
      thumbnailUrl: 'https://img.youtube.com/vi/hhdhsXBf540/hqdefault.jpg',
    },
  ] as VideoProject[],
};
